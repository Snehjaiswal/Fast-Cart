import React from 'react'

import blog1 from '../../assets/images/inner-page/blog/1.jpg'
import blog2 from '../../assets/images/inner-page/blog/2.jpg'
import blog3 from '../../assets/images/inner-page/blog/3.jpg'
import blog4 from '../../assets/images/inner-page/blog/4.jpg'
import blog5 from '../../assets/images/inner-page/blog/5.jpg'


import product23 from '../../assets/images/vegetable/product/23.png'
import product24 from '../../assets/images/vegetable/product/23.png'
import product26 from '../../assets/images/vegetable/product/23.png'







function Blogsgrid() {
    return (
        <>


            <div>
                {/* Breadcrumb Section Start */}
                <section className="breadscrumb-section pt-0">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadscrumb-contain">
                                    <h2>Blog Grid</h2>
                                    <nav>
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <a href="index.html">
                                                    <i className="fa-solid fa-house" />
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Grid</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Breadcrumb Section End */}
                {/* Blog Section Start */}
                <section className="blog-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="row g-4">
                            <div className="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
                                <div className="row g-4 ratio_65">
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog1} className="bg-img lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Mark J.
                                                        Speight</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.05s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog2} className="bg-img" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>rebeus
                                                        hagrid</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog3} className="bg-img  lazyload" alt />
                                                </a>
                                                <label><i className="fa-solid fa-bolt-lightning" /> popular</label>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Chris C.
                                                        Hall</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>How to start regrowing green onions and other vegetables.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.15s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog4} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>James M.
                                                        Martin</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Starting a vegetable garden: the basics.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog5} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Cecil M.
                                                        Levis</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Adapt this simple pasta salad to whatever vegetable.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.25s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog1} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Mary R.
                                                        Hernandez</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>With chefs idle and vegetables rotting, China's virus-hit.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog2} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Cheryl D.
                                                        Moser</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Turn that bowl of pasta into a supercharged veggie vehicle.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.35s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog3} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg,
                                                        2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Mina M.
                                                        Short</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Health, care and skin on the for your organic.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog4} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Marie S.
                                                        Santiago</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Fresh organicsm, brand, fresh and picnic place awesome.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.45s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog3} className="bg-img  lazyload" alt />
                                                </a>
                                                <label><i className="fa-solid fa-bolt-lightning" /> popular</label>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Mark J.
                                                        Speight</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>With chefs idle and vegetables rotting, China's virus-hit.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog3} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>Chris C.
                                                        Hall</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>Vegina good quality special liquide fesh vagitables.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-6">
                                        <div className="blog-box wow fadeInUp" data-wow-delay="0.55s">
                                            <div className="blog-image">
                                                <a href="blog-detail.html">
                                                    <img src={blog5} className="bg-img  lazyload" alt />
                                                </a>
                                            </div>
                                            <div className="blog-contain">
                                                <div className="blog-label">
                                                    <span className="time"><i data-feather="clock" /> <span>25 Feg, 2022</span></span>
                                                    <span className="super"><i data-feather="user" /> <span>James M.
                                                        Martin</span></span>
                                                </div>
                                                <a href="blog-detail.html">
                                                    <h3>How to freeze fresh vegetables while preserving their best qualities.</h3>
                                                </a>
                                                <button onClick="location.href = 'blog-detail.html';" className="blog-button">Read More
                                                    <i className="fa-solid fa-right-long" /></button>
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
                            <div className="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
                                <div className="left-sidebar-box wow fadeInUp">
                                    <div className="left-search-box">
                                        <div className="search-box">
                                            <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="Search...." />
                                        </div>
                                    </div>
                                    <div className="accordion left-accordion-box" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    Recent Post
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body pt-0">
                                                    <div className="recent-post-box">
                                                        <div className="recent-box">
                                                            <a href="blog-detail.html" className="recent-image">
                                                                <img src={blog1} className="img-fluid  lazyload" alt />
                                                            </a>
                                                            <div className="recent-detail">
                                                                <a href="blog-detail.html">
                                                                    <h5 className="recent-name">Green onion knife and salad placed</h5>
                                                                </a>
                                                                <h6>25 Jan, 2022 <i data-feather="thumbs-up" /></h6>
                                                            </div>
                                                        </div>
                                                        <div className="recent-box">
                                                            <a href="blog-detail.html" className="recent-image">
                                                                <img src={blog2} className="img-fluid  lazyload" alt />
                                                            </a>
                                                            <div className="recent-detail">
                                                                <a href="blog-detail.html">
                                                                    <h5 className="recent-name">Health and skin for your organic</h5>
                                                                </a>
                                                                <h6>25 Jan, 2022 <i data-feather="thumbs-up" /></h6>
                                                            </div>
                                                        </div>
                                                        <div className="recent-box">
                                                            <a href="blog-detail.html" className="recent-image">
                                                                <img src={blog3} className="img-fluid  lazyload" alt />
                                                            </a>
                                                            <div className="recent-detail">
                                                                <a href="blog-detail.html">
                                                                    <h5 className="recent-name">Organics mix masala fresh &amp; soft</h5>
                                                                </a>
                                                                <h6>25 Jan, 2022 <i data-feather="thumbs-up" /></h6>
                                                            </div>
                                                        </div>
                                                        <div className="recent-box">
                                                            <a href="blog-detail.html" className="recent-image">
                                                                <img src={blog4} className="img-fluid  lazyload" alt />
                                                            </a>
                                                            <div className="recent-detail">
                                                                <a href="blog-detail.html">
                                                                    <h5 className="recent-name">Fresh organics brand and picnic</h5>
                                                                </a>
                                                                <h6>25 Jan, 2022 <i data-feather="thumbs-up" /></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    Category
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                                <div className="accordion-body p-0">
                                                    <div className="category-list-box">
                                                        <ul>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Latest Recipes</h5>
                                                                        <span>10</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Diet Food</h5>
                                                                        <span>6</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Low calorie Items</h5>
                                                                        <span>8</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Cooking Method</h5>
                                                                        <span>9</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Dairy Free</h5>
                                                                        <span>12</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-list.html">
                                                                    <div className="category-name">
                                                                        <h5>Vegetarian Food</h5>
                                                                        <span>10</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                    Product Tags
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                                <div className="accordion-body pt-0">
                                                    <div className="product-tags-box">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Fruit Cutting</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">organic</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cake</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">pick fruit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">backery</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">organix food</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Most Expensive Fruit</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                                    Trending Products
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
                                                <div className="accordion-body">
                                                    <ul className="product-list product-list-2 border-0 p-0">
                                                        <li>
                                                            <div className="offer-product">
                                                                <a href="shop-left-sidebar.html" className="offer-image">
                                                                    <img src={product23} className=" lazyload" alt />
                                                                </a>
                                                                <div className="offer-detail">
                                                                    <div>
                                                                        <a href="shop-left-sidebar.html">
                                                                            <h6 className="name">Meatigo Premium Goat Curry</h6>
                                                                        </a>
                                                                        <span>450 G</span>
                                                                        <h6 className="price theme-color">$ 70.00</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="offer-product">
                                                                <a href="shop-left-sidebar.html" className="offer-image">
                                                                    <img src={product24} className=" lazyload" alt />
                                                                </a>
                                                                <div className="offer-detail">
                                                                    <div>
                                                                        <a href="shop-left-sidebar.html">
                                                                            <h6 className="name">Dates Medjoul Premium Imported</h6>
                                                                        </a>
                                                                        <span>450 G</span>
                                                                        <h6 className="price theme-color">$ 40.00</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-0">
                                                            <div className="offer-product">
                                                                <a href="shop-left-sidebar.html" className="offer-image">
                                                                    <img src={product26} className=" lazyload" alt />
                                                                </a>
                                                                <div className="offer-detail">
                                                                    <div>
                                                                        <a href="shop-left-sidebar.html">
                                                                            <h6 className="name">Apple Red Premium Imported</h6>
                                                                        </a>
                                                                        <span>1 KG</span>
                                                                        <h6 className="price theme-color">$ 80.00</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Section End */}
            </div>









        </>
    )
}

export default Blogsgrid