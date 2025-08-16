const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cartItems",
      required: true,
    },
  ],
  total_price: {
    type: Number,
    default: 0,
  },
  total_items: {
    type: Number,
    default: 0,
  },
  total_discounted_price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
