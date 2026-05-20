import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";
const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    jwToken: null,
    userId: null,
  },
  error: null,
  loading: true,
};

export const fetchMe = createAsyncThunk(
  "auth/authMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/authorise");
      return res.data;
    } catch (error) {
      return rejectWithValue(error || "Unauthorized");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/user/logout");
      return res.data;
    } catch (error) {
      return rejectWithValue(error || "Unauthorized");
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    registerLogin: (state, action) => {
      state.user = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.rejected, (state) => {
        state.user = null;
        state.loading = false;
      });

    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state = initialState;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { registerLogin, removeLogin } = authSlice.actions;
export default authSlice.reducer;
