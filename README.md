# FarmStand

A simple RESTful web application built with Node.js, Express, and MongoDB that allows users to manage a virtual farm stand. Users can view, create, edit, and delete products, as well as filter them by categories such as Fruit, Vegetable, and Dairy.

## Features

- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for farm stand products.
- **Categorization**: Products are categorized (e.g., Fruit, Vegetable, Dairy).
- **Filtering**: Easily filter products by their category on the main products page.
- **Database Seeding**: Includes a `seeds.js` script to quickly populate the database with sample data.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose (ODM)
- **Templating Engine**: EJS (Embedded JavaScript)
- **Middleware**: `method-override` (to support PUT and DELETE requests from HTML forms), `express.urlencoded` (for parsing form data)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure the MongoDB server is running locally on the default port `27017`)

## Installation and Setup

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <repository-url>
   cd FarmStand
   ```

2. **Install dependencies**:
   Run the following command to install the required Node modules (Express, Mongoose, EJS, etc.):
   ```bash
   npm install
   ```

3. **Ensure MongoDB is running**:
   Make sure your local MongoDB instance is active. The application attempts to connect to `mongodb://localhost:27017/farmStand`.

4. **Seed the Database (Optional but recommended)**:
   To populate the database with some initial sample products, run the seeding script:
   ```bash
   npm run seed
   ```
   *(This script connects to the database, clears the existing `Product` collection, and inserts new sample products).*

5. **Start the Application**:
   Start the Node.js server by running:
   ```bash
   npm start
   ```
   *(This executes `node index.js` as defined in the `package.json`)*

6. **View the Application**:
   Open your web browser and navigate to:
   [http://localhost:3000/products](http://localhost:3000/products)

## Project Structure

```text
FarmStand/
├── models/
│   └── product.js      # Mongoose schema and model for Products
├── public/             # Static files (CSS, images, JS)
├── views/
│   └── products/       # EJS templates for the UI
│       ├── edit.ejs    # Form to edit an existing product
│       ├── index.ejs   # Lists all products (and handles category filtering)
│       ├── new.ejs     # Form to add a new product
│       └── show.ejs    # Details page for a single product
├── index.js            # Main application server file and routes
├── seeds.js            # Script to populate the database with sample data
├── package.json        # Project metadata and dependencies
└── package-lock.json   # Dependency tree locking
```

## RESTful Routes

| HTTP Method | Route | Description |
| :---| :--- | :--- |
| **GET** | `/products` | Displays all products (can be filtered by `?category=...`) |
| **GET** | `/products/new` | Displays the form to create a new product |
| **POST** | `/products` | Creates a new product in the database |
| **GET** | `/products/:id` | Displays details for one specific product |
| **GET** | `/products/:id/edit` | Displays the form to edit an existing product |
| **PUT** | `/products/:id` | Updates a specific product in the database |
| **DELETE** | `/products/:id` | Deletes a specific product from the database |
