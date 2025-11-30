import axios from "axios";

const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiGet = async (path) => {
  try {
    const res = await api.get(path);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

export const apiPost = async (path, body) => {
  try {
    const res = await api.post(path, body);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

export const apiPut = async (path, body) => {
  try {
    const res = await api.put(path, body);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const apiDelete = async (path) => {
  try {
    const res = await api.delete(path);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default api;
