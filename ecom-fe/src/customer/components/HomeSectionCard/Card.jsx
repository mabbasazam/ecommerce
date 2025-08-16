import React from "react";
import { CURRENCY } from "../constant/constant";

const Card = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] hover:shadow-xl hover:-translate-y-2 hover:border-indigo-300 hover:opacity-95">
      <div className="h-[15rem] w-[12rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt={product.title || "Product Image"}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
        <div className="flex items-center space-x-4">
          <p className="mt-2 text-sm font-semibold text-black">{CURRENCY.symbol}{product.discountedPrice}</p>
          <p className="mt-2 text-sm text-gray-500 line-through">{CURRENCY.symbol}{product.price}</p>
          <p className="mt-2 text-sm text-green-500">{product.discountPersent}%Off</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";

// const HomeSectionCard = ({product}) => {
//   return (
//     <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black">
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product.imageUrl}
//           alt=""
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
//         <p className="mt-2 text-sm text-gray-500">{product.title}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;
