const fs = require("fs");
const path = require("path");
const masterclassController = require("../models/masterclassManager");

const {
  validateMasterclass,
  validateEntreprise,
  validateKeyword,
  validateCategory,
} = require("../helpers/validateMasterclass");

exports.addOne = async (req, res) => {
  const title = req.body.text[0];
  const name = req.body.text[1];
  const source = req.body.text[2];
  const description = req.body.text[3];
  const speciality = req.body.text[4];
  const category = req.body.text[5];
  const keyword = req.body.text[6];

  const errorMasterclass = validateMasterclass({
    title,
    description,
    source,
  });
  const errorEntreprise = validateEntreprise({
    name,
    speciality,
  });
  const errorKeyword = validateKeyword({
    name: keyword,
  });
  const errorCategory = validateCategory({
    name: category,
  });

  if (errorMasterclass) {
    console.warn(errorMasterclass);
    res.status(422).json(errorEntreprise);
  }

  if (errorEntreprise) {
    console.warn(errorEntreprise);
    res.status(422).json(errorEntreprise);
  }

  if (errorKeyword) {
    console.warn(errorKeyword);
    res.status(422).json(errorKeyword);
  }

  if (errorCategory) {
    console.warn(errorCategory);
    res.status(422).json(errorCategory);
  }

  if (!req.file && !req.body) {
    res.sendStatus(400);
  } else {
    const data = await masterclassController.createOne(req.body.text, req.file);
    res.status(201).json(data);
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const currentMasterclass = await masterclassController.getOne(id);
    if (!currentMasterclass) {
      return res.status(404).send("Aucune masterclass trouvée");
    }
    return res.status(200).json({ currentMasterclass });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await masterclassController.getAll();
    if (data.length === 0) {
      return res.status(404).send("Aucune masterclass trouvée");
    }
    return res.status(200).json({ data });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.getAllKeywords = async (req, res) => {
  try {
    const data = await masterclassController.getAllKeywords();
    if (data.length === 0) {
      return res.status(404).send("Aucun mot-clé trouvé");
    }
    return res.status(200).json({ data });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.editOne = async (req, res) => {
  const { id } = req.params;
  console.warn(req.body);

  const exitingMasterclass = await masterclassController.getOne(id);

  if (!exitingMasterclass) {
    return res.sendStatus(404);
  }

  try {
    const masterclassUpdated = await masterclassController.editOne(
      id,
      req.body
    );
    return res
      .status(200)
      .json({ "Masterclass mise à jour :": { masterclassUpdated } });
  } catch (e) {
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const removed = await masterclassController.getOne(id);
  if (!removed) {
    return res.status(404).json({ Erreur: "Aucune masterclass trouvée" });
  }
  try {
    await masterclassController.deleteOne(id);
    await fs.promises.unlink(
      path.join(
        __dirname,
        `../../public/data/uploads/${removed.entreprise.logo_name}`
      )
    );
    return res
      .status(200)
      .json({ Succès: `Masterclass supprimée avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};
