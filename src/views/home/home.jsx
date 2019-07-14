import React from 'react';

//componentes
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import TopBar from '../../components/TopBar';
import { async } from 'q';
import wrapper from '../../components/Wrapper';
//servicio
const Ragnar = require('../../service/apiService');


class index extends React.Component {

  state = {
    poc: null
  };

  fetchPOC = () => {
    const data = Ragnar.makePOC;
    console.log(data);
    this.setState({
      poc: data
    })
  }


  render() {
    return (
      <div>
        {/* Body*/}
        {/* Off-Canvas Category Menu*/}
        <div className="offcanvas-container" id="shop-categories">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title">Shop Categories</h3>
          </div>
          <nav className="offcanvas-menu">
            <ul className="menu">
              <li className="has-children"><span><a href="#">Men's Shoes</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Sneakers</a></li>
                  <li><a href="#">Loafers</a></li>
                  <li><a href="#">Boat Shoes</a></li>
                  <li><a href="#">Sandals</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Women's Shoes</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Sandals</a></li>
                  <li><a href="#">Flats</a></li>
                  <li><a href="#">Sneakers</a></li>
                  <li><a href="#">Heels</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Men's Clothing</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Shirts &amp; Tops</a></li>
                  <li><a href="#">Pants</a></li>
                  <li><a href="#">Jackets</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Women's Clothing</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Dresses</a></li>
                  <li><a href="#">Shirts &amp; Tops</a></li>
                  <li><a href="#">Shorts</a></li>
                  <li><a href="#">Swimwear</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Kid's Shoes</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Boots</a></li>
                  <li><a href="#">Sandals</a></li>
                  <li><a href="#">Crib Shoes</a></li>
                  <li><a href="#">Loafers</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Bags</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Handbags</a></li>
                  <li><a href="#">Backpacks</a></li>
                  <li><a href="#">Luggage</a></li>
                  <li><a href="#">Wallets</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Accessories</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="#">Sunglasses</a></li>
                  <li><a href="#">Hats</a></li>
                  <li><a href="#">Watches</a></li>
                  <li><a href="#">Jewelry</a></li>
                  <li><a href="#">Belts</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* Off-Canvas Mobile Menu*/}
        <div className="offcanvas-container" id="mobile-menu"><a className="account-link" href="account-orders.html">
          <div className="user-ava"><img src="img/account/user-ava-md.jpg" alt="Daniel Adams" />
          </div>
          <div className="user-info">
            <h6 className="user-name">Daniel Adams</h6><span className="text-sm text-white opacity-60">290 Reward points</span>
          </div></a>
          <nav className="offcanvas-menu">
            <ul className="menu">
              <li className="has-children active"><span><a href="index.html"><span>Home</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li className="active"><a href="index.html">Featured Products Slider</a></li>
                  <li><a href="home-featured-categories.html">Featured Categories</a></li>
                  <li><a href="home-collection-showcase.html">Products Collection Showcase</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="shop-grid-ls.html"><span>Shop</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="shop-categories.html">Shop Categories</a></li>
                  <li className="has-children"><span><a href="shop-grid-ls.html"><span>Shop Grid</span></a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="shop-grid-ls.html">Grid Left Sidebar</a></li>
                      <li><a href="shop-grid-rs.html">Grid Right Sidebar</a></li>
                      <li><a href="shop-grid-ns.html">Grid No Sidebar</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="shop-list-ls.html"><span>Shop List</span></a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="shop-list-ls.html">List Left Sidebar</a></li>
                      <li><a href="shop-list-rs.html">List Right Sidebar</a></li>
                      <li><a href="shop-list-ns.html">List No Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="shop-single.html">Single Product</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#">Categories</a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li className="has-children"><span><a href="#">Men's Shoes</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Sneakers</a></li>
                      <li><a href="#">Loafers</a></li>
                      <li><a href="#">Boat Shoes</a></li>
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="#">Women's Shoes</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">Flats</a></li>
                      <li><a href="#">Sneakers</a></li>
                      <li><a href="#">Heels</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="#">Men's Clothing</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Shirts &amp; Tops</a></li>
                      <li><a href="#">Pants</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="#">Women's Clothing</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Dresses</a></li>
                      <li><a href="#">Shirts &amp; Tops</a></li>
                      <li><a href="#">Shorts</a></li>
                      <li><a href="#">Swimwear</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="#">Bags</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Handbags</a></li>
                      <li><a href="#">Backpacks</a></li>
                      <li><a href="#">Luggage</a></li>
                      <li><a href="#">Wallets</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="#">Accessories</a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="#">Sunglasses</a></li>
                      <li><a href="#">Hats</a></li>
                      <li><a href="#">Watches</a></li>
                      <li><a href="#">Jewelry</a></li>
                      <li><a href="#">Belts</a></li>
                      <li><a href="#">View All</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children"><span><a href="account-orders.html"><span>Account</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="account-login.html">Login / Register</a></li>
                  <li><a href="account-password-recovery.html">Password Recovery</a></li>
                  <li><a href="account-orders.html">Orders List</a></li>
                  <li><a href="account-wishlist.html">Wishlist</a></li>
                  <li><a href="account-profile.html">Profile Page</a></li>
                  <li><a href="account-address.html">Contact / Shipping Address</a></li>
                  <li><a href="account-open-ticket.html">Open Ticket</a></li>
                  <li><a href="account-tickets.html">My Tickets</a></li>
                  <li><a href="account-single-ticket.html">Single Ticket</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="blog-rs.html"><span>Blog</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li className="has-children"><span><a href="blog-rs.html"><span>Blog Layout</span></a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="blog-rs.html">Blog Right Sidebar</a></li>
                      <li><a href="blog-ls.html">Blog Left Sidebar</a></li>
                      <li><a href="blog-ns.html">Blog No Sidebar</a></li>
                    </ul>
                  </li>
                  <li className="has-children"><span><a href="blog-single-rs.html"><span>Single Post Layout</span></a><span className="sub-menu-toggle" /></span>
                    <ul className="offcanvas-submenu">
                      <li><a href="blog-single-rs.html">Post Right Sidebar</a></li>
                      <li><a href="blog-single-ls.html">Post Left Sidebar</a></li>
                      <li><a href="blog-single-ns.html">Post No Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children"><span><a href="#"><span>Pages</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="mobile-app.html">Unishop Mobile App</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="faq.html">Help / FAQ</a></li>
                  <li><a href="order-tracking.html">Order Tracking</a></li>
                  <li><a href="search-results.html">Search Results</a></li>
                  <li><a href="404.html">404</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a className="text-danger" href="docs/dev-setup.html">Documentation</a></li>
                </ul>
              </li>
              <li className="has-children"><span><a href="components/accordion.html"><span>Components</span></a><span className="sub-menu-toggle" /></span>
                <ul className="offcanvas-submenu">
                  <li><a href="components/accordion.html">Accordion</a></li>
                  <li><a href="components/alerts.html">Alerts</a></li>
                  <li><a href="components/buttons.html">Buttons</a></li>
                  <li><a href="components/cards.html">Cards</a></li>
                  <li><a href="components/carousel.html">Carousel</a></li>
                  <li><a href="components/countdown.html">Countdown</a></li>
                  <li><a href="components/forms.html">Forms</a></li>
                  <li><a href="components/gallery.html">Gallery</a></li>
                  <li><a href="components/google-maps.html">Google Maps</a></li>
                  <li><a href="components/images.html">Images &amp; Figures</a></li>
                  <li><a href="components/list-group.html">List Group</a></li>
                  <li><a href="components/market-social-buttons.html">Market &amp; Social Buttons</a></li>
                  <li><a href="components/media.html">Media Object</a></li>
                  <li><a href="components/modal.html">Modal</a></li>
                  <li><a href="components/pagination.html">Pagination</a></li>
                  <li><a href="components/pills.html">Pills</a></li>
                  <li><a href="components/progress-bars.html">Progress Bars</a></li>
                  <li><a href="components/shop-items.html">Shop Items</a></li>
                  <li><a href="components/steps.html">Steps</a></li>
                  <li><a href="components/tables.html">Tables</a></li>
                  <li><a href="components/tabs.html">Tabs</a></li>
                  <li><a href="components/team.html">Team</a></li>
                  <li><a href="components/toasts.html">Toast Notifications</a></li>
                  <li><a href="components/tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                  <li><a href="components/typography.html">Typography</a></li>
                  <li><a href="components/video-player.html">Video Player</a></li>
                  <li><a href="components/widgets.html">Widgets</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* Topbar*/}
        {/* Off-Canvas Wrapper*/}
        <div className="offcanvas-wrapper">
          {/* Page Content*/}
          {/* Main Slider*/}
          <section className="hero-slider" style={{ backgroundImage: 'url(/img/hero-slider/main-bg.jpg)' }}>
            <div className="owl-carousel large-controls dots-inside" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">
              <div className="item">
                <div className="container padding-top-3x">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                      <div className="from-bottom"><img className="d-inline-block w-150 mb-4" src="/img/hero-slider/logo02.png" alt="Puma" />
                        <div className="h2 text-body text-normal mb-2 pt-1">Puma Backpacks Collection</div>
                        <div className="h2 text-body text-normal mb-4 pb-1">starting at <span className="text-bold">$37.99</span></div>
                      </div><a className="btn btn-primary scale-up delay-1" href="shop-grid-ls.html">View Offers</a>
                    </div>
                    <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="/img/hero-slider/02.png" alt="Puma Backpack" /></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container padding-top-3x">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                      <div className="from-bottom"><img className="d-inline-block w-200 mb-4" src="/img/hero-slider/logo01.png" alt="Converse" />
                        <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                        <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                      </div><a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                    </div>
                    <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="/img/hero-slider/01.png" alt="Chuck Taylor All Star II" /></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container padding-top-3x">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                      <div className="from-bottom"><img className="d-inline-block mb-4" src="/img/hero-slider/logo03.png" style={{ width: '125px' }} alt="Motorola" />
                        <div className="h2 text-body text-normal mb-2 pt-1">Smart Watch Moto 360 2nd</div>
                        <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$299.99</span></div>
                      </div><a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                    </div>
                    <div className="col-md-6 padding-bottom-2x mb-3"><img className="d-block mx-auto" src="/img/hero-slider/03.png" alt="Moto 360" /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Top Categories*/}
          <section className="container padding-top-3x">
            <h3 className="text-center mb-30">Top Categories</h3>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="card mb-30"><a className="card-img-tiles" href="shop-grid-ls.html">
                  <div className="inner">
                    <div className="main-img"><img src="/img/shop/categories/01.jpg" alt="Category" /></div>
                    <div className="thumblist"><img src="/img/shop/categories/02.jpg" alt="Category" /><img src="/img/shop/categories/03.jpg" alt="Category" /></div>
                  </div></a>
                  <div className="card-body text-center">
                    <h4 className="card-title">Clothing</h4>
                    <p className="text-muted">Starting from $49.99</p><a className="btn btn-outline-primary btn-sm" href="shop-grid-ls.html">View Products</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-30"><a className="card-img-tiles" href="shop-grid-ls.html">
                  <div className="inner">
                    <div className="main-img"><img src="/img/shop/categories/04.jpg" alt="Category" /></div>
                    <div className="thumblist"><img src="/img/shop/categories/05.jpg" alt="Category" /><img src="/img/shop/categories/06.jpg" alt="Category" /></div>
                  </div></a>
                  <div className="card-body text-center">
                    <h4 className="card-title">Shoes</h4>
                    <p className="text-muted">Starting from $56.00</p><a className="btn btn-outline-primary btn-sm" href="shop-grid-ls.html">View Products</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card mb-30"><a className="card-img-tiles" href="shop-grid-ls.html">
                  <div className="inner">
                    <div className="main-img"><img src="/img/shop/categories/07.jpg" alt="Category" /></div>
                    <div className="thumblist"><img src="/img/shop/categories/08.jpg" alt="Category" /><img src="/img/shop/categories/09.jpg" alt="Category" /></div>
                  </div></a>
                  <div className="card-body text-center">
                    <h4 className="card-title">Bags</h4>
                    <p className="text-muted">Starting from $27.00</p><a className="btn btn-outline-primary btn-sm" href="shop-grid-ls.html">View Products</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center"><a className="btn btn-outline-secondary margin-top-none" href="shop-categories.html">All Categories</a></div>
          </section>
          {/* Promo #1*/}
          <section className="container-fluid padding-top-3x">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 mb-30">
                <div className="rounded bg-faded position-relative padding-top-3x padding-bottom-3x"><span className="product-badge text-danger" style={{ top: '24px', left: '24px' }}>Limited Offer</span>
                  <div className="text-center">
                    <h3 className="h2 text-normal mb-1">New</h3>
                    <h2 className="display-2 text-bold mb-2">Sunglasses</h2>
                    <h4 className="h3 text-normal mb-4">collection at discounted price!</h4>
                    <div className="countdown mb-3" data-date-time="12/30/2019 12:00:00">
                      <div className="item">
                        <div className="days">00</div><span className="days_ref">Days</span>
                      </div>
                      <div className="item">
                        <div className="hours">00</div><span className="hours_ref">Hours</span>
                      </div>
                      <div className="item">
                        <div className="minutes">00</div><span className="minutes_ref">Mins</span>
                      </div>
                      <div className="item">
                        <div className="seconds">00</div><span className="seconds_ref">Secs</span>
                      </div>
                    </div><br /><a className="btn btn-primary margin-bottom-none" href="#">View Offers</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 mb-30" style={{ minHeight: '270px' }}>
                <div className="img-cover rounded" style={{ backgroundImage: 'url(/img/banners/home01.jpg)' }} />
              </div>
            </div>
          </section>
          {/* Promo #2*/}
          <section className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12">
                <div className="fw-section rounded padding-top-4x padding-bottom-4x" style={{ backgroundImage: 'url(/img/banners/home02.jpg)' }}><span className="overlay rounded" style={{ opacity: '.35' }} />
                  <div className="text-center">
                    <h3 className="display-4 text-normal text-white text-shadow mb-1">Old Collection</h3>
                    <h2 className="display-2 text-bold text-white text-shadow">HUGE SALE!</h2>
                    <h4 className="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">at our outlet stores</h4><br /><a className="btn btn-primary margin-bottom-none" href="contacts.html">Locate Stores</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Featured Products Carousel*/}
          <section className="container padding-top-3x padding-bottom-3x">
            <h3 className="text-center mb-30">Featured Products</h3>
            <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="product-badge text-danger">22% Off</div><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/09.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Rocket Dog</a></h3>
                  <h4 className="product-price">
                    <del>$44.95</del>$34.99
                    </h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                  </div><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/03.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Oakley Kickback</a></h3>
                  <h4 className="product-price">$155.00</h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card"><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/12.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Vented Straw Fedora</a></h3>
                  <h4 className="product-price">$49.50</h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" />
                  </div><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/11.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Top-Sider Fathom</a></h3>
                  <h4 className="product-price">$90.00</h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card"><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/04.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Waist Leather Belt</a></h3>
                  <h4 className="product-price">$47.00</h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Product*/}
              <div className="grid-item">
                <div className="product-card">
                  <div className="product-badge text-danger">50% Off</div><a className="product-thumb" href="shop-single.html"><img src="/img/shop/products/01.jpg" alt="Product" /></a>
                  <h3 className="product-title"><a href="shop-single.html">Unionbay Park</a></h3>
                  <h4 className="product-price">
                    <del>$99.99</del>$49.99
                    </h4>
                  <div className="product-buttons">
                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart" /></button>
                    <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Product Widgets*/}
          <section className="container padding-bottom-2x">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="widget widget-featured-products">
                  <h3 className="widget-title">Top Sellers</h3>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/01.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/03.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Vented Straw Fedora</a></h4><span className="entry-meta">$49.50</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/04.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Big Wordmark Tote</a></h4><span className="entry-meta">$29.99</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="widget widget-featured-products">
                  <h3 className="widget-title">New Arrivals</h3>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/05.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Union Park</a></h4><span className="entry-meta">$49.99</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/06.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Cole Haan Crossbody</a></h4><span className="entry-meta">$200.00</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/07.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Skagen Holst Watch</a></h4><span className="entry-meta">$145.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="widget widget-featured-products">
                  <h3 className="widget-title">Best Rated</h3>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/08.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Jordan's City Hoodie</a></h4><span className="entry-meta">$65.00</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/09.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Palace Shell Track Jacket</a></h4><span className="entry-meta">$36.99</span>
                    </div>
                  </div>
                  {/* Entry*/}
                  <div className="entry">
                    <div className="entry-thumb"><a href="shop-single.html"><img src="/img/shop/widget/10.jpg" alt="Product" /></a></div>
                    <div className="entry-content">
                      <h4 className="entry-title"><a href="shop-single.html">Off the Shoulder Top</a></h4><span className="entry-meta">$128.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular Brands*/}
          <section className="bg-faded padding-top-3x padding-bottom-3x">
            <div className="container">
              <h3 className="text-center mb-30 pb-2">Popular Brands</h3>
              <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }"><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/01.png" alt="Adidas" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/02.png" alt="Brooks" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/03.png" alt="Valentino" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/04.png" alt="Nike" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/05.png" alt="Puma" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/06.png" alt="New Balance" /><img className="d-block w-110 opacity-75 m-auto" src="/img/brands/07.png" alt="Dior" /></div>
            </div>
          </section>
          {/* Services*/}
          <section className="container padding-top-3x padding-bottom-2x">
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="/img/services/01.png" alt="Shipping" />
                <h6>Free Worldwide Shipping</h6>
                <p className="text-muted margin-bottom-none">Free shipping for all orders over $100</p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="/img/services/02.png" alt="Money Back" />
                <h6>Money Back Guarantee</h6>
                <p className="text-muted margin-bottom-none">We return money within 30 days</p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="/img/services/03.png" alt="Support" />
                <h6>24/7 Customer Support</h6>
                <p className="text-muted margin-bottom-none">Friendly 24/7 customer support</p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="/img/services/04.png" alt="Payment" />
                <h6>Secure Online Payment</h6>
                <p className="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
              </div>
            </div>
          </section>
          {/* Site Footer*/}
        </div>
        {/* Back To Top Button*/}<a className="scroll-to-top-btn" href="#"><i className="icon-arrow-up" /></a>
        {/* Backdrop*/}
        <div className="site-backdrop" />
        {/* JavaScript (jQuery) libraries, plugins and custom scripts*/}


      </div>
    );
  }
};

export default wrapper(index);