const express = require("express");
const router = express.Router();

const cartItemController = require("../controller/cartItem.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.put("/:id", authenticate, cartItemController.handleupdateCartItem);
router.delete("/:id", authenticate, cartItemController.handleRemoveCartItem);

module.exports = router;
