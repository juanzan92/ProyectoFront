import React from "react";

import "./vip.scss";

import wraper from "../../components/Wrapper";
import VIPTitle from "../../components/Item/VIPTitle";
import Review from "../../components/vip/Review";


class VIP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      user: null,
      isLoading: true,
      isError: false,
      quantityToBuy: 0,
      progress: 0
    };
  }

  componentDidMount() {
    this.buscarItemTest();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  buscarItemTest() {
    const { item_id } = this.props.match.params;
    const url = `http://localhost:8080/catalog/items?item_id=${item_id}`;
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
      });
  }

  calcularBarraProgreso() {
    var initialQuantity = this.state.item.initial_stock;
    var actualQuantity = this.state.item.stock;
    this.setState({
      progress: (actualQuantity * 100) / initialQuantity
    });
  }

  pagar() {
    const url = "http://localhost:8080/mp/preferences/create"; //url backend
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item_id: this.state.item.id,
        user_id: this.state.user.id,
        quantity: this.state.quantityToBuy
      })
    })
      .then(response => {
        return response.json();
      })
      .then(preference => {
        console.log(preference);
        window.location.href = preference.redirect_url;
      });
  }

  picIndex() {
    var picIndex = 0;
    const picData = ["one", "two"];
    let res = picData[picIndex];
    picIndex = picIndex + 1;
    return res;
  }

  getReviews() {
    if (false) {
      return (
        <div className="tab-pane fade" id="reviews" role="tabpanel">
          {/**review */}
          {this.reviews.map(review => (
            <Review key={review.id} prop={review} />
          ))}
        </div>
      );
    }
  }

  render() {
    const item = this.state.item;
    let discount;
    const state = this.state;

    if (item) {
      if (item.inDiscount) {
        discount = (
          <span className="product-badge text-danger">
            {item.actualPrice}% Off
          </span>
        );
      }
      return (
        <>
          <VIPTitle prop1={item.name} />
          <div className="container padding-bottom-3x mb-1 inline">
            {/*galeria del producto */}
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery">
                  {discount}
                  <div className="gallery-wrapper">
                    <div className="gallery-item video-btn text-center">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-type="video"
                        data-video='&lt;div className="wrapper"&gt;&lt;div className="video-wrapper"&gt;&lt;iframe className="pswp__video" width="960" height="640" src="//www.youtube.com/embed/B81qd2v6alw?rel=0" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;'
                        title="Watch video"
                      />
                    </div>
                  </div>
                  <div className="product-carousel owl-carousel gallery-wrapper">
                    {item.pictures.map(picture => (
                      <div className="gallery-item" data-hash={picture.index}>
                        <a href={picture.src} data-size="1000x667">
                          <img src={"../" + picture.src} alt="Product" />
                        </a>
                      </div>
                    ))}
                  </div>
                  <ul className="product-thumbnails">
                    {item.thumbnails.map(thumb => (
                      <li className="active">
                        <a href={thumb.index}>
                          <img src={"../" + thumb} alt="Product" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/*info de producto */}
              <div className="col-md-6">
                <div className="padding-top-2x mt-2 hidden-md-up"></div>
                <h2 className="padding-top-1x text-normal">{item.name}</h2>
                <span className="h2 d-block">
                  &nbsp; &#36;{item.actualPrice}
                </span>
                <p>{item.description}</p>
                <div className="row margin-top-1x">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="size">Men's size</label>
                      <select className="form-control" id="size">
                        <option>Chooze size</option>
                        <option>11.5</option>
                        <option>11</option>
                        <option>10.5</option>
                        <option>10</option>
                        <option>9.5</option>
                        <option>9</option>
                        <option>8.5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <label htmlFor="color">Choose color</label>
                      <select className="form-control" id="color">
                        <option>White/Red/Blue</option>
                        <option>Black/Orange/Green</option>
                        <option>Gray/Purple/White</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label htmlFor="quantity">Cantidad</label>
                      <select
                        className="form-control"
                        id="quantity"
                        onChange={this.state.quantity}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
                        aria-valuemax="100"
                      >
                        {state.progress}&#37;
                      </div>
                    </div>
                  </div>
                  <div className="sp-buttons mt-2 mb-2">
                    <button
                      className="btn btn-outline-secondary btn-sm btn-wishlist"
                      data-toggle="tooltip"
                      title="Whishlist"
                    >
                      <i className="icon-heart"></i>
                    </button>
                    <div
                      className="btn btn-lg btn-secondary"
                      onClick={this.pagarTest}
                    >
                      <a>Pagar con Mercado Pago</a>
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
                        role="tab"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#reviews"
                        data-toggle="tab"
                        role="tab"
                      >
                        Reviews (3)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                    >
                      <p>{item.description}</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <dl>
                            <dt>Materials:</dt>
                            <dd>Leather, Cotton, Rubber, Foam</dd>
                            <dt>Available Sizes:</dt>
                            <dd>8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5</dd>
                            <dt>Available Colors:</dt>
                            <dd>White/Red/Blue, Black/Orange/Green</dd>
                          </dl>
                        </div>
                        <div className="col-sm-6">
                          <dl>
                            <dt>Model Year:</dt>
                            <dd>2016</dd>
                            <dt>Manufacturer:</dt>
                            <dd>Reebok Inc.</dd>
                            <dt>Made In:</dt>
                            <dd>Taiwan</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    {this.getReviews()}
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
