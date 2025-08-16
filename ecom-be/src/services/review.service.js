const Review = require("../models/review.model.js");
const productService = require("../services/product.service.js");

async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);
  console.log("===========", product);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    created_at: new Date(),
  });
  await product.save();
  return await review.save();
}

async function getAllReview(productId) {
  const product = await productService.findProductById(productId);
  return await Review.find({ product: productId }).populate("user");
}

module.exports = { createReview, getAllReview };
