import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CreateCategory from "./components/Category/CreateCategory";
import CategoryTree from "./components/Category/CategoryTree";
import UpdateCategory from "./components/Category/UpdateCategory";
import DeleteCategory from "./components/Category/DeleteCategory";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<CategoryTree />} />
      <Route path="/categories/create" element={<CreateCategory />} />
      <Route path="/categories/update/:id" element={<UpdateCategory />} />
      <Route path="/categories/delete/:id" element={<DeleteCategory />} />
      <Route path="/" element={<CategoryTree />} />
    </Routes>
  );
}

export default App;