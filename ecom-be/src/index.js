const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



const authRouter = require("./routes/auth.route.js");
app.use("/auth", authRouter);

const userRouter = require("./routes/user.route.js");
app.use("/users", userRouter);

const productRouter = require("./routes/product.route.js");
app.use("/products", productRouter);

const adminProductRouter = require("./routes/adminProduct.route.js");
app.use("/admin/products", adminProductRouter);

const cartRouter = require("./routes/cart.route.js");
app.use("/cart", cartRouter);

const cartItemRouter = require("./routes/cartItem.route.js");
app.use("/cart_items", cartItemRouter);

const orderRouter = require("./routes/order.route.js");
app.use("/orders", orderRouter);

const reviewRouter = require("./routes/review.route.js");
app.use("/reviews", reviewRouter);

const ratingRouter = require("./routes/rating.route.js");
app.use("/ratings", ratingRouter);

const adminOrderRouter = require("./routes/adminOrder.route.js");
app.use("/admin/orders", adminOrderRouter);

module.exports = app;
