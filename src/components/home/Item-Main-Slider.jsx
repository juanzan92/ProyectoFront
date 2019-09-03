import React from "react";

const logos = [
  {
    Motorola: "/img/hero-slider/logo03.png",
    Converse: "/img/hero-slider/logo01.png"
  }
];

class ItemMainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  getLogo(marca) {
    return logos.find(logo => logo === marca);
  }

  calcularBarraProgreso() {
    var initialQuantity = this.state.item.initialStock;
    var actualQuantity = this.state.item.stock;
    this.setState({
      progress: (actualQuantity * 100) / initialQuantity
    });
  }

  render() {
    const item = this.props.item;
    return (
      <div className="item">
        <div className="container padding-top-3x">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
              <div className="from-bottom">
                <img
                  className="d-inline-block mb-4"
                  src={this.getLogo("Converse")}
                  style={{ width: "125px" }}
                  alt=""
                />
                <div className="h2 text-body text-normal mb-2 pt-1">
                  {item.title}
                </div>
                <div className="h2 text-body text-normal mb-4 pb-1">
                  Oferta <span className="text-bold">${item.price}</span>
                </div>
              </div>
              <a
                className="btn btn-primary scale-up delay-1"
                href={"/vip/" + item.item_id}
              >
                Comprar Ahora
              </a>
            </div>
            <div className="col-md-6 padding-bottom-2x mb-3">
              <img
                className="d-block mx-auto"
                src={item.pictures[0].src}
                alt="Moto 360"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemMainSlider;
