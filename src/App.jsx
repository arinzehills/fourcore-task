import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginRoute from "./components/PrivateRoute/LoginRoute";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route element={<LoginRoute />}>
                <Route path="/login" element={<Login />}>
                <Route index element={<Login />} /></Route>
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Dashboard />} /></Route>
              </Route>
              {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
              {/* <Route path="/instructions" element={<InstructionsList />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
