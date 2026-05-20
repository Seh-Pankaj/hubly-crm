import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import ticketReducer from "./ticketsReducer.js";
import chatbotReducer from "./chatbotReducer.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tickets: ticketReducer,
    chatbot: chatbotReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
