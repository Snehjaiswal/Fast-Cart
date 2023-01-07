import React from 'react'
import logo1 from "../../assets/images/vendor-page/logo/1.png"
import logo2 from "../../assets/images/vendor-page/logo/2.png"
import logo3 from "../../assets/images/vendor-page/logo/3.png"
import logo4 from "../../assets/images/vendor-page/logo/4.png"
import logo5 from "../../assets/images/vendor-page/logo/5.png"
import logo6 from "../../assets/images/vendor-page/logo/6.png"
import logo7 from "../../assets/images/vendor-page/logo/7.png"


import product1 from "../../assets/images/vegetable/product/1.png"
import product2 from "../../assets/images/vegetable/product/2.png"
import product3 from "../../assets/images/vegetable/product/3.png"
import product4 from "../../assets/images/vegetable/product/4.png"


function Sellergrid() {
    return (


        <>
            <div>
                {/* <section className="breadscrumb-section pt-0">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadscrumb-contain">
                                    <h2>Seller Grid</h2>
                                    <nav>
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <a href="index.html">
                                                    <i className="fa-solid fa-house" />
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Seller Grid</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* Breadcrumb Section End */}
                {/* Grid Section Start */}
                <section className="seller-grid-section">
                    <div className="container-fluid-lg">
                        <div className="row g-4">
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo1} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Nature Food</h3>
                                            </div>
                                            <label className="product-label">380 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 20 Tomoka Oaks Blvd</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (386) 677-5931</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo2} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Combine Food</h3>
                                            </div>
                                            <label className="product-label">50 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 4838 N Smalley Ave</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (816) 453-6955</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo3} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Amara</h3>
                                            </div>
                                            <label className="product-label">312 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 3625 Metro Pkwy</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (210) 260-2517</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo4} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Denovo Meats</h3>
                                            </div>
                                            <label className="product-label">126 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 6185 S Saginaw St</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (866) 413-2382</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo5} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Meating Place</h3>
                                            </div>
                                            <label className="product-label">258 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 2400 4th St SW</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (641) 424-2605</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo6} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Aven</h3>
                                            </div>
                                            <label className="product-label">69 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 32 Childwall Abbey Road</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (414) 352-3920</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo7} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Organic Corn</h3>
                                            </div>
                                            <label className="product-label">360 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 8267 S South Chicago Avenue</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (773) 731-2500</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo1} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Nature Food</h3>
                                            </div>
                                            <label className="product-label">380 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 20 Tomoka Oaks Blvd</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (386) 677-5931</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="seller-grid-box seller-grid-box-1">
                                    <div className="grid-image">
                                        <div className="image">
                                            <img src={logo2} className="img-fluid" alt />
                                        </div>
                                        <div className="contain-name">
                                            <div>
                                                <div className="since-number">
                                                    <h6>Since 2022</h6>
                                                    <div className="product-rating">
                                                        <ul className="rating">
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" className="fill" />
                                                            </li>
                                                            <li>
                                                                <i data-feather="star" />
                                                            </li>
                                                        </ul>
                                                        <h6 className="theme-color ms-2">(26)</h6>
                                                    </div>
                                                </div>
                                                <h3>Combine Food</h3>
                                            </div>
                                            <label className="product-label">75 Products</label>
                                        </div>
                                    </div>
                                    <div className="grid-contain">
                                        <div className="seller-contact-details">
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Address: <span> 9950 Woodlands Pkwy #400</span></h5>
                                                </div>
                                            </div>
                                            <div className="saller-contact">
                                                <div className="seller-icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="contact-detail">
                                                    <h5>Conact Us: <span> (281) 298-9684</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seller-category">
                                            <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store <i className="fa-solid fa-arrow-right-long ms-2" /></button>
                                            <ul className="product-image">
                                                <li>
                                                    <img src={product1} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product2} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product4} className="img-fluid" alt />
                                                </li>
                                                <li>
                                                    <img src={product3} className="img-fluid" alt />
                                                </li>
                                                <li>+63</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="custome-pagination">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex={-1}>
                                        <i className="fa-solid fa-angles-left" />
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fa-solid fa-angles-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                {/* Grid Section End */}
                {/* Newsletter Section Start */}
                <section className="newsletter-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="newsletter-box newsletter-box-2">
                            <div className="newsletter-contain py-5">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                            <div className="newsletter-detail">
                                                <h2>Join our newsletter and get...</h2>
                                                <h5>$20 discount for your first order</h5>
                                                <div className="input-box">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                                    <i className="fa-solid fa-envelope arrow" />
                                                    <button className="sub-btn  btn-animation">
                                                        <span className="d-sm-block d-none">Subscribe</span>
                                                        <i className="fa-solid fa-arrow-right icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>

    )
}

export default Sellergrid