const express = require("express");
const router = express.Router();

const productController = require("../controller/product.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, productController.handelAllProducts);
router.get("/id/:id", authenticate, productController.handelProductById);

module.exports = router;
