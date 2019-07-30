import React from 'react';
import CreditCard from 'react-credit-cards';

var mercadopago = require("mercadopago");

class CheckoutPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        this.props.props2()
        return (
            <>
                <div className="container padding-bottom-3x mb-2">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="checkout-steps"><a href="checkout-review.html">4. Resumen</a><a className="active" href="checkout-payment.html"><span className="angle"></span>3. Pago</a><a className="completed" href="checkout-shipping.html"><span className="step-indicator icon-circle-check"></span><span className="angle"></span>2. Envio</a><a className="completed" href="checkout-address.html"><span className="step-indicator icon-circle-check"></span><span className="angle"></span>1. Direccion</a></div>
                            <h4>Pago</h4>
                            <hr className="padding-bottom-1x"></hr>
                            <div className="accordion" id="accordion" role="tablist">
                                <form action={this.manejarPago} method="post" id="pay" name="pay" >
                                    <fieldset>
                                        <ul>
                                            <li>
                                                <label for="email">Email</label>
                                                <input id="email" name="email" value="test_user_19653727@testuser.com" type="email" placeholder="your email" />
                                            </li>
                                            <li>
                                                <label for="cardNumber">Credit card number:</label>
                                                <input type="text" id="cardNumber" name="cardNumber" value={this.state.cardNumber} data-checkout="cardNumber" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" onChange={this.handleInputChange} />
                                            </li>
                                            <li>
                                                <label for="securityCode">Security code:</label>
                                                <input type="text" id="securityCode" data-checkout="securityCode" value="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" />
                                            </li>
                                            <li>
                                                <label for="cardExpirationMonth">Expiration month:</label>
                                                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" value="12" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" />
                                            </li>
                                            <li>
                                                <label for="cardExpirationYear">Expiration year:</label>
                                                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" value="2015" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" />
                                            </li>
                                            <li>
                                                <label for="cardholderName">Card holder name:</label>
                                                <input type="text" id="cardholderName" data-checkout="cardholderName" value="APRO" />
                                            </li>
                                            <li>
                                                <label for="docType">Document type:</label>
                                                <select id="docType" data-checkout="docType"></select>
                                            </li>
                                            <li>
                                                <label for="docNumber">Document number:</label>
                                                <input type="text" id="docNumber" data-checkout="docNumber" value="12345678" />
                                            </li>
                                        </ul>
                                        <input type="hidden" name="paymentMethodId" />
                                        <button type="submit" value="Pay!" />
                                    </fieldset>
                                </form>
                                <CreditCard
                                    number={this.state.cardNumber}
                                    name={"hasdhhasd"}
                                    expiry={"sawe"}
                                    cvc={123}
                                    focused={"yes"}
                                />

                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <aside className="sidebar">
                                    <div className="padding-top-2x hidden-lg-up"></div>
                                    Order Summary Widget
                                                    <section className="widget widget-order-summary">
                                        <h3 className="widget-title">Order Summary</h3>
                                        <table className="table">
                                            <tbody><tr>
                                                <td>Cart Subtotal:</td>
                                                <td className="text-medium">$289.68</td>
                                            </tr>
                                                <tr>
                                                    <td>Shipping:</td>
                                                    <td className="text-medium">$22.50</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated tax:</td>
                                                    <td className="text-medium">$3.42</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="text-lg text-medium">$315.60</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CheckoutPayment