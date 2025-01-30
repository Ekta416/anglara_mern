=> This is the backend part of the Category Management system

## Features
- Create, read, update, and delete categories.
- Support for parent-child category relationships.
- Handle inactive categories and cascading status changes for child categories.
- Reassign child categories when a parent is deleted.
  

## Technologies Used
- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing category data.
- **Mongoose**: ODM for MongoDB.

The server will be running on http://localhost:5000

Testing Use Postman to test the API endpoints. 
Example requests:
 Register: POST /api/auth/register with { "username": "test", "password": "test123" }

 Login: POST /api/auth/login with { "username": "test", "password": "test123" }

 Create Category: POST /api/category with { "name": "Electronics", "parent": null }

 Fetch Categories: GET /api/category

 Update Category: PUT /api/category/:id with { "name": "Updated Electronics" } 

Delete Category: DELETE /api/category/:id



=> This is the frontend part of the Category Management system built using **React.js**.

## Features
- View categories in a tree structure.
- Create, update, and delete categories with a user-friendly interface.
- Handle both active and inactive categories with status updates.
- Navigate between different category management views (create, update, delete).

## Technologies Used
- **React.js**: Frontend JavaScript framework.
- **React Router**: Library for routing.
- **Axios**: HTTP client for making API requests.

The server will be running on http://localhost:3000
Category Tree: Display categories in a nested structure based on parent-child relationships.
Navigate to the /categories route to view the category tree.

Create Category:Form to add a new category with an optional parent category.
Use the /categories/create route to create a new category.

Update Category:Option to delete a category, with a confirmation dialog before deletion
Use the /categories/update/:id route to update an existing category.

Delete Category:Option to delete a category, with a confirmation dialog before deletion.
Use the /categories/delete/:id route to delete a category.
