const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");
const handleServerError = require("../utils/errorResponse.js");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log("Tokennnnnnnnn:", token);
    if (!token) {
      return res.status(404).send({ message: "Token Not Found" });
    }

    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await userService.getUserById(userId);
    // console.log("userrrrrrrrrr", user);
    req.user = user;
    next();
  } catch (error) {
    return handleServerError(res, error);
  }
};

module.exports = authenticate;
