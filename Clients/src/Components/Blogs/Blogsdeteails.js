import React from 'react'



import blog1 from '../../assets/images/inner-page/blog/1.jpg'
import blog2 from '../../assets/images/inner-page/blog/2.jpg'
import blog3 from '../../assets/images/inner-page/blog/3.jpg'
import blog4 from '../../assets/images/inner-page/blog/4.jpg'


import product23 from '../../assets/images/vegetable/product/23.png'
// import product24 from '../../assets/images/images/vegetable/product/24.png'
import product26 from '../../assets/images/vegetable/product/26.png'

import user1 from '../../assets/images/inner-page/user/1.jpg'
import user2 from '../../assets/images/inner-page/user/2.jpg'
import user3 from '../../assets/images/inner-page/user/3.jpg'



function Blogsdeteails() {
  return (
  <>
  
  
  <div>
  {/* Breadcrumb Section Start */}
  {/* <section className="breadscrumb-section pt-0">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="breadscrumb-contain">
            <h2>Blog Details Page</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa-solid fa-house" />
                  </a>
                </li>
                <li className="breadcrumb-item" aria-current="page">Blog</li>
                <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Breadcrumb Section End */}
  {/* Blog Details Section Start */}
  <section className="blog-section section-b-space">
    <div className="container-fluid-lg">
      <div className="row g-sm-4 g-3">
        <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
          <div className="left-sidebar-box">
            <div className="left-search-box">
              <div className="search-box">
                <input type="search" className="form-control" id="exampleFormControlInput4" placeholder="Search...." />
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
                        {/* <li>
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
                        </li> */}
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
                          <a href='#'>Fruit Cutting</a>
                        </li>
                        <li>
                          <a href='#'>Meat</a>
                        </li>
                        <li>
                          <a href='#'>organic</a>
                        </li>
                        <li>
                          <a href='#'>cake</a>
                        </li>
                        <li>
                          <a href='#'>pick fruit</a>
                        </li>
                        <li>
                          <a href='#'>backery</a>
                        </li>
                        <li>
                          <a href='#'>organix food</a>
                        </li>
                        <li>
                          <a href='#'>Most Expensive Fruit</a>
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
                            <img src={product26} className=" lazyload" alt />
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
        <div className="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
          <div className="blog-detail-image rounded-3 mb-4">
            <img src={blog1} className="bg-img lazyload" width={"700px"} height="400px"  />
            <div className="blog-image-contain">
              <ul className="contain-list">
                <li>backpack</li>
                <li>life style</li>
                <li>organic</li>
              </ul>
              <h2>Agriculture Conference Harvest 2022 in Paris</h2>
              <ul className="contain-comment-list">
                <li>
                  <div className="user-list">
                    <i data-feather="user" />
                    <span>Caroline</span>
                  </div>
                </li>
                <li>
                  <div className="user-list">
                    <i data-feather="calendar" />
                    <span>April 19, 2022</span>
                  </div>
                </li>
                <li>
                  <div className="user-list">
                    <i data-feather="message-square" />
                    <span>82 Comment</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-detail-contain">
            <p><span className="first">S</span> hotgun approach message the initiative so can I just chime in
              on that one. Make sure to include in your wheelhouse bells and whistles, and touch base
              slow-walk our commitment nor what's the status on the deliverables for eow?. Create spaces
              to explore whatâ€™s next commitment to the cause , or UI, for get buy-in but draw a line in
              the sand, and pig in a python we've got kpis for that. Message the initiative value prop,
              please use "solutionise" instead of solution ideas! :) i am dead inside. Quick sync
              4-blocker. Driving the initiative forward flesh that out.</p>
            <p>Let's unpack that later everyone thinks the soup tastes better after theyâ€™ve pissed in it
              pivot, re-inventing the wheel, and it's not hard guys. Market-facing pushback back of the
              net, for pro-sumer software let's see if we can dovetail these two projects but turn the
              crank for they have downloaded gmail and seems to be working for now. This is not the hill i
              want to die on you better eat a reality sandwich before you walk back in that boardroom land
              the plane yet exposing new ways to evolve our design language design thinking nor poop, so
              can you put it into a banner that is not alarming, but eye catching and not too giant. That
              is a good problem to have dog and pony show we're ahead of the curve on that one.</p>
            <p> Waste of
              resources can you run this by clearance? hot johnny coming through driving the
              initiative
              forward our competitors are jumping the shark. Unlock meaningful moments of relaxation.
              Copy
              and paste from stack overflow a tentative event rundown is attached for your reference,
              including other happenings on the day you are most welcome to join us beforehand for a
              light
              lunch we would also like to invite you to other activities on the day, including the
              interim
              and closing panel discussions on the intersection of businesses and social innovation,
              and
              on building a stronger social innovation eco-system respectively what are the
              expectations,
              on-brand but completeley fresh we can't hear you.</p>
            <div className="blog-details-quote">
              <h3>Adipisicing elit Qui ipsam natus aspernatur quaerat impedit eveniet ipsum dolor</h3>
              <h5>- Denny Dose</h5>
            </div>
            <p>Agile currying favour pulling teeth collaboration through advanced technlogy. Everyone thinks
              the soup tastes better after theyâ€™ve pissed in it can you put it on my calendar?.
              Low-hanging fruit. Data-point blue sky yet first-order optimal strategies shotgun approach.
              Land it in region. Idea shower prairie dogging a set of certitudes based on deductions
              founded on false premise nor three-martini lunch. Baseline. Run it up the flag pole big boy
              pants so game-plan, and it just needs more cowbell pixel pushing, but we need to make the
              new version clean and sexy. Back of the net we need a recap by eod, cob or whatever comes
              first for we need evergreen content.</p>
            <p className="mb-0">We need to harvest synergy effects land it in region nor time to open the
              kimono, but we need to touch base off-line before we fire the new ux experience. Moving the
              goalposts. Lean into that problem we need to get all stakeholders up to speed and in the
              right place. Get all your ducks in a row this proposal is a win-win situation which will
              cause a stellar paradigm shift, and produce a multi-fold increase in deliverables or dunder
              mifflin for high-level nor gain alignment into the weeds. Open door policy. Goalposts
              player-coach but quick win, so effort made was a lot for game-plan in an ideal world
              commitment to the cause . Service as core &amp;innovations as power makes our brand meeting
              assassin core competencies run it up the flagpole, ping the boss and circle back but zoom
              meeting at 2:30 today.</p>
          </div>
          <div className="comment-box overflow-hidden">
            <div className="leave-title">
              <h3>Comments</h3>
            </div>
            <div className="user-comment-box">
              <ul>
                <li>
                  <div className="user-box border-color">
                    <div className="reply-button">
                      <i className="fa-solid fa-reply" />
                      <span className="theme-color">Reply</span>
                    </div>
                    <div className="user-iamge">
                      <img src={user1} className="img-fluid  lazyload" alt />
                      <div className="user-name">
                        <h6>30 Jan, 2022</h6>
                        <h5 className="text-content">Glenn Greer</h5>
                      </div>
                    </div>
                    <div className="user-contain">
                      <p>"This proposal is a win-win situation which will cause a stellar paradigm
                        shift, and produce a multi-fold increase in deliverables a better
                        understanding"</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="user-box border-color">
                    <div className="reply-button">
                      <i className="fa-solid fa-reply" />
                      <span className="theme-color">Reply</span>
                    </div>
                    <div className="user-iamge">
                      <img src={user2} className="img-fluid  lazyload" alt />
                      <div className="user-name">
                        <h6>30 Jan, 2022</h6>
                        <h5 className="text-content">Glenn Greer</h5>
                      </div>
                    </div>
                    <div className="user-contain">
                      <p>"Yeah, I think maybe you do. Right, gimme a Pepsi free. Of course, the
                        Enchantment Under The Sea Dance they're supposed to go to this, that's
                        where they kiss for the first time. You'll find out. Are you sure about
                        this storm?"</p>
                    </div>
                  </div>
                </li>
                <li className="li-padding">
                  <div className="user-box">
                    <div className="reply-button">
                      <i className="fa-solid fa-reply" />
                      <span className="theme-color">Reply</span>
                    </div>
                    <div className="user-iamge">
                      <img src={user3} className="img-fluid  lazyload" alt />
                      <div className="user-name">
                        <h6>30 Jan, 2022</h6>
                        <h5 className="text-content">Glenn Greer</h5>
                      </div>
                    </div>
                    <div className="user-contain">
                      <p>"Cheese slices goat cottage cheese roquefort cream cheese pecorino cheesy
                        feet when the cheese comes out everybody's happy"</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="leave-box">
            <div className="leave-title mt-0">
              <h3>Leave Comment</h3>
            </div>
            <div className="leave-comment">
              <div className="comment-notes">
                <p className="text-content mb-4">Your email address will not be published. Required fields
                  are marked</p>
              </div>
              <div className="row g-3">
                <div className="col-xxl-4 col-lg-12 col-sm-6">
                  <div className="blog-input">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-12 col-sm-6">
                  <div className="blog-input">
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email Address" />
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-12 col-sm-6">
                  <div className="blog-input">
                    <input type="url" className="form-control" id="exampleFormControlInput3" placeholder="Enter URL" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-input">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Comments" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="form-check d-flex mt-4 p-0">
                <input className="checkbox_animated" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label text-content" htmlFor="flexCheckDefault">
                  <span className="color color-1"> Save my name, email, and website in this
                    browser for the next time I comment.</span>
                </label>
              </div>
              <button className="btn btn-animation ms-xxl-auto mt-xxl-0 mt-3 btn-md fw-bold">Post
                Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
</div>

  
  
  
  
  </>
  )
}

export default Blogsdeteails