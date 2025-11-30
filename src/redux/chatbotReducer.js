import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  headerColor: "#33475b",
  backgroundColor: "#eeeeee",
  introLineOne: "How can I help you?",
  introLineTwo: "Ask me anything!",
  welcomeMessage:
    "👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.",
  missedChatTimer: "10:00",
};

const chatbotSlice = createSlice({
  name: "chatbotEditor",
  initialState,
  reducers: {
    updateChatbot: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { updateChatbot } = chatbotSlice.actions;
export default chatbotSlice.reducer;
