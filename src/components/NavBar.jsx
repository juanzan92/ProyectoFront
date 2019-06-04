
import React from 'react';
import { Redirect} from 'react-router-dom';






class NavBar extends React.Component {
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
      }
    render() {
        return (
            <>
                <header className="navbar navbar-sticky">
                    {/* Search*/}
                    <form className="site-search" method="get">
                        <input type="text" name="site_search" placeholder="Type to search..." />
                        <div className="search-tools"><span className="clear-search">Clear</span><span className="close-search"><i className="icon-cross" /></span></div>
                    </form>
                    <div className="site-branding">
                        <div className="inner">
                            {/* Off-Canvas Toggle (#shop-categories)*/}<a className="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas" />
                            {/* Off-Canvas Toggle (#mobile-menu)*/}<a className="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas" />
                            {/* Site Logo*/}<a className="site-logo" href="index.html"><img src="/img/logo/logo.png" alt="Unishop" /></a>
                        </div>
                    </div>
                    {/* Main Navigation*/}
                    <nav className="site-menu">
                        <ul>
                            <li className="has-megamenu active"><a href="index.html"><span>Home</span></a>
                                <ul className="mega-menu">
                                    <li><a className="d-block img-thumbnail text-center navi-link" href="index.html"><img alt="Featured Products Slider" src="/img/mega-menu-home/01.jpg" />
                                        <h6 className="mt-3">Featured Products Slider</h6></a></li>
                                    <li><a className="d-block img-thumbnail text-center navi-link" href="home-featured-categories.html"><img alt="Featured Categories" src="/img/mega-menu-home/02.jpg" />
                                        <h6 className="mt-3">Featured Categories</h6></a></li>
                                    <li><a className="d-block img-thumbnail text-center navi-link" href="home-collection-showcase.html"><img alt="Products Collection Showcase" src="/img/mega-menu-home/03.jpg" />
                                        <h6 className="mt-3">Products Collection Showcase</h6></a></li>
                                    <li>
                                        <div className="img-thumbnail text-center"><img alt="More To Come. Stay Tuned!" src="/img/mega-menu-home/04.jpg" />
                                            <h6 className="mt-3">More To Come. Stay Tuned!</h6>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="shop-grid-ls.html"><span>Shop</span></a>
                                <ul className="sub-menu">
                                    <li><a href="shop-categories.html">Shop Categories</a></li>
                                    <li className="has-children"><a href="shop-grid-ls.html"><span>Shop Grid</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-grid-ls.html">Grid Left Sidebar</a></li>
                                            <li><a href="shop-grid-rs.html">Grid Right Sidebar</a></li>
                                            <li><a href="shop-grid-ns.html">Grid No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="shop-list-ls.html"><span>Shop List</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-list-ls.html">List Left Sidebar</a></li>
                                            <li><a href="shop-list-rs.html">List Right Sidebar</a></li>
                                            <li><a href="shop-list-ns.html">List No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-single.html">Single Product</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li className="has-children"><a href="checkout-address.html"><span>Checkout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="checkout-address.html">Address</a></li>
                                            <li><a href="checkout-shipping.html">Shipping</a></li>
                                            <li><a href="checkout-payment.html">Payment</a></li>
                                            <li><a href="checkout-review.html">Review</a></li>
                                            <li><a href="checkout-complete.html">Complete</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-megamenu"><a href="#"><span>Mega Menu</span></a>
                                <ul className="mega-menu">
                                    <li><span className="mega-menu-title">Top Categories</span>
                                        <ul className="sub-menu">
                                            <li><a href="#">Men's Shoes</a></li>
                                            <li><a href="#">Women's Shoes</a></li>
                                            <li><a href="#">Shirts and Tops</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Shorts and Pants</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="mega-menu-title">Specialty Shops</span>
                                        <ul className="sub-menu">
                                            <li><a href="#">Junior's Shop</a></li>
                                            <li><a href="#">Swim Shop</a></li>
                                            <li><a href="#">Athletic Shop</a></li>
                                            <li><a href="#">Outdoor Shop</a></li>
                                            <li><a href="#">Luxury Shop</a></li>
                                            <li><a href="#">Accessories Shop</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <section className="promo-box" style={{ backgroundImage: 'url(/img/banners/02.jpg)' }}><span className="overlay-dark" style={{ opacity: '.4' }} />
                                            <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                                                <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                                                <h3 className="text-bold text-light text-shadow">Sunglasses</h3><a className="btn btn-sm btn-primary" href="#">Shop Now</a>
                                            </div>
                                        </section>
                                    </li>
                                    <li>
                                        <section className="promo-box" style={{ backgroundImage: 'url(/img/banners/03.jpg)' }}>
                                            {/* Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.*/}<span className="overlay-dark" style={{ opacity: '.45' }} />
                                            <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                                                <h3 className="text-bold text-light text-shadow">Limited Offer</h3>
                                                <h4 className="text-light text-thin text-shadow">save up to 50%!</h4><a className="btn btn-sm btn-primary" href="#">Learn More</a>
                                            </div>
                                        </section>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="account-orders.html"><span>Account</span></a>
                                <ul className="sub-menu">
                                    <li><a href="account-login.html">Login / Register</a></li>
                                    <li><a href="account-password-recovery.html">Password Recovery</a></li>
                                    <li><a href="account-orders.html">Orders List</a></li>
                                    <li><a href="account-wishlist.html">Wishlist</a></li>
                                    <li><a href="account-profile.html">Profile Page</a></li>
                                    <li><a href="account-address.html">Contact / Shipping Address</a></li>
                                    <li><a href="account-tickets.html">My Tickets</a></li>
                                    <li><a href="account-single-ticket.html">Single Ticket</a></li>
                                </ul>
                            </li>
                            <li><a href="blog-rs.html"><span>Blog</span></a>
                                <ul className="sub-menu">
                                    <li className="has-children"><a href="blog-rs.html"><span>Blog Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-rs.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-ls.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-ns.html">Blog No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="blog-single-rs.html"><span>Single Post Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-single-rs.html">Post Right Sidebar</a></li>
                                            <li><a href="blog-single-ls.html">Post Left Sidebar</a></li>
                                            <li><a href="blog-single-ns.html">Post No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#"><span>Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="faq.html">Help / FAQ</a></li>
                                    <li><a href="order-tracking.html">Order Tracking</a></li>
                                    <li><a href="search-results.html">Search Results</a></li>
                                    <li><a href="404.html">404 Not Found</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a className="text-danger" href="docs/dev-setup.html">Documentation</a></li>
                                </ul>
                            </li>
                            <li className="has-megamenu"><a href="components/accordion.html"><span>Components</span></a>
                                <ul className="mega-menu">
                                    <li><span className="mega-menu-title">A - F</span>
                                        <ul className="sub-menu">
                                            <li><a href="components/accordion.html">Accordion</a></li>
                                            <li><a href="components/alerts.html">Alerts</a></li>
                                            <li><a href="components/buttons.html">Buttons</a></li>
                                            <li><a href="components/cards.html">Cards</a></li>
                                            <li><a href="components/carousel.html">Carousel</a></li>
                                            <li><a href="components/countdown.html">Countdown</a></li>
                                            <li><a href="components/forms.html">Forms</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="mega-menu-title">G - M</span>
                                        <ul className="sub-menu">
                                            <li><a href="components/gallery.html">Gallery</a></li>
                                            <li><a href="components/google-maps.html">Google Maps</a></li>
                                            <li><a href="components/images.html">Images &amp; Figures</a></li>
                                            <li><a href="components/list-group.html">List Group</a></li>
                                            <li><a href="components/market-social-buttons.html">Market &amp; Social Buttons</a></li>
                                            <li><a href="components/media.html">Media Object</a></li>
                                            <li><a href="components/modal.html">Modal</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="mega-menu-title">P - T</span>
                                        <ul className="sub-menu">
                                            <li><a href="components/pagination.html">Pagination</a></li>
                                            <li><a href="components/pills.html">Pills</a></li>
                                            <li><a href="components/progress-bars.html">Progress Bars</a></li>
                                            <li><a href="components/shop-items.html">Shop Items</a></li>
                                            <li><a href="components/spinners.html">Spinners</a></li>
                                            <li><a href="components/steps.html">Steps</a></li>
                                            <li><a href="components/tables.html">Tables</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="mega-menu-title">T - W</span>
                                        <ul className="sub-menu">
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
                            </li>
                        </ul>
                    </nav>
                    {/* Toolbar*/}
                    <div className="toolbar">
                        <div className="inner">
                            <div className="tools">
                                <div className="search"><i className="icon-search" /></div>
                                <div className="account"><a href="account-orders.html" /><i className="icon-head" />
                                    <ul className="toolbar-dropdown">
                                        <li className="sub-menu-user">
                                            <div className="user-ava"><img src="/img/account/user-ava-sm.jpg" alt="Daniel Adams" />
                                            </div>
                                            <div className="user-info">
                                                <h6 className="user-name">Daniel Adams</h6><span className="text-xs text-muted">290 Reward points</span>
                                            </div>
                                        </li>
                                        <li><a href="account-profile.html">My Profile</a></li>
                                        <li><a href="account-orders.html">Orders List</a></li>
                                        <li><a href="account-wishlist.html">Wishlist</a></li>
                                        <li className="sub-menu-separator" />
                                        <li><a href="#"> <i className="icon-unlock" />Logout</a></li>
                                    </ul>
                                </div>
                                <div className="btn btn-primary" href="/login"><a className="w-100" href="/login" /><i className="icon-bag" />LOG IN</div>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )

    }
}

export default NavBar 
