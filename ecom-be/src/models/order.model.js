const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orderItems: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderItems",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "addresses",
  },
  paymentDetails: {
    paymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "PENDING",
    },
  },
  total_price: {
    type: Number,
    required: true,
  },
  total_discounted_price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    default: "PENDING",
  },
  total_item: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    deafult: Date.now,
  },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
