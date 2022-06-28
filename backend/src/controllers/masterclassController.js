const fs = require("fs");
const path = require("path");
const masterclassController = require("../models/masterclassManager");

exports.addOne = async (req, res) => {
  const data5 = req.body.text.slice(0, 5);
  if (!req.file && !req.body) {
    res.sendStatus(400);
  } else {
    const data = await masterclassController.createOne(req.body.text, req.file);
    const data2 = await masterclassController.createOne(
      req.body.text,
      req.file
    );
    const data3 = await masterclassController.createOne(
      req.body.text,
      req.file
    );
    res.status(201).json(data, data3, data2, data5);
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
