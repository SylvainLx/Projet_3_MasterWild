const fs = require("fs");
const path = require("path");
const masterclassController = require("../models/masterclassManager");

exports.addOne = async (req, res) => {
  const dataMasterclass = req.body.text;

  if (!req.file && !req.body) {
    res.sendStatus(400);
  } else {
    const data = await masterclassController.createOne(
      dataMasterclass,
      req.file
    );
    res.status(201).json(data);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await masterclassController.getAll();

    // const formatedData = data.map((img) => {
    //   const photo = `${req.protocol}://${req.get("host")}/masterclass/${
    //     img.photo
    //   }`;
    //   return { ...img, photo };
    // });

    if (data.length === 0) {
      return res.status(404).send("Aucune masterclass trouvée");
    }
    return res.status(200).json({ data });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
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
