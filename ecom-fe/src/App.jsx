import React from "react";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/homepage/HomePage";
import Product from "./customer/components/product/Product";
import Footer from "./customer/components/footer/Footer";
// import ProducDetail from "./customer/components/product/ProducDetail";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import CustomerRouters from "./Routers/CustomerRouters";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">

      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>

       
        <div className="flex-grow">
        
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
