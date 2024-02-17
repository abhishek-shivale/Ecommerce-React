import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './features/Header/Navbar.jsx';
import Page404 from './pages/404';
import Product from './pages/Product';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
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
