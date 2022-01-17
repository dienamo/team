const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

router.post("/results", (req, res) => {
  const { response } = req.body;
  let resultId;
  switch (true) {
    case JSON.stringify(Object.values(response)) === JSON.stringify([0, 0, 0]):
      resultId = 1;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([0, 1, 0]):
      resultId = 2;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([2, 0, 0]):
      resultId = 3;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([1, 2, 1]):
      resultId = 1;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([2, 0, 2]):
      resultId = 2;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([1, 1, 1]):
      resultId = 3;
      break;
    case JSON.stringify(Object.values(response)) === JSON.stringify([1, 2, 2]):
      resultId = 1;
      break;

    default:
      resultId = 3;
  }
  Result.find({ id: resultId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/result", (req, res) => {
  const { id, result } = req.body;
  Result.create({ id, result })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.put("/vote", async (req, res) => {
//   try {
//     const winner = await Cat.findByIdAndUpdate(
//       { _id: req.body.catId },
//       { $inc: { votes: 1 } },
//       { new: true }
//     );
//     const count = await Cat.countDocuments({});
//     const random = await Math.floor(Math.random() * count);
//     const twoCats = await Cat.find({}).skip(random).limit(2);
//     res.status(200).json({ twoCats, winner });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
