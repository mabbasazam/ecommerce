const jwt = require("jsonwebtoken");

const SECRET_KEY = "sjkghd987862yu3ueidljkhjsdjckjkdhjhfjkhjdhjkskljkdh87";
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  // console.log("decoded token", decodedToken);
  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };
