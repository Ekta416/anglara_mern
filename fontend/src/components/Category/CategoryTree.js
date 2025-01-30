import React, { useEffect, useState } from "react";
import categoryService from "../../services/categoryService";

const CategoryTree = ({ categories, parent = null }) => {
  return (
    <ul>
    {categories
      .filter((category) => (category.parent ? category.parent.toString() === parent : parent === null))
      .map((category) => (
        <li key={category._id}>
          <strong>{category.name}</strong> ({category.status})
          {category.children && category.children.length > 0 && (
            <CategoryTree categories={category.children} parent={category._id.toString()} />
          )}
        </li>
      ))}
  </ul>
  );
};



// const CategoryTree = ({ categories, parent = null }) => {
//     return (
//       <ul>
//         {categories
//           .filter((category) => (category.parent ? category.parent.toString() === parent : parent === null))
//           .map((category) => (
//             <li key={category._id}>
//               {category.name} ({category.status})
//               <CategoryTree categories={categories} parent={category._id.toString()} />
//             </li>
//           ))}
//       </ul>
//     );
//   };
  

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <CategoryTree categories={categories} />
    </div>
  );
};

export default CategoryList;