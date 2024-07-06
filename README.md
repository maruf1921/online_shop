# E-Commerce Website

This is an e-commerce website built with JavaScript, HTML, CSS, Node.js, Express, and MongoDB. The website allows users to view products, add products to their cart, and manage their accounts.

## Features

- User registration and authentication
- Product management (add, remove, and view products)
- Image upload for products
- Shopping cart management
- APIs for new collections and popular items

## Technologies Used
- javaScript
- HTML
- CSS
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token) for authentication
- Multer for image uploads
- CORS for cross-origin resource sharing

## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/maruf1921/online_shop
    cd online_shop
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Set up MongoDB
    - Create a MongoDB cluster and get the connection string.
    - Replace the MongoDB connection string in `index.js`:
        ```js
        mongoose.connect("your_mongodb_connection_string")
        ```

4. Run the server
    ```sh
    node .\index.js
    ```
The server will run on port 4000. You can access it at `http://localhost:4000`.

5. Run the Admin Panel
     ```sh
    npm run dev
    ```
The server will run on port 4000. You can access it at `http://localhost:5173`.

6. Run the Frontend
     ```sh
    npm start
    ```
The server will run on port 4000. You can access it at `http://localhost:3000`.

