const ratingService = require("../services/rating.service.js");
const handleServerError = require("../utils/errorResponse.js");

const createRating = async (req, res) => {
  const user = await req.user;
  // console.log("=========user", user)
  // console.log("=========req ====== user", req.user)
  try {
    const rating = await ratingService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const getProductRating = async (req, res) => {
  const user = await req.user;
  const productId = await req.params.productId;
  try {
    const ratings = await ratingService.getProductRating(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    return handleServerError(res, error);
  }
};

module.exports = { createRating, getProductRating };
