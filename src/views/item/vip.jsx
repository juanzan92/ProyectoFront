
import React from 'react';


import wraper from '../../components/Wrapper';
import VIPTitle from '../../components/VIPTitle';
import VIPItem from '../../components/VIPItem';
import { METHODS } from 'http';



class VIP extends React.Component {
    constructor(params) {
        super(params)

    }
    state = {
        item: {
            id: null,
            name: "",
            inDiscount: false,
            pictures: [],
            thumbnails: [],
            inDiscount: false,
        },
        user: null,
        isLoading: true,
        isError: false,
        quantityToBuy: 0,
    };

    componentDidMount() {


        //this.calcularBarraProgreso
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    buscarItem() {
        const url = "url back";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    itemBuscado: myJson.results,
                    isLoading: false,
                })
            });

    }

    calcularBarraProgreso() {
        var initialQuantity = this.state.item.initialQuantity;
        var actualQuantity = this.state.item.stock;
        this.state.item.progress = ((actualQuantity * 100) / initialQuantity)
    }

    pagarTest() {
        const preferences = null;
        const url = 'http://localhost:8080/mp/preferences/create'  //url backend
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_id: "1234",
                user_id: "675",
                quantity: "1"
            })
        })
            .then(response => {
                return response.json();
            })
            .then(preference => {
                console.log(preference)
                window.location.href = preference.redirect_url
            });
    }
    pagar() {
        const preferences = null;
        const url = 'http://localhost:8080/mp/preferences/create'  //url backend
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
                console.log(preference)
                window.location.href = preference.redirect_url
            });
    }



    render() {
        const item = this.state.item
        let discount;
        if (item.inDiscount) {
            discount = <span className="product-badge text-danger">{item.actualPrice}% Off</span>
        }
        return (
            <>
                <VIPTitle />
                <div className="container padding-bottom-3x mb-1 inline">
                    {/*galeria del producto */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="product-gallery">
                                {discount}
                                <div className="gallery-wrapper">
                                    <div className="gallery-item video-btn text-center">
                                        <a href="#" data-toggle="tooltip"
                                            data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;//www.youtube.com/embed/B81qd2v6alw?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;" title="Watch video" />
                                    </div>
                                </div>
                                <div className="product-carousel owl-carousel gallery-wrapper">
                                    {}
                                    {item.pictures.map(picture =>
                                        <div className="gallery-item" data-hash={picture.index}>
                                            <a href={picture} data-size="1000x667">
                                                <img src={picture} alt="Product" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <ul className="product-thumbnails">
                                    {item.thumbnails.map(thumb =>
                                        <li className="active">
                                            <a href={thumb.index}>
                                                <img src={thumb} alt="Product" />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {/*info de producto */}
                        <div className="col-md-6">
                            <div className="padding-top-2x mt-2 hidden-md-up"></div>
                            <h2 className="padding-top-1x text-normal">{item.title}</h2>
                            <span className="h2 d-block">&nbsp; &#36;{item.price}</span>
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
                                        <select className="form-control" id="quantity" onChange={this.state.quantity}>
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
                                <a className="navi-link" href="/home">Zapatillas de Hombres,</a>
                                <a className="navi-link" href="/home"> Deportivas</a>
                            </div>

                            <hr className="mb-3" />
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="entry-share mt-2 mb-2"><span className="text-muted">Meta:</span>
                                    {/**aca va la barra de progreso */}
                                    <div className="progress-bar bg-success" role="progressbar" style={{ 'width:': item.progress + "%" }} aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100">{item.progress}&#37;</div>
                                </div>
                                <div className="sp-buttons mt-2 mb-2">
                                    <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                        <i className="icon-heart"></i></button>
                                    <div className="btn btn-lg btn-secondary" onClick={this.pagar}>
                                        <a >Pagar con Mercado Pago</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default wraper(VIP)