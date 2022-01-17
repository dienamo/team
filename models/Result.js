const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    id: Number,
    result: {
      title: String,
      text: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
