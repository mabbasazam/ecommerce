"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate=useNavigate();
  const orders = [
    {
      id: 1,
      name: "Men Slim Mid Rise Black Jeans",
      price: "$1099",
      size: "M",
      image: "vite.svg",
    },
    {
      id: 2,
      name: "Women Bodycon Yellow Dress",
      price: "$499",
      size: "M",
      image: "vite.svg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-6 py-8 gap-6">
      {/* Left Filter Section */}
      <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg p-5 h-[300px] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <p className="text-sm font-medium text-gray-700 mb-2">ORDER STATUS</p>
        <div className="space-y-3 text-lg text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            On The Way
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Delivered
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Cancelled
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Returned
          </label>
          {/* Agar aur filters add karein to bhi scroll hoga */}
        </div>
      </div>

      {/* Right Order List Section */}
      <div onClick={()=>navigate(`/account/order/${5}`)} className="w-full md:w-3/4 space-y-6">
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
              <p className="text-sm text-gray-600 mt-1">Size: {order.size}</p>
            </div>

            {/* Price (Centered) */}
            <div className="flex justify-center flex-1 mr-40">
              <p className="text-lg font-semibold">{order.price}</p>
            </div>

            {/* Delivery Status */}
            <div className="mt-4 md:mt-0 text-sm text-green-600 font-medium text-right">
              <p>✅ Expected Delivery On Mar 03</p>
              <p className="text-gray-500">Your Item Has Been Delivered</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;