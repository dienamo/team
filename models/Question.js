const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    id: Number,
    question: String,
    responses: {
      r1: String,
      r2: String,
      r3: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Question = mongoose.model("Cat", questionSchema);

module.exports = Question;
