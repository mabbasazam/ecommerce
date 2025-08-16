const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discounted_price: {
    type: String,
    required: true,
  },
  discount_persent: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  imageUrl: {
    type: String,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numRatings: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  created_at: {
    type: Date,
    Default: Date.now,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
