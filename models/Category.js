const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const collection = "blogCategories";
module.exports = mongoose.model("Category", CategorySchema, collection);