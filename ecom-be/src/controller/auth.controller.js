const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   if (!emailRegex.test(email)) {
  //     throw new Error("Invalid email format");
  //   }

  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);

    return res.status(201).send({ jwt, message: "Register Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password..." });
    }

    const jwt = jwtProvider.generateToken(user._id);

    return res.status(201).send({ jwt, message: "Login Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
