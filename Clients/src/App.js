
import { Route, Routes, useLocation } from 'react-router-dom';
import $ from "jquery";
// import './assets/js/slick/custom_slick'
// import './assets/js/slick/slick'

import Header from './Components/Header/Header'
// import Home from './Components/Home/Home'
import Home1 from './Components/Home/Home1';

import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Registration from './Components/Login/Registration';
import Forgetpassword from './Components/Login/Forgetpassword';
import Products from './Components/Products/Products';
import Contack from './Components/Contact/Contack';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';
import Shop from './Components/Shop/Shop';



import Blogsdeteails from './Components/Blogs/Blogsdeteails';
import Blogsgrid from './Components/Blogs/Blogsgrid';
import Blogslist from './Components/Blogs/Blogslist';



import Sellerbecome from './Components/Sellers/Sellercecome';
import Sellerdashboard from './Components/Sellers/Sellerdashboard';
import Sellerdetails from './Components/Sellers/Sellerdetails';
import Sellergrid from './Components/Sellers/Sellergrid';


// File Import
import '../src/App.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/css/vendors/slick/slick.css'
import '../src/assets/css/vendors/slick/slick-theme.css'
import '../src/assets/css/style.css'
import '../src/assets/css/vendors/bootstrap.css'
import '../src/assets/css/vendors/feather-icon.css'
import '../src/assets/css/bulk-style.css'
import '../src/assets/css/vendors/animate.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home1 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contack />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />






        {/* Blogs */}
        <Route path="/blogs-detail" element={<Blogsdeteails />} />
        <Route path="/blogs-grid" element={<Blogsgrid />} />
        <Route path="/blogs-list" element={<Blogslist />} />

        

        {/* Sellers */}
        <Route path="/seller-become" element={<Sellerbecome />} />
        <Route path="/seller-dashboard" element={<Sellerdashboard />} />
        <Route path="/seller-detail" element={<Sellerdetails />} />
        <Route path="/seller-grid" element={<Sellergrid />} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
