// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../Api/api';
import API_ENDPOINTS from '../Api/apiEndpoints';

const initialState = {
  user: null,
  token: localStorage.getItem('jwt') || null,
  isAuthenticated: !!localStorage.getItem('jwt'),
  loading: false,
  error: null,
};

// Fetch logged-in user's profile
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwt');
      if (!token) {
        return rejectWithValue('No token found');
      }
      const response = await api.get(API_ENDPOINTS.USERS.PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Assuming { firstName, lastName, email, ... }
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Failed to fetch profile');
    }
  }
);

// Register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.SIGNUP, formData);
      const token = response.data.token || response.data.jwt;
      if (token) localStorage.setItem('jwt', token);
      return { token };
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Registration failed');
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.SIGNIN, formData);
      const token = response.data.token || response.data.jwt;
      if (token) localStorage.setItem('jwt', token);
      return { token };
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      // Login
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      // Fetch profile
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
