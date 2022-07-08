const categoryController = require("../models/categoryDataAccess");

exports.createOne = async (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    const data = await categoryController.createOne(req.body);
    res.status(201).json(data);
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentCategory = await categoryController.getOne(id);
    if (!currentCategory) {
      return res.status(404).send("Aucune categorie trouvée");
    }
    return res.status(200).json({ currentCategory });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await categoryController.getAll();
    if (data.length === 0) {
      return res.status(404).send("Aucune categorie trouvée");
    }
    return res.status(200).json({ data });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const removed = await categoryController.getOne(id);
  if (!removed) {
    return res.status(404).json({ Erreur: "Aucune categorie trouvée" });
  }
  try {
    await categoryController.deleteOne(id);
    return res.status(200).json({ Succès: `Categorie supprimée avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};
