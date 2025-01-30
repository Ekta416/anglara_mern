import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoryService from "../../services/categoryService";

const UpdateCategory = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();

  useEffect(() => {
    categoryService.getCategories().then((response) => {
      const category = response.data.find((cat) => cat._id === id);
      if (category) {
        setName(category.name);
        setStatus(category.status);
      }
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await categoryService.updateCategory(id, name, status);
      navigate("/categories");
    } catch (err) {
      alert("Failed to update category.");
    }
  };

  return (
    <div>
      <h2>Update Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCategory;