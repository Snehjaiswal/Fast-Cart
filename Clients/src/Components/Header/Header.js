import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'

import unitedstates from '../../assets/images/country/united-states.png'

import product2 from '../../assets/images/vegetable/product/2.png'
import logo1 from '../../assets/images/logo/1.png'





function Header() {
    const location = useLocation()
    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/');
    }
    const shopClick = () => {
        navigate('/shop');
    }
    const productClick = () => {
        // navigate('/product');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'WORK IS PANDDING!',
          //   footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    const megamenuClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'WORK IS PANDDING!',
          //   footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    const pagesClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'WORK IS PANDDING!',
          //   footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    // const sellerClick = () => {
    //     navigate('/seller');
    // }
    const loginClick = () => {
        navigate('/login');
    }
    const registrationClick = () => {
        navigate('/registration');
    }
    const forgotpasswordClick = () => {
        navigate('/forgot-password');
    }
    const Blogsdeteails = () => {
        navigate('/blogs-detail');
    }
    const Blogsgrid = () => {
        navigate('/blogs-grid');
    }
    const Blogslist = () => {
        navigate('/blogs-list');
    }
    const ContactClick = () => {
        navigate('/Contact')
    }
    const WishlistClick = () => {
        navigate('/wishlist')
    }
    const becameSellerClick = () => {
        navigate('/seller-become')
    }
    const sellerDashBoardClick = () => {
        navigate('/seller-dashboard')
    }
    const sellerDetailClick = () => {
        navigate('/seller-detail')
    }
    const sellerGridClick = () => {
        navigate('/seller-grid')
    }
    const cartClick = ()=>{
        navigate('/cart')
    }


    const pandding = () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'WORK IS PANDDING!',
        //   footer: '<a href="">Why do I have this issue?</a>'
        })
      }

    return (
        <>
            {/* <!-- Header Start --> */}
            <header className="pb-md-4 pb-0">
                <div className="header-top">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-3 d-xxl-block d-none">
                                <div className="top-left-header">
                                    <i className="iconly-Location icli text-white" />
                                    <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                                <div className="header-offer">
                                    <div className="notification-slider">

                                        <div>
                                            <div className="timer-notification">
                                                <h6>Something you love is now on sale!
                                                    <a href="shop-left-sidebar.html" className="text-white">Buy Now
                                                        !</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <ul className="about-list right-nav-about">
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-language" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={unitedstates} className="img-fluid  lazyload" alt />
                                                <span>English</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                                <li>
                                                    <a className="dropdown-item" href="#" id="english">
                                                        <img src={unitedstates} className="img-fluid  lazyload" alt />
                                                        <span>English</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-dollar" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>USD</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu" aria-labelledby="select-dollar">
                                                <li>
                                                    <a className="dropdown-item" id="aud" href="#">AUD</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="top-nav top-header sticky-header">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-top">
                                    <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                        <span className="navbar-toggler-icon">
                                            <i className="fa-solid fa-bars" />
                                        </span>
                                    </button>
                                    <a href="index.html" className="web-logo nav-logo">
                                        <img src={logo1} className="img-fluid  lazyload" alt="Fast-Cart" />
                                    </a>
                                    <div className="middle-box">
                                        <div className="location-box">
                                            <button className="btn location-button" data-bs-toggle="modal" data-bs-target="#locationModal">
                                                <span className="location-arrow">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </span>
                                                {/* <span className="locat-name">Your Location</span> */}

                                            </button>
                                        </div>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <input type="search" className="form-control" placeholder="I'm searching for..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn" type="button" id="button-addon2">
                                                    <i className="fa-solid fa-magnifying-glass"></i>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightside-box">
                                        <div className="search-full">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i data-feather="search" className="font-light" />
                                                </span>
                                                <input type="text" className="form-control search-type" placeholder="Search here.." />
                                                <span className="input-group-text close-search">
                                                    <i data-feather="x" className="font-light" />
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="right-side-menu">
                                            <li className="right-side">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <div className="search-box">
                                                            <i data-feather="search" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side">
                                                <a onClick={ContactClick} className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                    
                                                    <i class="fa-regular fa-phone-volume fa-lg"  style={{"color":"black"}}></i>
                                                   
                                                    </div>
                                                 
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <a onClick={WishlistClick} className="btn p-0 position-relative header-wishlist">
                                                    <i className="fa-thin fa-heart"></i>
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <div className="onhover-dropdown header-badge">
                                                    <button type="button" className="btn p-0 position-relative header-wishlist">
                                                        <i className="fa-light fa-cart-shopping"></i>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge">2
                                                            <span className="visually-hidden">unread messages</span>
                                                        </span>
                                                    </button>
                                                    <div className="onhover-div">
                                                        <ul className="cart-list">
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        <img src={product2} className=" lazyload" alt />
                                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                                    </a>
                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                            </h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $25.68</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        <img src={product2} className=" lazyload" alt />
                                                                        {/* <i className="fa-solid fa-cart-shopping"></i> */}
                                                                    </a>
                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                            </h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $25.68</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="price-box">
                                                            <h5>Total :</h5>
                                                            <h4 className="theme-color fw-bold">$106.58</h4>
                                                        </div>
                                                        <div className="button-group">
                                                            <a onClick={cartClick} className="btn btn-sm cart-button">View Cart</a>
                                                            <a href="checkout" className="btn btn-sm cart-button theme-bg-color
                                              text-white">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side onhover-dropdown">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Hello,</h6>
                                                        <h5>My Account</h5>
                                                    </div>
                                                </div>
                                                <div className="onhover-div onhover-div-login">
                                                    <ul className="user-box-name">
                                                        <li className="product-box-contain">

                                                            <a onClick={loginClick}>Log In</a>
                                                        </li>
                                                        <li className="product-box-contain">
                                                            <a onClick={registrationClick} >Register</a>
                                                        </li>
                                                        <li className="product-box-contain" widht="100px !important">
                                                            <span>  <a onClick={forgotpasswordClick}>Forgot Password </a></span>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-nav">
                                <div className="header-nav-left">
                                    <button className="dropdown-category">
                                        <i className="fa-solid fa-list"></i>
                                        <span style={{ "paddingLeft": "10px" }} onClick={()=>pandding()}> All Categories</span>
                                    </button>
                                    <div className="category-dropdown">
                                        <div className="category-title">
                                            <h5>Categories</h5>
                                            <button type="button" className="btn p-0 close-button text-content">
                                                <i className="fa-solid fa-xmark" />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="header-nav-middle">
                                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                        <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                            <div className="offcanvas-header navbar-shadow">
                                                <h5>Menu</h5>
                                                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                                            </div>
                                            <div className="offcanvas-body">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={homeClick} data-bs-toggle="dropdown">
                                                            <i className="fa-thin fa-house-chimney" />Home</a>

                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={shopClick} data-bs-toggle="dropdown">
                                                            <i className="fa-thin fa-shop" />Shop</a>
                                                    
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" onClick={productClick} data-bs-toggle="dropdown">Product</a>
                                                        {/* <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="product-4-image.html">Product
                                                                    4 Image</a>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <a href="#" className="dropdown-item">Product
                                                                    Thumbnail</a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="product-left-thumbnail.html">Left Thumbnail</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-right-thumbnail.html">Right
                                                                            Thumbnail</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="product-bottom-thumbnail.html">Bottom
                                                                            Thumbnail</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="product-bundle.html" className="dropdown-item">Product
                                                                    Bundle</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-slider.html" className="dropdown-item">Product
                                                                    Slider</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sticky.html" className="dropdown-item">Product
                                                                    Sticky</a>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="nav-item dropdown dropdown-mega">
                                                        <a className="nav-link dropdown-toggle ps-xl-2 ps-0" onClick={megamenuClick} data-bs-toggle="dropdown">Mega Menu</a>

                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" onClick={Blogsdeteails} >Blog Detail</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" onClick={Blogsgrid} >Blog Grid</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" onClick={Blogslist}>Blog List</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown new-nav-item">
                                                        <label className="new-dropdown">New</label>
                                                        <a className="nav-link dropdown-toggle" onClick={pagesClick} data-bs-toggle="dropdown">Pages</a>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown">Seller</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" onClick={becameSellerClick}>Become a
                                                                    Seller</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" onClick={sellerDashBoardClick}>Seller
                                                                    Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" onClick={sellerDetailClick}>Seller
                                                                    Detail</a>
                                                            </li>

                                                            <li>
                                                                <a className="dropdown-item" onClick={sellerGridClick}>Seller Grid</a>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-nav-right">
                                    <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                                        <i className="fa-thin fa-bolt"></i>
                                        <span>Deal Today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>








        </>
    )
}

export default Header