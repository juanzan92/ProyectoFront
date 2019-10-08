import React from "react";
import wraper from "../../components/Wrapper";
import VIPTitle from "../../components/Item/VIPTitle";
import Review from "../../components/vip/Review";
import ProductCard from "../../components/vip/ProductCard";
import { Auth } from "aws-amplify";

class VIP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      reviews: [],
      isLoading: true,
      isError: false,
      quantityToBuy: 1,
      progress: 0,
      redirect_url: "",
      user: this.getUsuario()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.pagar = this.pagar.bind(this);
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      return user1.attributes;
    });
  }

  componentDidMount() {
    this.buscarItemTest();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "quantityToBuy") {
      this.getURLPago();
    }
    this.setState({
      [name]: value
    });
  }

  buscarItemTest() {
    const { item_id } = this.props.match.params;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/items?item_id=${item_id}`;
    fetch(url, {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          item: myJson,
          isLoading: false
        });
      })
      .then(response => {
        this.calcularBarraProgreso();
        this.buscarReviews();
        this.getURLPago();
      });
  }

  buscarReviews() {
    const url =
      "http://proyectoback-tesis.us-west-2.elasticbeanstalk.com//catalog/reviews/search?index_name=item_id&search_pattern=1234";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          reviews: myJson
        });
      });
  }

  calcularBarraProgreso() {
    var initialQuantity = this.state.item.initial_stock;
    var actualQuantity = this.state.item.stock;
    this.setState({
      progress: (actualQuantity * 100) / initialQuantity
    });
  }

  getURLPago() {
    const url =
      "http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/mp/preferences"; //url backend
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item_id: this.state.item.item_id,
        quantity: this.state.quantityToBuy,
        consumer_username: "diegote"
      })
    })
      .then(response => {
        return response.json();
      })
      .then(preferencia => {
        this.setState({
          redirect_url: preferencia.redirect_url
        });
      });
  }

  pagar() {
    const { redirect_url } = this.state;
    window.location.href = redirect_url;
  }

  picIndex() {
    var picIndex = 0;
    const picData = ["one", "two"];
    let res = picData[picIndex];
    picIndex = picIndex + 1;
    return res;
  }

  getReviews() {
    if (this.state.reviews.length > 0) {
      return (
        <>
          {/**review */}
          {this.state.reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </>
      );
    }
  }

  render() {
    const { item } = this.state;
    let discount;
    const state = this.state;

    if (item && state.reviews.length > 0) {
      return (
        <>
          <VIPTitle prop1={item.title} />
          <div className="container padding-bottom-3x mb-1 inline">
            {/*galeria del producto */}
            <div className="row">
              <div className="col-md-6">
                <ProductCard pictures={item.pictures} />
              </div>
              {/*info de producto */}
              <div className="col-md-6">
                <div className="padding-top-2x mt-2 hidden-md-up"></div>
                <h2 className="padding-top-1x text-normal">{item.title}</h2>
                <span className="h2 d-block">
                  &nbsp; U&#36;D {item.actual_price}
                </span>
                <p>{item.description}</p>
                <div className="row margin-top-1x">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="size">Talle</label>
                      <select className="form-control" id="size">
                        <option>Elegir Talle</option>
                        <option>10.5</option>
                        <option>10</option>
                        <option>9.5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <label htmlFor="color">Color</label>
                      <select className="form-control" id="color">
                        <option>Gris</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label htmlFor="quantity">Cantidad</label>
                      <select
                        className="form-control"
                        id="quantity"
                        onChange={this.handleInputChange}
                        value={this.state.quantityToBuy}
                        name={"quantityToBuy"}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="padding-bottom-1x mb-2">
                  <span className="text-medium">Categoria:&nbsp;</span>
                  <a className="navi-link" href="/home">
                    {item.category}
                  </a>
                </div>

                <hr className="mb-3" />
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="entry-share mt-2 mb-2 col-5">
                    <span className="text-muted">Meta:</span>
                    {/**aca va la barra de progreso */}
                    <div className="progress mt-1">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: state.progress + "%" }}
                        aria-valuenow={state.progress}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        {state.progress}&#37;
                      </div>
                    </div>
                  </div>
                  <div className="sp-buttons mt-2 mb-2">
                    <button
                      className="btn btn-outline-secondary btn-sm btn-wishlist"
                      data-toggle="tooltip"
                      title="Whishlist">
                      <i className="icon-heart"></i>
                    </button>
                    <div
                      className="btn btn-lg btn-secondary"
                      onClick={this.pagar}>
                      <a href={this.state.redirect_url}>
                        Pagar con Mercado Pago
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/** descripcion */}
              <div className="row padding-top-3x mb-3">
                <div className="col-lg-10 offset-lg-1">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#description"
                        data-toggle="tab"
                        role="tab">
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#reviews"
                        data-toggle="tab"
                        role="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel">
                      <p>{item.description}</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <dl>
                            {item.attributes.map(attributes => {
                              return (
                                <>
                                  <dt>{attributes.id}</dt>
                                  <dd>{attributes.value}</dd>
                                </>
                              );
                            })}
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      {this.state.reviews.length > 0 && this.getReviews()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="spinner-border text-info m-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}
export default wraper(VIP);
