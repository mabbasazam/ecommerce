import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homepage/HomePage";
import Navigation from "../customer/components/navigation/Navigation";
import Product from "../customer/components/product/Product";
import Cart from "../customer/components/cart/Cart";
import ProductDetails from "../customer/components/product/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/order/Order";
import OrderDetails from "../customer/components/order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
      <Route path="/login" element={<HomePage />}></Route>
      <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>
      {/* <Checkout /> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
    </div>
  );
};

export default CustomerRouters;
