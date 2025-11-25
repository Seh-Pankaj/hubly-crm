import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/Login/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContactCenter from "./pages/ContactCenter/ContactCenter";
import Analytics from "./pages/Analytics/Analytics";
import ChatBotEditor from "./pages/ChatBotEditor/ChatBotEditor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<ContactCenter />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chatbot" element={<ChatBotEditor />} />
          <Route path="/teams" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
