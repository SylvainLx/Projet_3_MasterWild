const fs = require("fs");
const path = require("path");
const masterclassController = require("../models/masterclassManager");
const keywordController = require("../models/keywordManager");
const categoryController = require("../models/categoryManager");

exports.addOne = async (req, res) => {
  const dataMasterclass = req.body.text.slice(0, 5);
  const dataKeyword = req.body.text[5];
  const dataCategory = req.body.text[6];
  if (!req.file && !req.body) {
    res.sendStatus(400);
  } else {
    const data = await masterclassController.createOne(
      dataMasterclass,
      req.file
    );
    const data2 = await keywordController.createOne(dataKeyword, data.Id);
    const data3 = await categoryController.createOne(dataCategory, data.Id);
    res.status(201).json(data, data3, data2);
  }
};

exports.getAll = async (req, res) => {
  const data = await masterclassController.getAll();

  const formatedData = data.map((img) => {
    const photo = `${req.protocol}://${req.get("host")}/masterclass/${
      img.photo
    }`;
    return { ...img, photo };
  });
  res.json(formatedData);
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const removed = await masterclassController.deleteOne(id);

  if (removed) {
    await fs.promises.unlink(
      path.join(__dirname, `../../public/data/uploads/${removed.photo}`)
    );
  }
  res.sendStatus(204);
};
