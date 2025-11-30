import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    jwToken: null,
    userId: null,
  },
  loggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    registerLogin: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      return state;
    },
    removeLogin: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { registerLogin, removeLogin } = authSlice.actions;
export default authSlice.reducer;
