const Product = require("../models/product.model.js");
const Category = require("../models/category.model.js");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }
  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });
  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }
  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });
  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discounted_price: reqData.discounted_price,
    discount_persent: reqData.discount_persent,
    quantity: reqData.quantity,
    brand: reqData.brand,
    color: reqData.color,
    sizes: reqData.sizes,
    imageUrl: reqData.imageUrl,
    category: thirdLevel._id,
  });
  console.log("productsssssssss", product);
  return await product.save();
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);

  return "Product Deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = pageSize || 10;

  let query = Product.find().populate("category");

  if (category) {
    const exisCategory = await Category.findOne({ name: category });
    if (exisCategory) {
      query = query.where("category").equals(exisCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

 if (color) {
  const colorSet = new Set(
    color.split(",").map((color) => color.trim().toLowerCase())
  );

  const colorRegex =
    colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

  if (colorRegex) {
    query = query.where("color").regex(colorRegex);
  }
}


  if (sizes) {
    const sizesSet = new Set(sizes);
    query = query.where("sizes.name").in([...sizesSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discounted_price").gt(minPrice).lte(maxPrice);
  }
  if (minDiscount) {
    query = query.where("discount_persent").gt(minDiscount);
  }
  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").lt(1);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_hight" ? -1 : 1;
    query = query.sort({ discounted_price: sortDirection });
  }

  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);
  return { content: products, currentPage: pageNumber, totalPages };
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();
  // console.log("product=========", product);
  
  if (!product) {
    throw new Error("Product not found with this id");
  }
  return product;
}
async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  createMultipleProduct,
  findProductById,
};
