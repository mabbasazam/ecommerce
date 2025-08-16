const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");
const OrderItem = require("../models/orderItems.model.js");
const cartService = require("../services/cart.service.js");

async function createOrder(user, shippAddress) {
  let address;

  if (shippAddress._id) {
    let existAddress = await Address.findById(shippAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();

    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discounted_price: item.discounted_price,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem._id); // ✅ Only push the ID
  }
  

  const createdOrder = new Order({
    user,
    orderItems,
    total_price: cart.total_price,
    total_discounted_price: cart.total_discounted_price,
    discount: cart.discount,
    total_item: cart.total_items,
    shippAddress: address,
  });
  const saveOrder = await createdOrder.save();
  return saveOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}
async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
}
async function shipedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";
  return await order.save();
}
async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";
  return await order.save();
}
async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED";
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderhistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipedOrder,
  deliverOrder,
  cancelOrder,
  userOrderhistory,
  getAllOrders,
  findOrderById,
  deleteOrder,
};
