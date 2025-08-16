const Rating = require("../models/rating.model.js");
const productService = require("../services/product.service.js");

async function createRating(req, user) {
  const product = await productService.findProductById(req.productId);
  console.log("=========product", product);


  const rating = new Rating({
    user: user._id,
    product: product._id,
    rating: req.rating,
    created_at: new Date(),
  });
  console.log("=========rating", rating)

  return await rating.save();
}

async function getProductRating(productId) {
  return await Rating.find({ product: productId });
}


module.exports={createRating, getProductRating}