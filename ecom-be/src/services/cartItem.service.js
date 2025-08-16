const userService = require("../services/user.service.js");
const CartItem = require("../models/cartitem.model.js");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    console.log("itemmmmmm", item);

    if (!item) {
      throw new Error("cart item not found", cartItemId);
    }
    const user = await userService.getUserById(userId);
    if (!user) {
      throw new Error("user not found", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discounted_price = item.quantity * item.product.discounted_price;
      const updateCartItem = await item.save();
      // console.log("update cart itemmmmm", updateCartItem);
      return updateCartItem;
    } else {
      throw new Error("You can't update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  try {
    const cartItem = await findCartItemById(cartItemId);
    // console.log("cartItemmmmm", cartItem);
    const user = await userService.getUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
      return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("you can't remoove another item");
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("cart Item not found with id", cartItemId);
  }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };
