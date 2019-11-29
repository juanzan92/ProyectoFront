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
    const url = "http://localhost:8080/catalog/categories/get_all";
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
    json.splice(0, 3);
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
    const url = "http://localhost:8080/catalog/items/home/hurry_up/search";
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
              <div
                className="owl-carousel"
                data-owl-carousel='{ "nav": false, "dots": false, "loop": true, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":2}, "470":{"items":3},"630":{"items":4},"991":{"items":5},"1200":{"items":6}} }'>
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/apple.png"
                  alt="Apple"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/adidas.png"
                  alt="Adidas"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/hp.png"
                  alt="HP"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/chanel.png"
                  alt="Chanel"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/motorola.png"
                  alt="Motorola"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/chhc.png"
                  alt="CH"
                />
                <img
                  className="d-block w-110 opacity-75 m-auto"
                  src="/img/brands/lg.png"
                  alt="LG"
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
                  src="/img/services/collaboration.png"
                  alt="Support"
                />
                <h6>Colaboración</h6>
                <p className="text-muted margin-bottom-none">
                  Accedé a precios increíbles participando en carteras de compra
                  colectivas
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/mercadopago.png"
                  alt="Money Back"
                />
                <h6>Mercado Pago</h6>
                <p className="text-muted margin-bottom-none">
                  Aprovechá todos los medios y promociones que ofrece Mercado
                  Pago
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/mercadoenvios.png"
                  alt="Shipping"
                />
                <h6>Mercado Envíos</h6>
                <p className="text-muted margin-bottom-none">
                  Recibí productos de todo el mundo directo a la puerta de tu
                  casa
                </p>
              </div>
              <div className="col-md-3 col-sm-6 text-center mb-30">
                <img
                  className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"
                  src="/img/services/refund.png"
                  alt="Payment"
                />
                <h6>Devoluciones Gratuitas</h6>
                <p className="text-muted margin-bottom-none">
                  Cancelá en cualquier momento y recibí el dinero en tu cuenta
                  de Mercado Pago
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
