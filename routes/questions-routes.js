const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/questions", (req, res) => {
  Question.find()
    .then((allQuestions) => {
      res.json(allQuestions);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/question", (req, res) => {
  const { id, question, responses } = req.body;
  console.log(id, question, responses);

  Question.create({ id, question, responses })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
