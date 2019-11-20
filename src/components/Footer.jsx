import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Contact Info*/}
                <section className="widget widget-light-skin">
                  <h3 className="widget-title">Get In Touch With Us</h3>
                  <p className="text-white">Phone: 00 33 169 7720</p>
                  <ul className="list-unstyled text-sm text-white">
                    <li>
                      <span className="opacity-50">Monday-Friday:</span>9.00 am
                      - 8.00 pm
                    </li>
                    <li>
                      <span className="opacity-50">Saturday:</span>10.00 am -
                      6.00 pm
                    </li>
                  </ul>
                  <p>
                    <a className="navi-link-light" href="#">
                      support@smarket.com
                    </a>
                  </p>
                  <a
                    className="social-button shape-circle sb-facebook sb-light-skin"
                    href="#">
                    <i className="socicon-facebook" />
                  </a>
                  <a
                    className="social-button shape-circle sb-twitter sb-light-skin"
                    href="#">
                    <i className="socicon-twitter" />
                  </a>
                  <a
                    className="social-button shape-circle sb-instagram sb-light-skin"
                    href="#">
                    <i className="socicon-instagram" />
                  </a>
                  <a
                    className="social-button shape-circle sb-google-plus sb-light-skin"
                    href="#">
                    <i className="socicon-googleplus" />
                  </a>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Mobile App Buttons*/}
                <section className="widget widget-light-skin">
                  <h3 className="widget-title">Our Mobile App</h3>
                  <a
                    className="market-button apple-button mb-light-skin"
                    href="#">
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">App Store</span>
                  </a>
                  <a
                    className="market-button google-button mb-light-skin"
                    href="#">
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">Google Play</span>
                  </a>
                  <a
                    className="market-button windows-button mb-light-skin"
                    href="#">
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">Windows Store</span>
                  </a>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* About Us*/}
                <section className="widget widget-links widget-light-skin">
                  <h3 className="widget-title">About Us</h3>
                  <ul>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">About smarket</a>
                    </li>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Account / Shipping Info*/}
                <section className="widget widget-links widget-light-skin">
                  <h3 className="widget-title">Account &amp; Shipping Info</h3>
                  <ul>
                    <li>
                      <a href="#">Your Account</a>
                    </li>
                    <li>
                      <a href="#">Shipping Rates &amp; Policies</a>
                    </li>
                    <li>
                      <a href="#">Refunds &amp; Replacements</a>
                    </li>
                    <li>
                      <a href="#">Taxes</a>
                    </li>
                    <li>
                      <a href="#">Delivery Info</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <hr className="hr-light mt-2 margin-bottom-2x" />
            <div className="row">
              <div className="col-md-7 padding-bottom-1x">
                {/* Payment Methods*/}
                <div className="margin-bottom-1x" style={{ maxWidth: "615px" }}>
                  <img src="/img/payment_methods.png" alt="Payment Methods" />
                </div>
              </div>
              <div className="col-md-5 padding-bottom-1x">
                <div className="margin-top-1x hidden-md-up" />
                {/*Subscription*/}
                <form
                  className="subscribe-form"
                  action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=1194bb7544"
                  method="post"
                  target="_blank"
                  noValidate>
                  <div className="clearfix">
                    <div className="input-group input-light">
                      <input
                        className="form-control"
                        type="email"
                        name="EMAIL"
                        placeholder="Your e-mail"
                      />
                      <span className="input-group-addon">
                        <i className="icon-mail" />
                      </span>
                    </div>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true">
                      <input
                        type="text"
                        name="b_c7103e2c981361a6639545bd5_1194bb7544"
                        tabIndex={-1}
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-check" />
                    </button>
                  </div>
                  <span className="form-text text-sm text-white opacity-50">
                    Subscribe to our Newsletter to receive early discount
                    offers, latest news, sales and promo information.
                  </span>
                </form>
              </div>
            </div>
            {/* Copyright*/}
            <p className="footer-copyright">
              © Derechos Reservados. Hecho con &nbsp;
              <i className="icon-heart text-danger" /> &nbsp;S-Market Team
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
