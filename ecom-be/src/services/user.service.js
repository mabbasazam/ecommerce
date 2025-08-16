const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    email = email.toLowerCase();

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error(`User already exists with email: ${email}`);
    }

    password = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`User Not Found With this Id: ${userId}`);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`User not exists with Email: ${email}`);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await getUserById(userId);
    if (!user) {
      throw new Error(`User Not Found With this Id: ${userId}`);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getProfileByToken,
  getAllUsers,
};
