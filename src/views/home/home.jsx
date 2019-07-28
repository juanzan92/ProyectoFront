import React from "react";

//componentes
import wrapper from "../../components/Wrapper";
import MainSlider from "../../components/home/Home-Main-Slider";
import ReactSectionTopCategories from "../../components/home/ReactSectionTopCategories";
import ReactSectionOfert from "../../components/home/ReactSectionOfert";

class index extends React.Component {
  constructor(props) {
    super();
    this.state = {
      poc: null,
      categories: [],
      mainSliderItems: [],
      topCategories: [],
      featureItem: null,
      isLoading: true
    };
  }

  componentDidMount() {
    this.buscarItemTest();
    this.fetchCategories();
  }

  fetchCategories() {
    const url =
      "https://kusmq1it9k.execute-api.us-east-1.amazonaws.com/prod/categories/";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.getTopCategories(myJson);
      })
      .catch(e => console.log(e));
  }

  buscarItemTest() {
    const url =
      "https://kusmq1it9k.execute-api.us-east-1.amazonaws.com/prod/items/";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.getMainSlidersItems(myJson);
        this.getFeatureItem(myJson);
        this.setState({
          isLoading: false
        });
      });
  }

  getFeatureItem(json) {
    this.setState({
      featureItem: json.find(item => item.tags.includes("feature_home"))
    });
  }

  getMainSlidersItems(json) {
    this.setState({
      mainSliderItems: json.filter(item => item.tags.includes("main_slider"))
    });
  }

  getTopCategories(json) {
    this.setState({
      topCategories: json.filter(category =>
        category.tags.includes("top_category")
      )
    });
  }

  render() {
    return (
      <div>
        {/* Body*/}
        {/* Off-Canvas Wrapper*/}
        <div className="offcanvas-wrapper">
          {/* Page Content*/}
          {/* Main Slider*/}
          <MainSlider
            mainSlider={this.state.mainSliderItems}
            key={"main_slider"}
          />
          {/* Top Categories*/}
          <ReactSectionTopCategories
            categories={this.state.topCategories}
            sectionClass={"container padding-top-3x"}
            key={"top_categories"}
          />
          {/* Promo #1*/}
          <ReactSectionOfert
            item={this.state.featureItem}
            key={"feature-item"}
          />
          {/* Featured Products Carousel*/}
          <section className="container padding-top-3x padding-bottom-3x">
            <h3 className="text-center mb-30">Featured Products</h3>
            <div
              className="owl-carousel"
              data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
            >
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
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
                      title="Whishlist"
                    >
                      <i className="icon-heart" />
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      data-toast
                      data-toast-type="success"
                      data-toast-position="topRight"
                      data-toast-icon="icon-circle-check"
                      data-toast-title="Product"
                      data-toast-message="successfuly added to cart!"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular Brands*/}
          <section className="bg-faded padding-top-3x padding-bottom-3x">
            <div className="container">
              <h3 className="text-center mb-30 pb-2">Marcas Populares</h3>
              <div
                className="owl-carousel"
                data-owl-carousel='{ "nav": false, "dots": false, "loop": true, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":2}, "470":{"items":3},"630":{"items":4},"991":{"items":5},"1200":{"items":6}} }'
              >
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/01.png"
                  alt="Adidas"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/02.png"
                  alt="Brooks"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/03.png"
                  alt="Valentino"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/04.png"
                  alt="Nike"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/05.png"
                  alt="Puma"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/06.png"
                  alt="New Balance"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/07.png"
                  alt="Dior"
                />
              </div>
            </div>
          </section>
          {/* Services*/}
          <section className="container padding-top-3x padding-bottom-2x">
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/01.png"
                  alt="Shipping"
                />
                <h6>Envio a toda la Argentina</h6>
                <p className="text-muted margin-bottom-none">
                  Free shipping for all orders over $100
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/02.png"
                  alt="Money Back"
                />
                <h6>Devolucion Gratuita </h6>
                <p className="text-muted margin-bottom-none">
                  Podes cancelar una compra y devolvemos tu dinero.
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/03.png"
                  alt="Support"
                />
                <h6>Soporte de Cliente</h6>
                <p className="text-muted margin-bottom-none">
                  Ofrecemos Soporte solo contactanos
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/04.png"
                  alt="Payment"
                />
                <h6>Mercado Pago</h6>
                <p className="text-muted margin-bottom-none">
                  Transacciones seguras por MP
                </p>
              </div>
            </div>
          </section>
          {/* Site Footer*/}
        </div>
        {/* Back To Top Button*/}
        <a className="scroll-to-top-btn" href="#">
          <i className="icon-arrow-up" />
        </a>
        {/* Backdrop*/}
        <div className="site-backdrop" />
        {/* JavaScript (jQuery) libraries, plugins and custom scripts*/}
      </div>
    );
  }
}

export default wrapper(index);
