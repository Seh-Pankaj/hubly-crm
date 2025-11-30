import { useState } from "react";
import { apiPost } from "../api";

const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (firstName, lastName, email, password, phone, role) => {
    const response = await apiPost("/user/signup", {
      firstName,
      lastName,
      email,
      password,
      phone,
      role,
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setTimeout(() => setError(null), 3000);
    }

    if (response.ok) {
      alert("Account created successfully");
    }
  };
  return { error, signup };
};
export default useSignup;
