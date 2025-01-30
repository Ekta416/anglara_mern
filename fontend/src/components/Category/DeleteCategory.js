import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoryService from "../../services/categoryService";

const DeleteCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await categoryService.deleteCategory(id);
      navigate("/categories");
    } catch (err) {
      alert("Failed to delete category.");
    }
  };

  return (
    <div>
      <h2>Delete Category</h2>
      <p>Are you sure you want to delete this category?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteCategory;