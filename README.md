# NextWear-ECommerceWebsite

Welcome to **NextWear** – an eCommerce platform focused on delivering a smooth online shopping experience for clothing categories like Men, Women, and Kids. This project demonstrates essential web development skills, particularly in React, and includes some advanced concepts such as state management with Context API and routing with React Router.

---

## Requirements

To run and develop this project locally, you'll need:
- **React & React Router**: For component-based UI and client-side routing.
- **Bootstrap** (or any CSS framework): Used here for fast and responsive UI development.
- **Basic Image Assets**: Icons and banners for visual elements (included in the Assets folder).

---

## Tech Stack

- **React**: Core library for building the UI.
- **React Router**: For defining and managing routes.
- **Context API**: Used for global state management (e.g., cart management).
- **CSS Modules**: Used for styling individual components.
- **Bootstrap**: For pre-designed UI components and responsive layout.

---

## Project Goals

- **Develop a user-friendly eCommerce UI**: NextWear is designed to provide an intuitive and smooth experience for browsing products.
- **Practice Context API for state management**: Implement global state for managing cart items across components.
- **Demonstrate routing**: Use React Router to navigate between product categories and specific product details.
- **Apply component-based design**: Structure reusable components like `Item`, `Navbar`, and `Footer` for efficient development and maintainability.

---

## Features

### Core Features

- **Product Categories**: Users can browse different categories (Men, Women, Kids) through category-based pages with a custom banner for each.
- **Product Details Page**: Each product has a dedicated page showing more details, including pricing, description, and a related products section.
- **Cart Management**: Users can add and remove items from the cart using Context API, and view total items and cost.
- **Sign-Up and Login Page**: Basic form-based user registration and login page.

---

## Key Components

- **ShopCategory**: Renders products based on the category selected. Uses Context to access products and filters them based on the category.
- **Product**: Displays a single product's details using a parameterized route.
- **RelatedProducts**: Shows similar items within the selected category.
- **Cart**: A centralized location to review and manage all items added to the cart.
- **ShopContext**: Context provider that allows global state access across components.

---

## Learning Outcomes

From this project, I gained hands-on experience with:

- **React Context API**: For centralized state management without prop drilling.
- **React Router**: For multi-page application setup, route parameters, and nested routes.
- **Component Design**: Creating reusable, self-contained components with props and states.
- **Modular CSS**: Using modular CSS for component-based styling to avoid conflicts.
- **Optimized State Management**: Handling and updating global state with Context and `useState`.

---

## How It Works

The project structure is based on modular, reusable components, with Context API handling global state management for the cart. Components are organized into folders for easy maintenance and scalability.

### Routes and Navigation

- **Index Route (`/`)**: Renders the main shop page where users can browse general product categories.
- **Category Routes (`/men`, `/women`, `/kids`)**: Filtered view of products by category.
- **Product Route (`/product/:productId`)**: Detailed view of a single product based on the product ID in the URL.
- **Cart Route (`/cart`)**: Shows the selected products and allows users to modify quantities or remove items.

---

## Major Terms and Concepts

- **Context API**: Enables global state across components without passing props, ideal for shopping cart functionality.
- **React Router**: Manages client-side routing for a single-page application, enabling users to navigate between views.
- **useState Hook**: For managing component-level state, particularly within Context to maintain cart information.
- **Modular CSS**: Scoped styling for individual components, preventing global style conflicts.
- **Reusable Components**: Simplifies and streamlines development with components like `Item`, `Navbar`, and `Footer`.

---

## Future Enhancements

- **Enhanced Authentication**: Implement user authentication for secure login and signup.
- **Advanced Sorting and Filtering**: Allow users to sort products by price, popularity, etc.
- **Dynamic Pagination**: Improve product browsing experience by adding pagination for larger datasets.

---
