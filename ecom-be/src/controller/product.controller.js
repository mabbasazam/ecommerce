const productService = require("../services/product.service.js");
const handleServerError = require("../utils/errorResponse.js");

const createProduct = async (req, res) => {
  console.log("reqqqqqqqqq", req.body);
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const handeldeleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log("product Id:", productId);
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const handelProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const handelAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.query);
    return res.status(201).send(products);
  } catch (error) {
    return handleServerError(res, error);
  }
};

const createMultipleProduct = async (req, res) => {
  try {
    const products = await productService.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Products Created Successfully" });
  } catch (error) {
    return handleServerError(res, error);
  }
};

module.exports = {
  createProduct,
  handeldeleteProduct,
  updateProduct,
  handelProductById,
  handelAllProducts,
  createMultipleProduct,
};
