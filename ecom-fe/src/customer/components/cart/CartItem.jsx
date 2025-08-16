import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router-dom";
import { CURRENCY } from "../constant/constant";

const CartItem = () => {
  const navigate=useNavigate();
  const handleCheckOut = ()=>{
    navigate("/checkout?step=1")
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Cart Items - Scrollable */}
      <div className="w-2/3 overflow-y-auto">
        {/* Repeat this block for multiple cart items */}
        <div className="p-5 shadow-lg border border-gray-200 rounded-lg m-6">
          <div className="flex items-center">
            <div className="w-20 h-20 lg:w-36 lg:h-36">
              <img
                className="w-full h-full object-cover object-top"
                src="vite.svg"
                alt=""
              />
            </div>
            <div className="ml-5 space-y-1">
              <p className="font-semibold text-gray-600">
                Men Printed Pure Cotton Straight Kurta
              </p>
              <p className="font-semibold opacity-70">Size: L, White</p>
              <p className="mt-2 opacity-70">Seller: Bonanza</p>
              <div className="flex items-center space-x-4 mt-5">
                <p className="mt-2 text-sm font-semibold text-black">{CURRENCY.symbol}100</p>
                <p className="mt-2 text-sm text-gray-500 line-through">{CURRENCY.symbol}199</p>
                <p className="mt-2 text-sm text-green-500">30%Off</p>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center lg:space-x-6 mt-2">
            <button className="text-indigo-400 ">
              <RemoveCircleOutlineIcon />
            </button>
            <span className="py-1 px-7 border border-gray-200 rounded-sm">2</span>
            <button className="text-indigo-400 ">
              <AddCircleOutlineIcon />
            </button>
            <p className="text-blue-600 hover:text-blue-400">Remove</p>
          </div>
        </div>
        {/* Repeat above block for more items */}
      </div>

      {/* Right: Fixed Price Details */}
      <div className="w-1/3 p-5 shadow-lg border border-gray-200 rounded-lg m-6 space-y-2 h-fit sticky top-6 self-start">
        <p className="text-lg font-medium text-gray-500">Price Details</p>
        <div className="h-px w-full bg-gray-100"></div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Price</p>
          <p className="text-lg font-medium">{CURRENCY.symbol}4678</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Discount</p>
          <p className="text-lg font-medium">{CURRENCY.symbol}1999</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Delivery Charges</p>
          <p className="text-lg font-medium">Free</p>
        </div>
        <div className="h-px w-full bg-gray-100"></div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Total Amount</p>
          <p className="text-green-400 font-semibold">{CURRENCY.symbol}2000</p>
        </div>
        <button onClick={handleCheckOut} className="px-5 py-3 bg-purple-600 rounded-lg mt-4 w-full">
          <p className="text-xl font-semibold text-white uppercase text-center">
            Check Out
          </p>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
