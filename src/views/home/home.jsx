import React from "react";

//componentes
import wrapper from "../../components/Wrapper";
import MainSlider from "../../components/home/Home-Main-Slider";
import ReactSectionTopCategories from "../../components/home/ReactSectionTopCategories";
import ReactSectionOfert from "../../components/home/ReactSectionOfert";
import ReactSectionFeatureProducts from "../../components/home/ReactSectionFeatureProducts";

class index extends React.Component {
  constructor(props) {
    super();
    this.state = {
      poc: null,
      categories: [],
      mainSliderItems: [],
      topCategories: [],
      featureProducs: [],
      featureItem: null,
      isLoading: true
    };
    this.buscarItemMainSlider();
    this.buscarItemHurryUp();
    this.buscarItemCarrouselBottom();
    this.fetchCategories();
  }

  fetchCategories() {
    const url =
      "http://localhost:8080/catalog/categories/get_all";
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
        this.filterTopCategories(myJson);
      })
      .catch(e => console.log(e));
  }

  filterTopCategories(json) {
    json.pop();
    json.pop();
    this.setState({
      topCategories: json
    });
  }

  buscarItemMainSlider() {
    const url =
      "http://localhost:8080/catalog/items/home/carrousel_main/search";
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
        this.setState({
          mainSliderItems: myJson,
          isLoading: false
        });
      });
  }

  buscarItemCarrouselBottom() {
    const url =
      "http://localhost:8080/catalog/items/home/carrousel_bottom/search";
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
        this.setState({
          featureProducs: myJson,
          isLoading: false
        });
      });
  }

  buscarItemHurryUp() {
    const url =
      "http://localhost:8080/catalog/items/home/hurry_up/search";
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
        this.setState({
          featureItem: myJson[0],
          isLoading: false
        });
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
          <section
            className="hero-slider"
            style={{
              backgroundImage: "url(/img/hero-slider/main-bg.jpg)",
              padding: "2% 5% 2% 5%"
            }}>
            <MainSlider
              mainSlider={this.state.mainSliderItems}
              key={"main_slider"}
            />
          </section>
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

          <ReactSectionFeatureProducts
            featureProducs={this.state.featureProducs}
          />
          {/* Popular Brands*/}
          <section className="bg-faded padding-top-3x padding-bottom-3x">
            <div className="container">
              <h3 className="text-center mb-30 pb-2">Marcas Populares</h3>
              <div
                className="owl-carousel"
                data-owl-carousel='{ "nav": false, "dots": false, "loop": true, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":2}, "470":{"items":3},"630":{"items":4},"991":{"items":5},"1200":{"items":6}} }'>
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
