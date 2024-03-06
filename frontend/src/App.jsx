import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/Header/Navbar.jsx";
import Page404 from "./pages/404";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginState } from "./redux/auth/auth.js";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import EditProfile from "./pages/EditProfile.jsx";
function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(LoginState());
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/profile/edit" element={<EditProfile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ShoppingCart />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
