import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Page404 from './pages/404';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './features/Header/Navbar.jsx';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
