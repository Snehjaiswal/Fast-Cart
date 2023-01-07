import React from 'react'
import logo from '../../assets/images/vendor-page/logo.png'

function Sellerdetails() {
  return (
    <>
    
    
    
    
    
   <div>
  {/* <section className="vendore-breadscrumb-section">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="breadscrumb-contain">
            <h2>Vendor Details</h2>
            <form>
              <span>
                <i className="iconly-Search icli" />
              </span>
              <input type="text" className="form-control" placeholder="Example text with button add on" />
              <button className="btn theme-bg-color text-white m-0" type="button" id="button-addon1">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section> */}

  {/* Breadcrumb Section End */}
  {/* Shop Section Start */}
  <section className="section-b-space shop-section">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-xxl-3 col-lg-4">
          <div className="left-box wow fadeInUp">
            <div className="shop-left-sidebar">
              <div className="back-button">
                <h3><i className="fa-solid fa-arrow-left" /> Back</h3>
              </div>
              <div className="vendor-detail-box">
                <div className="vendor-name vendor-bottom">
                  <div className="vendor-logo">
                    <img src={logo} alt />
                    <div>
                      <h3>Grocery Store</h3>
                      <div className="product-rating vendor-rating">
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
                        <span>4.3 of 5</span>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do aldskadskm
                    eiusmod tempor incididunt.</p>
                </div>
                <div className="vendor-tag vendor-bottom">
                  <h4>Perfect for you, if you like</h4>
                  <ul>
                    <li>Vegetable</li>
                    <li>Fruit</li>
                    <li>Meat</li>
                    <li>Backery</li>
                    <li>Cake</li>
                    <li>Organic</li>
                  </ul>
                </div>
                <div className="vendor-share">
                  <h5>Follow Us :</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="accordion custome-accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span>Categories</span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                    <div className="accordion-body">
                      <div className="form-floating theme-form-floating-2 search-box">
                        <input type="search" className="form-control" id="search" placeholder="Search .." />
                        <label htmlFor="search">Search</label>
                      </div>
                      <ul className="category-list custom-padding custom-height">
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="fruit" />
                            <label className="form-check-label" htmlFor="fruit">
                              <span className="name">Fruits &amp; Vegetables</span>
                              <span className="number">(15)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="cake" />
                            <label className="form-check-label" htmlFor="cake">
                              <span className="name">Bakery, Cake &amp; Dairy</span>
                              <span className="number">(12)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="behe" />
                            <label className="form-check-label" htmlFor="behe">
                              <span className="name">Beverages</span>
                              <span className="number">(20)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="snacks" />
                            <label className="form-check-label" htmlFor="snacks">
                              <span className="name">Snacks &amp; Branded Foods</span>
                              <span className="number">(05)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="beauty" />
                            <label className="form-check-label" htmlFor="beauty">
                              <span className="name">Beauty &amp; Household</span>
                              <span className="number">(30)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="pets" />
                            <label className="form-check-label" htmlFor="pets">
                              <span className="name">Kitchen, Garden &amp; Pets</span>
                              <span className="number">(50)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="egg" />
                            <label className="form-check-label" htmlFor="egg">
                              <span className="name">Eggs, Meat &amp; Fish</span>
                              <span className="number">(19)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="food" />
                            <label className="form-check-label" htmlFor="food">
                              <span className="name">Gourment &amp; World Food</span>
                              <span className="number">(30)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="care" />
                            <label className="form-check-label" htmlFor="care">
                              <span className="name">Baby Care</span>
                              <span className="number">(20)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="fish" />
                            <label className="form-check-label" htmlFor="fish">
                              <span className="name">Fish &amp; Seafood</span>
                              <span className="number">(10)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="marinades" />
                            <label className="form-check-label" htmlFor="marinades">
                              <span className="name">Marinades</span>
                              <span className="number">(05)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="lamb" />
                            <label className="form-check-label" htmlFor="lamb">
                              <span className="name">Mutton &amp; Lamb</span>
                              <span className="number">(09)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="other" />
                            <label className="form-check-label" htmlFor="other">
                              <span className="name">Port &amp; other Meats</span>
                              <span className="number">(06)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="pour" />
                            <label className="form-check-label" htmlFor="pour">
                              <span className="name">Pourltry</span>
                              <span className="number">(01)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="salami" />
                            <label className="form-check-label" htmlFor="salami">
                              <span className="name">Sausages, bacon &amp; Salami</span>
                              <span className="number">(03)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span>Food Preference</span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                    <div className="accordion-body">
                      <ul className="category-list custom-padding">
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="veget" />
                            <label className="form-check-label" htmlFor="veget">
                              <span className="name">Vegetarian</span>
                              <span className="number">(08)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="non" />
                            <label className="form-check-label" htmlFor="non">
                              <span className="name">Non Vegetarian</span>
                              <span className="number">(09)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <span>Price</span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                    <div className="accordion-body">
                      <div className="range-slider">
                        <input type="text" className="js-range-slider" defaultValue />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      <span>Rating</span>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix">
                    <div className="accordion-body">
                      <ul className="category-list custom-padding">
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" />
                            <div className="form-check-label">
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
                                  <i data-feather="star" className="fill" />
                                </li>
                              </ul>
                              <span className="text-content">(5 Star)</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" />
                            <div className="form-check-label">
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
                              <span className="text-content">(4 Star)</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" />
                            <div className="form-check-label">
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
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <span className="text-content">(3 Star)</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" />
                            <div className="form-check-label">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <span className="text-content">(2 Star)</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" />
                            <div className="form-check-label">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <span className="text-content">(1 Star)</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <span>Discount</span>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour">
                    <div className="accordion-body">
                      <ul className="category-list custom-padding">
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              <span className="name">upto 5%</span>
                              <span className="number">(06)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault1" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                              <span className="name">5% - 10%</span>
                              <span className="number">(08)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault2" />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                              <span className="name">10% - 15%</span>
                              <span className="number">(10)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault3" />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                              <span className="name">15% - 25%</span>
                              <span className="number">(14)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault4" />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                              <span className="name">More than 25%</span>
                              <span className="number">(13)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <span>Pack Size</span>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive">
                    <div className="accordion-body">
                      <ul className="category-list custom-padding custom-height">
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault5" />
                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                              <span className="name">400 to 500 g</span>
                              <span className="number">(05)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault6" />
                            <label className="form-check-label" htmlFor="flexCheckDefault6">
                              <span className="name">500 to 700 g</span>
                              <span className="number">(02)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault7" />
                            <label className="form-check-label" htmlFor="flexCheckDefault7">
                              <span className="name">700 to 1 kg</span>
                              <span className="number">(04)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault8" />
                            <label className="form-check-label" htmlFor="flexCheckDefault8">
                              <span className="name">120 - 150 g each Vacuum 2 pcs</span>
                              <span className="number">(06)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault9" />
                            <label className="form-check-label" htmlFor="flexCheckDefault9">
                              <span className="name">1 pc</span>
                              <span className="number">(09)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault10" />
                            <label className="form-check-label" htmlFor="flexCheckDefault10">
                              <span className="name">1 to 1.2 kg</span>
                              <span className="number">(06)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault11" />
                            <label className="form-check-label" htmlFor="flexCheckDefault11">
                              <span className="name">2 x 24 pcs Multipack</span>
                              <span className="number">(03)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault12" />
                            <label className="form-check-label" htmlFor="flexCheckDefault12">
                              <span className="name">2x6 pcs Multipack</span>
                              <span className="number">(04)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault13" />
                            <label className="form-check-label" htmlFor="flexCheckDefault13">
                              <span className="name">4x6 pcs Multipack</span>
                              <span className="number">(05)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault14" />
                            <label className="form-check-label" htmlFor="flexCheckDefault14">
                              <span className="name">5x6 pcs Multipack</span>
                              <span className="number">(09)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault15" />
                            <label className="form-check-label" htmlFor="flexCheckDefault15">
                              <span className="name">Combo 2 Items</span>
                              <span className="number">(10)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault16" />
                            <label className="form-check-label" htmlFor="flexCheckDefault16">
                              <span className="name">Combo 3 Items</span>
                              <span className="number">(14)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault17" />
                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                              <span className="name">2 pcs</span>
                              <span className="number">(19)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault18" />
                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                              <span className="name">3 pcs</span>
                              <span className="number">(14)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault19" />
                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                              <span className="name">2 pcs Vacuum (140 g to 180 g each
                                )</span>
                              <span className="number">(13)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault20" />
                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                              <span className="name">4 pcs</span>
                              <span className="number">(18)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault21" />
                            <label className="form-check-label" htmlFor="flexCheckDefault21">
                              <span className="name">4 pcs Vacuum (140 g to 180 g each
                                )</span>
                              <span className="number">(07)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault22" />
                            <label className="form-check-label" htmlFor="flexCheckDefault22">
                              <span className="name">6 pcs</span>
                              <span className="number">(09)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault23" />
                            <label className="form-check-label" htmlFor="flexCheckDefault23">
                              <span className="name">6 pcs carton</span>
                              <span className="number">(11)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check ps-0 m-0 category-list-box">
                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault24" />
                            <label className="form-check-label" htmlFor="flexCheckDefault24">
                              <span className="name">6 pcs Pouch</span>
                              <span className="number">(16)</span>
                            </label>
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
        <div className="col-xxl-9 col-lg-8">
          <div className="right-box">
            <div className="show-button">
              <div className="filter-button-group mt-0">
                <div className="filter-button d-inline-block d-lg-none">
                  <a><i className="fa-solid fa-filter" /> Filter Menu</a>
                </div>
              </div>
              <div className="top-filter-menu">
                <div className="category-dropdown">
                  <h5 className="text-content">Sort By :</h5>
                  <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                      <span>Most Popular</span> <i className="fa-solid fa-angle-down" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a className="dropdown-item" id="pop" href="#">Popularity</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="low" href="#">Low - High
                          Price</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="high" href="#">High - Low
                          Price</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="rating" href="#">Average
                          Rating</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="aToz" href="#">A - Z
                          Order</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="zToa" href="#">Z - A
                          Order</a>
                      </li>
                      <li>
                        <a className="dropdown-item" id="off" href="#">% Off -
                          Hight To
                          Low</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid-option">
                  <ul>
                    <li className="three-grid d-xxl-inline-block d-none">
                      <a href="#">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg" className=" lazyload" alt />
                      </a>
                    </li>
                    <li className="grid-btn active">
                      <a href="#">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg" className=" lazyload d-lg-inline-block d-none" alt />
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid.svg" className=" lazyload img-fluid d-lg-none d-inline-block" alt />
                      </a>
                    </li>
                    <li className="list-btn">
                      <a href="#">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/list.svg" className=" lazyload" alt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
              <div>
                <div className="product-box-3 h-100 wow fadeInUp">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/2.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Cheesy feet cheesy grin
                        brie.
                        Mascarpone cheese and wine hard cheese the big cheese everyone loves
                        smelly
                        cheese macaroni cheese croque monsieur.</p>
                      <div className="product-rating mt-2">
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
                        <span>(4.0)</span>
                      </div>
                      <h6 className="unit">250 ml</h6>
                      <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/3.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Feta taleggio croque
                        monsieur
                        swiss manchego cheesecake dolcelatte jarlsberg. Hard cheese danish
                        fontina
                        boursin melted cheese fondue.</p>
                      <div className="product-rating mt-2">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(2.4)</span>
                      </div>
                      <h6 className="unit">350 G</h6>
                      <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/4.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Lancashire hard cheese
                        parmesan. Danish fontina mozzarella cream cheese smelly cheese cheese
                        and
                        wine cheesecake dolcelatte stilton. Cream cheese parmesan who moved my
                        cheese when the cheese comes out everybody's happy cream cheese red
                        leicester ricotta edam.</p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <span>(5.0)</span>
                      </div>
                      <h6 className="unit">570 G</h6>
                      <h5 className="price"><span className="theme-color">$12.52</span> <del>$13.62</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.15s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/5.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Cheddar cheddar pecorino
                        hard
                        cheese hard cheese cheese and biscuits bocconcini babybel. Cow goat
                        paneer
                        cream cheese fromage cottage cheese cauliflower cheese jarlsberg.</p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(3.8)</span>
                      </div>
                      <h6 className="unit">100 G</h6>
                      <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/6.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Bavarian bergkase smelly
                        cheese swiss cut the cheese lancashire who moved my cheese manchego
                        melted
                        cheese. Red leicester paneer cow when the cheese comes out everybody's
                        happy
                        croque monsieur goat melted cheese port-salut.</p>
                      <div className="product-rating mt-2">
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
                        <span>(4.0)</span>
                      </div>
                      <h6 className="unit">550 G</h6>
                      <h5 className="price"><span className="theme-color">$14.25</span> <del>$16.57</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.25s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/7.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Melted cheese babybel
                        chalk
                        and cheese. Port-salut port-salut cream cheese when the cheese comes out
                        everybody's happy cream cheese hard cheese cream cheese red leicester.
                      </p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(3.8)</span>
                      </div>
                      <h6 className="unit">1 Kg</h6>
                      <h5 className="price"><span className="theme-color">$12.68</span> <del>$14.69</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/2.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Squirty cheese cottage
                        cheese
                        cheese strings. Red leicester paneer danish fontina queso lancashire
                        when
                        the cheese comes out everybody's happy cottage cheese paneer.</p>
                      <div className="product-rating mt-2">
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
                        <span>(4.0)</span>
                      </div>
                      <h6 className="unit">250 ml</h6>
                      <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.35s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/3.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Swiss ricotta cauliflower
                        cheese squirty cheese cheesy grin camembert de normandie airedale edam.
                        Squirty cheese babybel cheesecake the big cheese cauliflower cheese hard
                        cheese cheese and biscuits cheese and wine.</p>
                      <div className="product-rating mt-2">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(2.4)</span>
                      </div>
                      <h6 className="unit">350 G</h6>
                      <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/4.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Boursin the big cheese
                        cheeseburger. Jarlsberg smelly cheese chalk and cheese gouda blue
                        castello
                        monterey jack swiss boursin. Halloumi cheesy feet mozzarella red
                        leicester
                        paneer boursin who moved my cheese croque monsieur.</p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" className="fill" />
                          </li>
                        </ul>
                        <span>(5.0)</span>
                      </div>
                      <h6 className="unit">570 G</h6>
                      <h5 className="price"><span className="theme-color">$12.52</span> <del>$13.62</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.45s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/5.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Halloumi mozzarella
                        monterey
                        jack smelly cheese emmental bocconcini when the cheese comes out
                        everybody's
                        happy pecorino. Cut the cheese stilton danish fontina cheesy grin rubber
                        cheese smelly cheese roquefort paneer.</p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(3.8)</span>
                      </div>
                      <h6 className="unit">100 G</h6>
                      <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/6.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Manchego cow cheddar.
                        Port-salut roquefort hard cheese babybel when the cheese comes out
                        everybody's happy brie dolcelatte croque monsieur.</p>
                      <div className="product-rating mt-2">
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
                        <span>(4.0)</span>
                      </div>
                      <h6 className="unit">550 G</h6>
                      <h5 className="price"><span className="theme-color">$14.25</span> <del>$16.57</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.55s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/7.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Roquefort say cheese the
                        big
                        cheese ricotta chalk and cheese when the cheese comes out everybody's
                        happy
                        brie lancashire.</p>
                      <div className="product-rating mt-2">
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
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(3.8)</span>
                      </div>
                      <h6 className="unit">1 Kg</h6>
                      <h5 className="price"><span className="theme-color">$12.68</span> <del>$14.69</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.6">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/2.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Lancashire when the cheese
                        comes out everybody's happy blue castello halloumi boursin stinking
                        bishop
                        pecorino fromage frais.</p>
                      <div className="product-rating mt-2">
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
                        <span>(4.0)</span>
                      </div>
                      <h6 className="unit">250 ml</h6>
                      <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.65s">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img src="../assets/images/cake/product/3.png" className="img-fluid  lazyload" alt />
                      </a>
                      <ul className="product-option">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#view">
                            <i data-feather="eye" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">Say cheese cheese and
                        biscuits
                        feta. Queso bocconcini danish fontina camembert de normandie brie
                        airedale
                        ricotta feta. Pecorino edam gouda caerphilly croque monsieur red
                        leicester
                        cheese triangles caerphilly.</p>
                      <div className="product-rating mt-2">
                        <ul className="rating">
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" className="fill" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                          <li>
                            <i data-feather="star" />
                          </li>
                        </ul>
                        <span>(2.4)</span>
                      </div>
                      <h6 className="unit">350 G</h6>
                      <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                        <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                            <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                            <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="custome-pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
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
    </div>
  </section>
</div>

    
    
    
    
    
    
    
    </>
  )
}

export default Sellerdetails