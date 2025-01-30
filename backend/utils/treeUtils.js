const buildTree = (categories, parent = null) => {
    return categories
      .filter((category) => category.parent?.toString() === parent?.toString())
      .map((category) => ({
        ...category.toObject(),
        children: buildTree(categories, category._id),
      }));
  };
  
  module.exports = { buildTree };