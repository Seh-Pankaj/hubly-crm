import { configureStore } from "@reduxjs/toolkit";
import introductionFormReducer from "./introductionFormReducer.js";

const store = configureStore({
  reducer: {
    introductionForm: introductionFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
