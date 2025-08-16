const reviewService = require("../services/review.service.js");
const handleServerError = require("../utils/errorResponse.js");

const createReview = async (req, res) => {
  const user = await req.user;
  try {
    const review = await reviewService.createReview(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const getAllReview = async (req, res) => {
  const user = await req.user;
  const productId = req.params.productId;
  try {
    const reviews = await reviewService.getAllReview(productId);
    return res.status(201).send(reviews);
  } catch (error) {
    return handleServerError(res, error);
  }
};

module.exports = { createReview, getAllReview };
