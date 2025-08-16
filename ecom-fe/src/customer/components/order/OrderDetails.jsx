import React from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CURRENCY } from "../constant/constant";

const OrderDetails = () => {
  const orders = [
    {
      id: 1,
      name: "Men Slim Mid Rise Black Jeans",
      price: "1099",
      size: "M",
      color: "Pink",
      seller: "Bonanza",
      image: "vite.svg",
    },
    {
      id: 2,
      name: "Women Bodycon Yellow Dress",
      price: "499",
      size: "M",
      color: "white",
      seller: "Bonanza",
      image: "vite.svg",
    },
  ];

  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <div className="p-20">
        <div className="w-full space-y-6 ">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg hover:shadow-2xl p-4 rounded-lg"
            >
              {/* Product Image */}
              <div className="w-24 h-24 md:w-36 md:h-36 flex-shrink-0">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex-1">
                <p className="text-gray-800 font-medium">{order.name}</p>
                <div className="flex space-x-6">
                  <p className="text-sm text-gray-600 mt-1">
                    Color: {order.color}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Size: {order.size}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-600 mt-1">
                    Seller: {order.seller}
                  </p>
                </div>
                <div className="">
                  <p className="text-lg font-semibold">
                    {CURRENCY.symbol}
                    {order.price}
                  </p>
                </div>
              </div>

              {/* Price (Centered) */}
              {/* <div className="flex justify-center flex-1 mr-40">
                    <p className="text-lg font-semibold">{order.price}</p>
                </div> */}

              {/* Delivery Status */}
              <div className="mt-4 md:mt-0 text-sm text-green-600 font-medium text-right">
                <p>
                  <StarBorderIcon />
                  Rate & Review Product
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
