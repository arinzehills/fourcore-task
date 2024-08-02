# Fourcore E-Commerce Platform

This is a React application for a 4core fictional e-commerce platform. The application includes features for displaying products, viewing product details, managing a shopping cart, and basic authentication.

## Features

- Display a list of products from a mock API. here at https://fakestoreapi.com/products'
- View detailed information about each product.
- Add products to the shopping cart.
- View the contents of the shopping cart.
- Sign in to view order history. 
    - I use user json file check the json at the public directory use any of the username and password to sign in any other apart from that will fail.

## Technologies Used

- **React**: For building the user interface using functional components and hooks.
- **Redux Toolkit**: For state management.
- **React Router**: For routing between pages.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: For fast development and build tooling.

## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (or Yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-commerce-platform.git
   cd fourscore-task
   npm install
   npm run dev

## My Design Choice  and Why
1. Component Architecture:

I used Functional Components and Hooks: to ensure a modern, clean, and maintainable codebase. 

Reusable Components: This ensures modularity and this approach improves code reusability and makes it easier to manage and test individual parts of the application.

2. State Management:

Redux Toolkit: Chosen for global state management to handle authentication and shopping cart state.

 - Persisting Authentication State: To maintain user authentication across page reloads, the user's state is persisted in localStorage. Upon application load, we check localStorage and update the Redux state accordingly, ensuring a seamless user experience.

 - Persisting Cart Items State: To maintain cart items across page reloads, the user's cart items is persisted in localStorage. Upon application load, we check localStorage and update the Redux state accordingly, ensuring a seamless user experience.