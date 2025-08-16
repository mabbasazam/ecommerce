// import React from "react";
// import Rating from "@mui/material/Rating";
// import { Button } from "@headlessui/react";
// import Card from "../HomeSectionCard/Card";
// import { mens_kurta } from "../../../data/mens_kurta";
// import { useNavigate } from "react-router-dom";
// import { CURRENCY } from "../constant/constant";

// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     {
//       id: "white",
//       name: "White",
//       classes: "bg-white checked:outline-gray-400",
//     },
//     {
//       id: "gray",
//       name: "Gray",
//       classes: "bg-gray-200 checked:outline-gray-400",
//     },
//     {
//       id: "black",
//       name: "Black",
//       classes: "bg-gray-900 checked:outline-gray-900",
//     },
//   ],
//   sizes: [
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
// const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ProducDetail() {
//   const navigate = useNavigate();
//   const handleAddToCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <div className="bg-white">
//       <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol
//             role="list"
//             className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
//           >
//             {product.breadcrumbs.map((breadcrumb) => (
//               <li key={breadcrumb.id}>
//                 <div className="flex items-center">
//                   <a
//                     href={breadcrumb.href}
//                     className="mr-2 text-sm font-medium text-gray-900"
//                   >
//                     {breadcrumb.name}
//                   </a>
//                   <svg
//                     fill="currentColor"
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     aria-hidden="true"
//                     className="h-5 w-4 text-gray-300"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//             ))}
//             <li className="text-sm">
//               <a
//                 href={product.href}
//                 aria-current="page"
//                 className="font-medium text-gray-500 hover:text-gray-600"
//               >
//                 {product.name}
//               </a>
//             </li>
//           </ol>
//         </nav>

//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
//           {/* Image gallery */}
//           <div className="flex flex-col items-center">
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 alt={product.images[0].alt}
//                 src={product.images[0].src}
//                 className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
//               />
//             </div>
//             <div className="flex flex-wrap space-x-5 justify-center">
//               {product.images.map((item) => (
//                 <div className="overflow-hidden rounded-lg size-[5rem] mt-4">
//                   <img
//                     alt={item.alt}
//                     src={item.src}
//                     className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product info */}
//           <div className="flex flex-col lg:max-w-7xl">
//             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//               <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
//                 Bonanza
//               </h1>
//               <h2 className="text-lg text-gray-700">
//                 Men Printed Pure Cotton Straight Kurta
//               </h2>
//             </div>

//             {/* Options */}
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <h2 className="sr-only">Product information</h2>
//               <div className="flex items-center space-x-4">
//                 <p className="mt-2 text-sm lg:text-2xl font-semibold text-black">
//                   {CURRENCY.symbol}70
//                 </p>
//                 <p className="mt-2 text-sm lg:text-2xl text-gray-500 line-through">
//                   {CURRENCY.symbol}192
//                 </p>
//                 <p className="mt-2 text-sm lg:text-2xl text-green-500">
//                   70%Off
//                 </p>
//               </div>

//               {/* Reviews */}
//               <div className="mt-6">
//                 <h3 className="sr-only">Reviews</h3>
//                 <div className="flex items-center space-x-3">
//                   <Rating name="read-only" value={4} readOnly />
//                   <p className="opacity-50 text-sm">56540 Ratings</p>
//                   <p className="text-sm text-indigo-600 hover:text-indigo-500">
//                     340 Reviews
//                   </p>
//                 </div>
//               </div>

//               <form className="mt-10">
//                 {/* Sizes */}
//                 <div className="mt-10">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-sm lg:text-xl font-medium text-gray-900">
//                       Size
//                     </h3>
//                   </div>

//                   <fieldset aria-label="Choose a size" className="mt-4">
//                     <div className="grid grid-cols-4 gap-3">
//                       {product.sizes.map((size) => (
//                         <label
//                           key={size.id}
//                           aria-label={size.name}
//                           className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
//                         >
//                           <input
//                             defaultValue={size.id}
//                             defaultChecked={size === product.sizes[1]}
//                             name="size"
//                             type="radio"
//                             disabled={!size.inStock}
//                             className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
//                           />
//                           <span className="text-sm lg:text-xl font-medium uppercase group-has-checked:text-white">
//                             {size.name}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                   </fieldset>
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="px-5 py-3 bg-purple-600 rounded-lg mt-4"
//                 >
//                   <p className="text-xl font-semibold text-white uppercase">
//                     Add to Cart
//                   </p>
//                 </button>
//               </form>
//             </div>

//             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
//               <div>
//                 <h3 className="sr-only">Description</h3>

//                 <div className="space-y-6">
//                   <p className="text-base text-gray-900">
//                     {product.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h3 className="text-sm font-medium text-gray-900">
//                   Highlights
//                 </h3>

//                 <div className="mt-4">
//                   <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                     {product.highlights.map((highlight) => (
//                       <li key={highlight} className="text-gray-400">
//                         <span className="text-gray-600">{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h2 className="text-sm font-medium text-gray-900">Details</h2>

//                 <div className="mt-4 space-y-6">
//                   <p className="text-sm text-gray-600">{product.details}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h1 className="text-2xl font-semibold text-gray-500 mx-6">
//             Similar Product
//           </h1>
//           <div className="flex flex-wrap space-x-4 mx-4 mt-6">
//             {mens_kurta.map((item) => (
//               <Card product={item} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// src/customer/components/product/ProductDetails.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  findProductById,
  selectProductById,
  selectProductDetailStatus,
} from "../../../store/productSlice";
import Rating from "@mui/material/Rating";
import Card from "../HomeSectionCard/Card";
import { mens_kurta } from "../../../data/mens_kurta";
import { CURRENCY } from "../constant/constant";

