import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    saveTickets: (state, action) => {
      state = action.payload;
      return state;
    },
    removeTickets: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { saveTickets, removeTickets } = ticketSlice.actions;
export default ticketSlice.reducer;
