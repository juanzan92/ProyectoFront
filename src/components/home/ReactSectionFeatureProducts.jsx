import React from "react";

class ReactSectionFeatureProducts extends React.Component {
  render() {
    return (
      <>
        <section className="container padding-top-3x padding-bottom-3x">
          <h3 className="text-center mb-30">Productos Destacados</h3>
          <div
            className="owl-carousel"
            data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <div className="product-badge text-danger">22% Off</div>
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/09.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Rocket Dog</a>
                </h3>
                <h4 className="product-price">
                  <del>$44.95</del>$34.99
                </h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <div className="rating-stars">
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star" />
                </div>
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/03.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Oakley Kickback</a>
                </h3>
                <h4 className="product-price">$155.00</h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/12.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Vented Straw Fedora</a>
                </h3>
                <h4 className="product-price">$49.50</h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <div className="rating-stars">
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                  <i className="icon-star filled" />
                </div>
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/11.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Top-Sider Fathom</a>
                </h3>
                <h4 className="product-price">$90.00</h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/04.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Waist Leather Belt</a>
                </h3>
                <h4 className="product-price">$47.00</h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="grid-item">
              <div className="product-card">
                <div className="product-badge text-danger">50% Off</div>
                <a className="product-thumb" href="shop-single.html">
                  <img src="/img/shop/products/01.jpg" alt="Product" />
                </a>
                <h3 className="product-title">
                  <a href="shop-single.html">Unionbay Park</a>
                </h3>
                <h4 className="product-price">
                  <del>$99.99</del>$49.99
                </h4>
                <div className="product-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm btn-wishlist"
                    data-toggle="tooltip"
                    title="Whishlist">
                    <i className="icon-heart" />
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-toast
                    data-toast-type="success"
                    data-toast-position="topRight"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Product"
                    data-toast-message="successfuly added to cart!">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default ReactSectionFeatureProducts;
