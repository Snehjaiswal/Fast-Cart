import React, { useState } from 'react'
import banner1 from '../../assets/images/vegetable/banner/1.jpg'
import banner2 from '../../assets/images/vegetable/banner/2.jpg'
import banner3 from '../../assets/images/vegetable/banner/3.jpg'
import banner4 from '../../assets/images/vegetable/banner/4.jpg'
import banner5 from '../../assets/images/vegetable/banner/5.jpg'
import banner6 from '../../assets/images/vegetable/banner/6.jpg'
import banner7 from '../../assets/images/vegetable/banner/7.jpg'
// import banner8 from '../../assets/images/vegetable/banner/8.jpg'

import $ from "jquery";


function Home() {

  const [usereset, setusereset] = useState(false)

  const ButtonDark = () => {
      var href = $("#color-link").attr("href");
    $("body").removeClass("light");
    $("body").addClass("dark");
    document
      .getElementById("color-link")
      .setAttribute("href", "../assets/css/dark.css");
  }

  $("#darkButton").on("click", function () {
    var href = $("#color-link").attr("href");
    $("body").removeClass("light");
    $("body").addClass("dark");
    document
      .getElementById("color-link")
      .setAttribute("href", "../assets/css/dark.css");
  });

  $("#lightButton").on("click", function () {
    var href = $("#color-link").attr("href");
    $("body").removeClass("dark");
    $("body").addClass("light");
    document
      .getElementById("color-link")
      .setAttribute("href", "../assets/css/style.css");

  });




  return (
    <>

      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-8 ratio_65">
              <div className="home-contain h-100">
                <div className="h-100">
                  <img src={banner1} className="bg-img  lazyload" alt='plz check' />
                </div>
                <div className="home-detail p-center-left w-75">
                  <div>
                    <h6>Exclusive offer <span>30% Off</span></h6>
                    <h1 className="text-uppercase">Stay home &amp; delivered your <span className="daily">Daily
                      Needs</span></h1>
                    <p className="w-75 d-none d-sm-block">Vegetables contain many vitamins and minerals that are
                      good for your healt='plz check'h.</p>
                    <button onClick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">Shop Now <i className="fa-solid fa-right-long icon" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 ratio_65">
              <div className="row g-4">
                <div className="col-xl-12 col-md-6">
                  <div className="home-contain">
                    <img src={banner2} className="bg-img  lazyload" alt='plz check' />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h2 className="mt-0 text-danger">45% <span className="discount text-title">OFF</span>
                        </h2>
                        <h3 className="theme-color">Nut Collection</h3>
                        <p className="w-75">We deliver organic vegetables &amp; fruits</p>
                        <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i className="fa-solid fa-right-long" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="home-contain">
                    <img src={banner3} className="bg-img  lazyload" alt='plz check' />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h3 className="mt-0 theme-color fw-bold">Healt</h3>
                        <h4 className="text-danger">Organic Market</h4>
                        <p className="organic">Start your daily shopping with some Organic food</p>
                        <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i className="fa-solid fa-right-long" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section ratio_60 wow fadeInUp">
  <div className="container-fluid-lg">
    <div className="banner-slider">
      <div>
        <div className="banner-contain hover-effect">
          <img src={banner4} className="bg-img  lazyload" alt='plz check' />
          <div className="banner-details">
            <div className="banner-box">
              <h6 className="text-danger">5% OFF</h6>
              <h5>Hot Deals on New Items</h5>
              <h6 className="text-content">Daily Essentials Eggs &amp; Dairy</h6>
            </div>
            <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain hover-effect">
          <img src={banner5} className="bg-img  lazyload" alt='plz check' />
          <div className="banner-details">
            <div className="banner-box">
              <h6 className="text-danger">5% OFF</h6>
              <h5>Buy More &amp; Save More</h5>
              <h6 className="text-content">Fresh Vegetables</h6>
            </div>
            <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain hover-effect">
          <img src={banner6} className="bg-img  lazyload" alt='plz check' />
          <div className="banner-details">
            <div className="banner-box">
              <h6 className="text-danger">5% OFF</h6>
              <h5>Organic Meat Prepared</h5>
              <h6 className="text-content">Delivered to Your Home</h6>
            </div>
            <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain hover-effect">
          <img src={banner7} className="bg-img  lazyload" alt='plz check' />
          <div className="banner-details">
            <div className="banner-box">
              <h6 className="text-danger">5% OFF</h6>
              <h5>Buy More &amp; Save More</h5>
              <h6 className="text-content">Nuts &amp; Snacks</h6>
            </div>
            <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i className="fa-solid fa-right-long ms-2" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section> 




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

      <div className="theme-option">
        <div className="setting-box">
          <button className="btn setting-button" onClick={() => { setusereset(!usereset) }}>
            <i className="fa-solid fa-gear" />
          </button>
          <div className={usereset ? `theme-setting-2 active` : 'theme-setting-2'}>
            <div className="theme-box">
              <ul>
                <li>
                  <div className="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div className="theme-setting-button color-picker">
                    <form className="form-control">
                      <label htmlFor="colorPick" className="form-label mb-0">Theme Color</label>
                      <input type="color" className="form-control form-control-color" id="colorPick" defaultValue="#0da487" title="Choose your color" />
                    </form>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button className="btn btn-2 outline" id="darkButton" onClick={() => ButtonDark()}>Dark</button>
                    <button className="btn btn-2 unline" id="lightButton">Light</button>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div className="theme-setting-button rtl">
                    <button className="btn btn-2 rtl-unline">LTR</button>
                    <button className="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="back-to-top">
          <a id="back-to-top" href="#">
            <i className="fas fa-chevron-up" />
          </a>
        </div> */}
      </div>



    </>
  )
}

export default Home