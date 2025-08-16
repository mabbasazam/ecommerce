const mongoose = require("mongoose");

const catogorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  level: {
    type: Number,
    required: true,
  },
});

const Category = mongoose.model("categories", catogorySchema);
module.exports = Category;
