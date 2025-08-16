// src/Api/apiEndpoints.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: `${BASE_URL}/auth/signup`,
    SIGNIN: `${BASE_URL}/auth/signin`,
  },
  USERS: {
    PROFILE: `${BASE_URL}/users/profile`,
    ALL: `${BASE_URL}/users`,
  },
  PRODUCTS: {
    ALL: `${BASE_URL}/products`,
    BY_ID: (id) => `${BASE_URL}/products/id/${id}`,
  },
  ADMIN_PRODUCTS: {
    CREATE: `${BASE_URL}/admin/products`,
    CREATE_MULTIPLE: `${BASE_URL}/admin/products/creates`,
    DELETE: (id) => `${BASE_URL}/admin/products/${id}`,
    UPDATE: (id) => `${BASE_URL}/admin/products/${id}`,
  },
  CART: {
    GET: `${BASE_URL}/cart`,
    ADD: `${BASE_URL}/cart/add`,
  },
  CART_ITEMS: {
    UPDATE: (id) => `${BASE_URL}/cart_items/${id}`,
    DELETE: (id) => `${BASE_URL}/cart_items/${id}`,
  },
  ORDERS: {
    CREATE: `${BASE_URL}/orders`,
    HISTORY: `${BASE_URL}/orders/user`,
    BY_ID: (id) => `${BASE_URL}/orders/${id}`,
  },
  ADMIN_ORDERS: {
    ALL: `${BASE_URL}/admin/orders`,
    CONFIRM: (id) => `${BASE_URL}/admin/orders/${id}/confirmed`,
    SHIP: (id) => `${BASE_URL}/admin/orders/${id}/ship`,
    DELIVER: (id) => `${BASE_URL}/admin/orders/${id}/deliver`,
    CANCEL: (id) => `${BASE_URL}/admin/orders/${id}/cancel`,
    DELETE: (id) => `${BASE_URL}/admin/orders/${id}/delete`,
  },
  REVIEWS: {
    CREATE: `${BASE_URL}/reviews/create`,
    BY_PRODUCT: (productId) => `${BASE_URL}/reviews/product/${productId}`,
  },
  RATINGS: {
    CREATE: `${BASE_URL}/ratings/create`,
    BY_PRODUCT: (productId) => `${BASE_URL}/ratings/product/${productId}`,
  },
};

export default API_ENDPOINTS;




// from collections import OrderedDict

// # Define sample API endpoints and expected payloads based on schema analysis
// api_data = OrderedDict({
//     "POST /auth/signup": {
//         "firstName": "Abbas",
//         "lastName": "Azam",
//         "email": "abbas@gmail.com",
//         "password": "123456"
//     },
//     "POST /auth/signin": {
//         "email": "abbas@gmail.com",
//         "password": "123456"
//     },
//     "GET /users/profile": "(Requires Auth Token)",
//     "GET /users/": "(Requires Admin Auth Token)",

//     "GET /cart/": "(Requires Auth Token)",
//     "PUT /cart/add": {
//         "productId": "PRODUCT_ID",
//         "quantity": 2,
//         "size": "M"
//     },

//     "PUT /cart_items/:id": {
//         "quantity": 3,
//         "size": "L"
//     },
//     "DELETE /cart_items/:id": "(No Body, just Auth Token)",

//     "GET /products/": "(No Body)",
//     "GET /products/id/:id": "(No Body)",

    // "POST /admin/products/": {
    //     "title": "Shirt",
    //     "description": "Cotton shirt",
    //     "price": "1000",
    //     "discounted_price": "800",
    //     "discount_persent": "20",
    //     "quantity": "50",
    //     "brand": "BrandX",
    //     "color": "Blue",
    //     "sizes": [{"name": "M", "quantity": 10}, {"name": "L", "quantity": 15}],
    //     "imageUrl": "http://image.url/image.png",
    //     "category": "CATEGORY_ID"
    // },
//     "POST /admin/products/creates": [
//         {
//             "title": "Shirt",
//             "description": "Cotton shirt",
//             "price": "1000",
//             "discounted_price": "800",
//             "discount_persent": "20",
//             "quantity": "50",
//             "brand": "BrandX",
//             "color": "Blue",
//             "sizes": [{"name": "M", "quantity": 10}, {"name": "L", "quantity": 15}],
//             "imageUrl": "http://image.url/image.png",
//             "category": "CATEGORY_ID"
//         }
//     ],
//     "PUT /admin/products/:id": "(Same body as product creation)",
//     "DELETE /admin/products/:id": "(No Body, Auth Token)",

//     "POST /orders/": {
//         "shippingAddress": "ADDRESS_ID",
//         "paymentDetails": {
//             "paymentMethod": "COD",
//             "transactionId": "TRX123",
//             "paymentId": "PAY123",
//             "paymentStatus": "PENDING"
//         }
//     },
//     "GET /orders/user": "(Requires Auth Token)",
//     "GET /orders/:id": "(Requires Auth Token)",

//     "GET /admin/orders/": "(Admin Token)",
//     "PUT /admin/orders/:orderId/confirmed": "(No Body)",
//     "PUT /admin/orders/:orderId/ship": "(No Body)",
//     "PUT /admin/orders/:orderId/deliver": "(No Body)",
//     "PUT /admin/orders/:orderId/cancel": "(No Body)",
//     "PUT /admin/orders/:orderId/delete": "(No Body)",

//     "POST /ratings/create": {
//         "product": "PRODUCT_ID",
//         "rating": 4
//     },
//     "GET /ratings/product/:productId": "(No Body)",

//     "POST /reviews/create": {
//         "product": "PRODUCT_ID",
//         "review": "Very good product!"
//     },
//     "GET /reviews/product/:productId": "(No Body)",
// })

// import pandas as pd

// df = pd.DataFrame([{"API": k, "Sample Data / Notes": v} for k, v in api_data.items()])
// import caas_jupyter_tools as tools; tools.display_dataframe_to_user(name="API Endpoint Data", dataframe=df)

