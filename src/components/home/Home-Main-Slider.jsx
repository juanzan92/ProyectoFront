import React from "react";
import ItemMainSlider from "./Item-Main-Slider";

class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      isLoading: true
    };
  }

  componentDidMount() {}

  render() {
    const { mainSlider } = this.props;
    if (mainSlider) {
      return (
        <section
          className="hero-slider"
          style={{ backgroundImage: "url(/img/hero-slider/main-bg.jpg)" }}
        >
          <div
            className="owl-carousel large-controls dots-inside"
            data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000 }'
          >
            <div className="item">
              <div className="container padding-top-3x">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img
                        className="d-inline-block w-150 mb-4"
                        src="/img/hero-slider/logo02.png"
                        alt="Puma"
                      />
                      <div className="h2 text-body text-normal mb-2 pt-1">
                        Puma Backpacks Collection
                      </div>
                      <div className="h2 text-body text-normal mb-4 pb-1">
                        starting at <span className="text-bold">$37.99</span>
                      </div>
                    </div>
                    <a
                      className="btn btn-primary scale-up delay-1"
                      href="shop-grid-ls.html"
                    >
                      View Offers
                    </a>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img
                      className="d-block mx-auto"
                      src="/img/hero-slider/02.png"
                      alt="Puma Backpack"
                    />
                  </div>
                </div>
              </div>
            </div>
            {mainSlider.map(item => (
              <ItemMainSlider key={item.id} item={item} />
            ))}
          </div>
        </section>
      );
    } else {
      return (
        <div class="spinner-border text-info m-2" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}
export default MainSlider;
