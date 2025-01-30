import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryService from "../../services/categoryService";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await categoryService.createCategory(name, parent);
      navigate("/categories");
    } catch (err) {
      alert("Failed to create category.");
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Parent ID (optional)"
          value={parent}
          onChange={(e) => setParent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;