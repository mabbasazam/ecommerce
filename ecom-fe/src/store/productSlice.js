// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../Api/apiEndpoints";
import api from "../Api/api";

// helpers
const num = (v) => (v === null || v === undefined || v === "" ? 0 : Number(v));

const normalizeProduct = (p = {}) => {
  // API returns _id as string (e.g. "_id": "68936...")
  const id = p?.id || p?._id || p?._id?.$oid || undefined;

  const categoryId =
    p?.category?._id ||
    p?.category?.$oid ||
    (typeof p.category === "string" ? p.category : undefined);

  const sizes = Array.isArray(p.sizes)
    ? p.sizes.map((s) => ({
        id: s?._id || s?._id?.$oid || undefined,
        name: s?.name ?? "",
        quantity: num(s?.quantity),
      }))
    : [];

  return {
    id,
    title: p.title ?? "",
    description: p.description ?? "",
    price: num(p.price),
    discountedPrice: num(p.discounted_price ?? p.discountedPrice),
    discountPercent: num(p.discount_persent ?? p.discountPercent),
    quantity: num(p.quantity),
    brand: p.brand ?? "",
    color: p.color ?? "",
    imageUrl: p.imageUrl ?? p.image ?? "",
    ratings: Array.isArray(p.ratings) ? p.ratings : [],
    reviews: Array.isArray(p.reviews) ? p.reviews : [],
    numRatings: num(p.numRatings),
    categoryId,
    sizes,
    _raw: p,
  };
};

// Thunks
export const findProducts = createAsyncThunk(
  "products/findAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get(API_ENDPOINTS.PRODUCTS.ALL);
      const data = res.data;

      // handle multiple possible shapes: content (your API), products, or raw array
      const list = Array.isArray(data)
        ? data
        : Array.isArray(data?.content)
        ? data.content
        : Array.isArray(data?.products)
        ? data.products
        : [];

      return list.map(normalizeProduct);
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message || "Failed to fetch products"
      );
    }
  }
);

// --- thunks --------------------------------------------------
export const findProductById = createAsyncThunk(
  "products/findById",
  async (id, thunkAPI) => {
    try {
      console.log(`📡 Fetching product by ID: ${id}`);
      const res = await api.get(API_ENDPOINTS.PRODUCTS.BY_ID(id));
      console.log("📦 Product detail API response:", res.data);

      // use res.data (was using `data` variable which doesn't exist)
      const productObj = res.data?.product ?? res.data;
      // If API wraps result inside `content` or `content[0]` adjust here.
      // For your API single-product response example the above is correct.
      return normalizeProduct(productObj);
    } catch (err) {
      console.error(`❌ Failed to fetch product ${id}:`, err);
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message || `Failed to fetch product ${id}`
      );
    }
  }
);


// slice
const initialState = {
  list: [],
  byId: {},
  listStatus: "idle",
  detailStatus: "idle",
  error: null,
  detail: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductDetail(state) {
      state.detail = null;
      state.detailStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // findProducts
      .addCase(findProducts.pending, (state) => {
        state.listStatus = "loading";
        state.error = null;
      })
      .addCase(findProducts.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
        state.byId = action.payload.reduce((acc, p) => {
          if (p?.id) acc[p.id] = p;
          return acc;
        }, {});
      })
      .addCase(findProducts.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.payload || "Failed to load products";
      })

      // findProductById
      .addCase(findProductById.pending, (state) => {
        state.detailStatus = "loading";
        state.error = null;
      })
      .addCase(findProductById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.detail = action.payload;
        if (action.payload?.id) state.byId[action.payload.id] = action.payload;
      })
      .addCase(findProductById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.payload || "Failed to load product";
      });
  },
});

export const { clearProductDetail } = productSlice.actions;
export default productSlice.reducer;

// selectors
export const selectProducts = (state) => state.products.list;
export const selectProductById = (id) => (state) =>
  state.products.byId[id] || null;
export const selectProductDetail = (state) => state.products.detail;
export const selectProductDetailStatus = (state) => state.products.detailStatus;
