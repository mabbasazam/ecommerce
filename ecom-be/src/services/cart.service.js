const Cart = require("../models/cart.model.js");
const CartItems = require("../models/cartitem.model.js");
const Product = require("../models/product.model.js");

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found");
    }

    let cartItems = await CartItems.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems; // Match the field name if it exists in schema

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItems = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discounted_price;
      totalItems += cartItem.quantity;
    }

    cart.total_price = totalPrice;
    cart.total_items = totalItems;
    cart.total_discounted_price = totalDiscountedPrice;
    cart.discount = totalPrice - totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    const isPresent = await CartItems.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });

    if (!isPresent) {
      const cartItem = new CartItems({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discounted_price: product.discounted_price,
      });
      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to cart";
    } else {
      return "Item already in cart"; // ✅ always return a message
    }
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = { createCart, findUserCart, addCartItem };