const productFallback = {
  name: "Basic Tee 6-Pack",
  images: [],
  highlights: [],
  details: "",
  breadcrumbs: [{ id: 1, name: "Men" }],
};

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productFromStore = useSelector(selectProductById(productId));
  const detailStatus = useSelector(selectProductDetailStatus);

  useEffect(() => {
    if (productId) dispatch(findProductById(productId));
  }, [productId, dispatch]);

  // Build view and normalize sizes so each has { id?, name, inStock }
  const view = useMemo(() => {
    const p = productFromStore || {};
    const sizesRaw = Array.isArray(p.sizes) ? p.sizes : [];
    const sizes = sizesRaw.map((s) => ({
      id: s._id || s.id || s.name,
      name: s.name,
      inStock: Number(s.quantity ?? s.qty ?? s.q ?? 0) > 0, // treat >0 as in stock
    }));

    return {
      name: p.title || productFallback.name,
      price: Number(p.discountedPrice || p.discounted_price || p.price || 0),
      mrp: Number(p.price || 0),
      discountPercent: Number(p.discountPercent || p.discount_persent || 0),
      imageUrl: p.imageUrl || null,
      sizes: sizes.length
        ? sizes
        : [
            { id: "M", name: "M", inStock: true },
            { id: "L", name: "L", inStock: true },
          ],
      description: p.description || "",
      brand: p.brand || "",
      highlights: p.highlights || productFallback.highlights,
      details: p.details || productFallback.details,
      images: p.images || productFallback.images,
    };
  }, [productFromStore]);

  // controlled selected size
  const [selectedSize, setSelectedSize] = useState(() =>
    view.sizes && view.sizes[0] ? view.sizes[0].name : null
  );

  // sync selectedSize if sizes change
  useEffect(() => {
    if (!view.sizes || view.sizes.length === 0) return;
    // if current selectedSize no longer exists, set to first available
    if (!view.sizes.some((s) => s.name === selectedSize)) {
      setSelectedSize(view.sizes[0].name);
    }
  }, [view.sizes, selectedSize]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // implement add-to-cart logic here
    navigate("/cart");
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8">
          {/* breadcrumb simplified */}
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>Home</li>
            <li>/</li>
            <li>{view.name}</li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-6">
          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={view.name}
                src={
                  view.imageUrl ||
                  "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                }
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-3">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                {view.name}
              </h1>
              <h2 className="text-sm text-gray-600">{view.brand}</h2>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-2xl font-semibold">
                {CURRENCY.symbol}
                {view.price}
              </p>
              {view.mrp > view.price && (
                <>
                  <p className="text-lg text-gray-500 line-through">
                    {CURRENCY.symbol}
                    {view.mrp}
                  </p>
                  <p className="text-lg text-green-600">
                    {view.discountPercent}% Off
                  </p>
                </>
              )}
            </div>

            <div className="mt-4 mb-6">
              <div className="flex items-center gap-3">
                <Rating name="read-only" value={4} readOnly />
                <span className="text-sm text-gray-500">
                  ({/* ratings count */}0)
                </span>
              </div>
            </div>

            <form onSubmit={handleAddToCart} className="mt-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm lg:text-xl font-medium text-gray-900">
                    Size
                  </h3>
                </div>

                {/* Size selector */}
                <fieldset aria-label="Choose a size" className="mt-2">
                  <div className="grid grid-cols-4 gap-3">
                    {(view.sizes || []).map((size, i) => (
                      <label
                        key={size.id ?? `${size.name}-${i}`}
                        className={`
                          relative block cursor-pointer rounded-lg border px-2 py-3 text-center
                          transition-shadow duration-150 ease-in-out
                          ${
                            !size.inStock
                              ? "bg-gray-100 border-transparent opacity-60 cursor-not-allowed"
                              : "bg-white border-gray-200 hover:shadow-sm"
                          }
                        `}
                      >
                        {/* hidden controlled radio (sr-only) used as peer */}
                        <input
                          type="radio"
                          name="size"
                          value={size.name}
                          checked={selectedSize === size.name}
                          onChange={() => setSelectedSize(size.name)}
                          disabled={!size.inStock}
                          className="sr-only peer"
                          aria-label={size.name}
                        />

                        {/* visible box */}
                        <div
                          className={`
                            flex h-12 w-full items-center justify-center rounded-md text-sm lg:text-xl font-medium uppercase
                            ${!size.inStock ? "text-gray-400" : "text-gray-700"}
                            peer-checked:bg-blue-100 peer-checked:border-blue-300 peer-checked:text-gray-900
                            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-200
                          `}
                        >
                          <span className="pointer-events-none">
                            {size.name}
                          </span>
                        </div>

                        {/* optional OOS badge */}
                        {!size.inStock && (
                          <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
                            OOS
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-purple-600 px-6 py-3 text-white text-lg font-semibold hover:bg-purple-700 disabled:opacity-60"
                  disabled={!selectedSize}
                >
                  Add to Cart
                </button>
              </div>
            </form>

            <div className="py-10">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-3 text-base text-gray-700">{view.description}</p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                  {(view.highlights || []).map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <p className="mt-2 text-sm text-gray-600">{view.details}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Similar products */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            Similar Product
          </h2>
          <div className="flex flex-wrap gap-4">
            {mens_kurta.map((item, i) => (
              <Card key={i} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
