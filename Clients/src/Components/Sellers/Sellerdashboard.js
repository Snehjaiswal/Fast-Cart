import React from 'react'

import coverImg1 from '../../assets/images/inner-page/cover-img.jpg'
import logo1 from '../../assets/images/vendor-page/logo.png'

import product1 from "../../assets/images/vegetable/product/1.png"
import product2 from "../../assets/images/vegetable/product/2.png"
import product3 from "../../assets/images/vegetable/product/3.png"
import product4 from "../../assets/images/vegetable/product/4.png"


function Sellerdashboard() {
    return (
        <>
{/* 
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>User Dashboard</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">User Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="user-dashboard-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="close-button d-flex d-lg-none">
                                    <button className="close-sidebar">
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                </div>
                                <div className="profile-box">
                                    <div className="cover-image">
                                        <img src={coverImg1} className="img-fluid  lazyload" alt />
                                    </div>
                                    <div className="profile-contain">
                                        <div className="profile-image">
                                            <div className="position-relative">
                                                <img src={logo1} className=" lazyload update_img" alt />
                                            </div>
                                        </div>
                                        <div className="profile-name">
                                            <h3>Joshua D. Bass</h3>
                                            <h6 className="text-content">joshuadbass@rhyta.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a href="#pills-tabContent" className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" role="tab" aria-controls="pills-dashboard" aria-selected="true"><i data-feather="home" />
                                            DashBoard</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected="false"><i data-feather="shopping-bag" />Products</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false"><i data-feather="shopping-bag" />Order</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i data-feather="user" />
                                            Profile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="false"><i data-feather="settings" />
                                            Setting</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-out-tab" data-bs-toggle="pill" data-bs-target="#pills-out" type="button" role="tab" aria-selected="false"><i data-feather="log-out" />
                                            Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8">
                            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show
                                Menu</button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel" aria-labelledby="pills-dashboard-tab">
                                        <div className="dashboard-home">
                                            <div className="title">
                                                <h2>My Dashboard</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="dashboard-user-name">
                                                <h6 className="text-content">Hello, <b className="text-title">Vicki E. Pope</b></h6>
                                                <p className="text-content">From your My Account Dashboard you have the ability to
                                                    view a snapshot of your recent account activity and update your account
                                                    information. Select a link below to view or edit information.</p>
                                            </div>
                                            <div className="total-box">
                                                <div className="row g-sm-4 g-3">
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className="img-1  lazyload" alt />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className=" lazyload" alt />
                                                            <div className="totle-detail">
                                                                <h5>Total Products</h5>
                                                                <h3>25</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className="img-1  lazyload" alt />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className=" lazyload" alt />
                                                            <div className="totle-detail">
                                                                <h5>Total Sales</h5>
                                                                <h3>12550</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg" className="img-1  lazyload" alt />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg" className=" lazyload" alt />
                                                            <div className="totle-detail">
                                                                <h5>Order Pending</h5>
                                                                <h3>36</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-bg-box">
                                                        <div id="chart" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-bg-box">
                                                        <div id="sale" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="table-responsive dashboard-bg-box">
                                                        <div className="dashboard-title mb-4">
                                                            <h3>Trending Products</h3>
                                                        </div>
                                                        <table className="table product-table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Images</th>
                                                                    <th scope="col">Product Name</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Sales</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img src={product1} className="img-fluid" alt />
                                                                    </td>
                                                                    <td>
                                                                        <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$25.69</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>152</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img src={product2} className="img-fluid" alt />
                                                                    </td>
                                                                    <td>
                                                                        <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$35.36</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>34</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img src={product3} className="img-fluid" alt />
                                                                    </td>
                                                                    <td>
                                                                        <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$78.55</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>78</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img src={product4} className="img-fluid" alt />
                                                                    </td>
                                                                    <td>
                                                                        <h6>healthy Long Life Toned Milk 1 L</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$32.98</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>135</h6>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="order-tab dashboard-bg-box">
                                                        <div className="dashboard-title mb-4">
                                                            <h3>Recent Order</h3>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table order-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Order ID</th>
                                                                        <th scope="col">Product Name</th>
                                                                        <th scope="col">Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="product-image">#254834</td>
                                                                        <td>
                                                                            <h6>Choco Chip Cookies</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#355678</td>
                                                                        <td>
                                                                            <h6>Premium Butter Cookies</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#647536</td>
                                                                        <td>
                                                                            <h6>Sprinkled Potato Chips</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#125689</td>
                                                                        <td>
                                                                            <h6>Milk 1 L</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#215487</td>
                                                                        <td>
                                                                            <h6>Raw Mutton Leg</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#365474</td>
                                                                        <td>
                                                                            <h6>Instant Coffee</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#368415</td>
                                                                        <td>
                                                                            <h6>Jowar Stick and Jowar Chips</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
                                        <div className="product-tab">
                                            <div className="title">
                                                <h2>All Product</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="table-responsive dashboard-bg-box">
                                                <table className="table product-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Images</th>
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Stock</th>
                                                            <th scope="col">Sales</th>
                                                            <th scope="col">Edit / Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/1.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$25.69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>63</h6>
                                                            </td>
                                                            <td>
                                                                <h6>152</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/2.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$35.36</h6>
                                                            </td>
                                                            <td>
                                                                <h6>14</h6>
                                                            </td>
                                                            <td>
                                                                <h6>34</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/3.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$78.55</h6>
                                                            </td>
                                                            <td>
                                                                <h6>55</h6>
                                                            </td>
                                                            <td>
                                                                <h6>78</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/4.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>healthy Long Life Toned Milk 1 L</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$32.98</h6>
                                                            </td>
                                                            <td>
                                                                <h6>69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>135</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/5.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$36.98</h6>
                                                            </td>
                                                            <td>
                                                                <h6>35</h6>
                                                            </td>
                                                            <td>
                                                                <h6>154</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/6.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$36.58</h6>
                                                            </td>
                                                            <td>
                                                                <h6>69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>168</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img src="../assets/images/vegetable/product/7.png" className="img-fluid" alt />
                                                            </td>
                                                            <td>
                                                                <h6>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$25.69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>63</h6>
                                                            </td>
                                                            <td>
                                                                <h6>152</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                                        <div className="dashboard-order">
                                            <div className="title">
                                                <h2>All Order</h2>
                                                <span className="title-leaf title-leaf-gray">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="order-tab dashboard-bg-box">
                                                <div className="table-responsive">
                                                    <table className="table order-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Order ID</th>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="product-image">#254834</td>
                                                                <td>
                                                                    <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#355678</td>
                                                                <td>
                                                                    <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#647536</td>
                                                                <td>
                                                                    <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#125689</td>
                                                                <td>
                                                                    <h6>healthy Long Life Toned Milk 1 L</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#215487</td>
                                                                <td>
                                                                    <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#365474</td>
                                                                <td>
                                                                    <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#368415</td>
                                                                <td>
                                                                    <h6>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="dashboard-profile">
                                            <div className="title">
                                                <h2>My Profile</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="profile-tab dashboard-bg-box">
                                                <div className="dashboard-title dashboard-flex">
                                                    <h3>Profile Name</h3>
                                                    <button className="btn btn-sm theme-bg-color text-white" data-bs-toggle="modal" data-bs-target="#edit-profile">Edit Profile</button>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <h5>Company Name :</h5>
                                                        <h5>Grocery Store</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Email Address :</h5>
                                                        <h5>joshuadbass@rhyta.com</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Country / Region :</h5>
                                                        <h5>107 Veltri Drive</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Year Established :</h5>
                                                        <h5>2022</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Total Employees :</h5>
                                                        <h5>154 - 360 People</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Category :</h5>
                                                        <h5>Grocery</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Street Address :</h5>
                                                        <h5>234 High St</h5>
                                                    </li>
                                                    <li>
                                                        <h5>City / State :</h5>
                                                        <h5>107 Veltri Drive</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Zip :</h5>
                                                        <h5>B23 6SN</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-security" role="tabpanel" aria-labelledby="pills-security-tab">
                                        <div className="dashboard-privacy">
                                            <div className="title">
                                                <h2>My Setting</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Notifications</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="desktop" name="desktop" defaultChecked />
                                                        <label className="form-check-label ms-2" htmlFor="desktop">Show
                                                            Desktop Notifications</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="enable" name="desktop" />
                                                        <label className="form-check-label ms-2" htmlFor="enable">Enable
                                                            Notifications</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="activity" name="desktop" />
                                                        <label className="form-check-label ms-2" htmlFor="activity">Get
                                                            notification for my own activity</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="dnd" name="desktop" />
                                                        <label className="form-check-label ms-2" htmlFor="dnd">DND</label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Save
                                                    Changes</button>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Deactivate Account</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="concern" name="concern" />
                                                        <label className="form-check-label ms-2" htmlFor="concern">I have a privacy
                                                            concern</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="temporary" name="concern" />
                                                        <label className="form-check-label ms-2" htmlFor="temporary">This is
                                                            temporary</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="other" name="concern" />
                                                        <label className="form-check-label ms-2" htmlFor="other">other</label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Deactivate
                                                    Account</button>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Delete Account</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="usable" name="usable" />
                                                        <label className="form-check-label ms-2" htmlFor="usable">No longer
                                                            usable</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="account" name="usable" />
                                                        <label className="form-check-label ms-2" htmlFor="account">Want to switch on
                                                            other
                                                            account</label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input className="form-check-input" type="radio" id="other-2" name="usable" />
                                                        <label className="form-check-label ms-2" htmlFor="other-2">Other</label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Delete My
                                                    Account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Sellerdashboard