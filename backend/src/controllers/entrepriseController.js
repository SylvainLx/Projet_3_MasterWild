const fs = require("fs");
const path = require("path");
const entrepriseController = require("../models/entrepriseDataAccess");

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentEntreprise = await entrepriseController.getOne(id);
    if (!currentEntreprise) {
      return res.status(404).send("Aucune entreprise trouvée");
    }
    return res.status(200).json({ currentEntreprise });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await entrepriseController.getAll();
    if (data.length === 0) {
      return res.status(404).send("Aucune entreprises trouvée");
    }
    return res.status(200).json({ data });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const exitingMasterclass = await entrepriseController.getOne(id);
  if (!exitingMasterclass) {
    return res.sendStatus(404);
  }

  try {
    await fs.promises.unlink(
      path.join(
        __dirname,
        `../../public/data/uploads/${exitingMasterclass.entreprise.logo_name}`
      )
    );
    const masterclassUpdated = await entrepriseController.editOne(
      id,
      req.body,
      req.file
    );
    return res
      .status(200)
      .json({ "Masterclass mise à jour :": { masterclassUpdated } });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const removed = await entrepriseController.getOne(id);
  if (!removed) {
    return res.status(404).json({ Erreur: "Aucune entreprise trouvée" });
  }
  try {
    await entrepriseController.deleteOne(id);
    return res
      .status(200)
      .json({ Succès: `Entreprise supprimée avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};
