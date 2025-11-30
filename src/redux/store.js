import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer.js";
import ticketReducer from "./ticketsReducer.js";
import chatbotReducer from "./chatbotReducer.js";

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    tickets: ticketReducer,
    chatbot: chatbotReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
