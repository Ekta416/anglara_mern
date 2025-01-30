import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = "http://localhost:5000/api/category";

const createCategory = (name, parent) => {
  return axios.post(API_URL, { name, parent }, { headers: authHeader() });
};
// const createCategory = (name, parent, status = "active") => {
//     return axios.post(API_URL, { name, parent, status }, { headers: authHeader() });
//   };
  

const getCategories = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const updateCategory = (id, name, status) => {
  return axios.put(`${API_URL}/${id}`, { name, status }, { headers: authHeader() });
};

const deleteCategory = (id) => {
  return axios.delete(`${API_URL}/${id}`, { headers: authHeader() });
};

const categoryService = { createCategory, getCategories, updateCategory, deleteCategory };
export default categoryService;
