const Category = require("../models/Category");
const { buildTree } = require("../utils/treeUtils");

const createCategory = async (req, res) => {
  const { name, parent } = req.body;
  try {
    const category = new Category({ name, parent });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// const createCategory = async (req, res) => {
//   const { name, parent, status } = req.body;

//   // Check if "name" is provided
//   if (!name || name.trim() === "") {
//     return res.status(400).json({ error: "Category name is required" });
//   }

//   try {
//     const category = new Category({
//       name,
//       parent: parent || null, // Ensure parent is null if not provided
//       status: status || "active",
//     });

//     await category.save();
//     res.status(201).json(category);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    const tree = buildTree(categories);
    res.json(tree);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    const category = await Category.findByIdAndUpdate(
      id,
      { name, status },
      { new: true }
    );
    if (status === "inactive") {
      await Category.updateMany({ parent: id }, { status: "inactive" });
    }
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    await Category.updateMany({ parent: id }, { parent: category.parent });
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createCategory, getCategories, updateCategory, deleteCategory };