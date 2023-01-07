import React from 'react'
import ContactImg from '../../assets/images/inner-page/contact-us.png'

function Contack() {
  return (
   <>
   
   
   
   <div>
  {/* Breadcrumb Section Start */}
  {/* <section className="breadscrumb-section pt-0">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="breadscrumb-contain">
            <h2>Contact Us</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa-solid fa-house" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Breadcrumb Section End */}
  {/* Contact Box Section Start */}
  <section className="contact-box-section">
    <div className="container-fluid-lg">
      <div className="row g-lg-5 g-3">
        <div className="col-lg-6">
          <div className="left-sidebar-box">
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-image">
                  <img src={ContactImg} className="img-fluid blur-up lazyloaded" alt />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="contact-title">
                  <h3>Get In Touch</h3>
                </div>
                <div className="contact-detail">
                  <div className="row g-4">
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="contact-detail-box">
                        <div className="contact-icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <div className="contact-detail-title">
                          <h4>Phone</h4>
                        </div>
                        <div className="contact-detail-contain">
                          <p>(+1) 618 190 496</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="contact-detail-box">
                        <div className="contact-icon">
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="contact-detail-title">
                          <h4>Email</h4>
                        </div>
                        <div className="contact-detail-contain">
                          <p>geweto9420@chokxus.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="contact-detail-box">
                        <div className="contact-icon">
                          <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className="contact-detail-title">
                          <h4>London Office</h4>
                        </div>
                        <div className="contact-detail-contain">
                          <p>Cruce Casa de Postas 29</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="contact-detail-box">
                        <div className="contact-icon">
                          <i className="fa-solid fa-building" />
                        </div>
                        <div className="contact-detail-title">
                          <h4>Bournemouth Office</h4>
                        </div>
                        <div className="contact-detail-contain">
                          <p>Visitación de la Encina 22</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="title d-xxl-none d-block">
            <h2>Contact Us</h2>
          </div>
          <div className="right-sidebar-box">
            <div className="row">
              <div className="col-xxl-6 col-lg-12 col-sm-6">
                <div className="mb-md-4 mb-3 custom-form">
                  <label htmlFor="exampleFormControlInput" className="form-label">First Name</label>
                  <div className="custom-input">
                    <input type="text" className="form-control" id="exampleFormControlInput" placeholder="Enter First Name" />
                    <i className="fa-solid fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-12 col-sm-6">
                <div className="mb-md-4 mb-3 custom-form">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                  <div className="custom-input">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" />
                    <i className="fa-solid fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-12 col-sm-6">
                <div className="mb-md-4 mb-3 custom-form">
                  <label htmlFor="exampleFormControlInput2" className="form-label">Email Address</label>
                  <div className="custom-input">
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email Address" />
                    <i className="fa-solid fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-12 col-sm-6">
                <div className="mb-md-4 mb-3 custom-form">
                  <label htmlFor="exampleFormControlInput3" className="form-label">Phone Number</label>
                  <div className="custom-input">
                    <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="Enter Your Phone Number" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                      this.value.slice(0, this.maxLength);" />
                    <i className="fa-solid fa-mobile-screen-button" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-md-4 mb-3 custom-form">
                  <label htmlFor="exampleFormControlTextarea" className="form-label">Message</label>
                  <div className="custom-textarea">
                    <textarea className="form-control" id="exampleFormControlTextarea" placeholder="Enter Your Message" rows={6} defaultValue={""} />
                    <i className="fa-solid fa-message" />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-animation btn-md fw-bold ms-auto">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Box Section End */}
  {/* Map Section Start */}
  <section className="map-section">
    <div className="container-fluid p-0">
      <div className="map-box">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2994.3803116994895!2d55.29773782339708!3d25.222534631321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!3m2!1d25.2048493!2d55.2707828!4m0!5e1!3m2!1sen!2sin!4v1652217109535!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </section>
  {/* Map Section End */}
</div>

   
   
   </>
  )
}

export default Contack