/* eslint-disable no-undef */
import React from "react";
//wraper de componentes
import wraper from "../../components/Wrapper";
import CheckoutTitle from "../../components/Checkout/CheckoutTitle";
import CheckoutPayment from "../../components/Checkout/CheckoutpPayment";

class CheckoutController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null
    };

    this.manejarPago = this.manejarPago.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    console.log(
      Mercadopago.setPublishableKey("TEST-ff8e2031-644c-44e8-8050-e1d672968663")
    );
    console.log(Mercadopago.getIdentificationTypes());
  }

  guessingPaymentMethod(event) {
    var bin = getBin();

    if (event.type === "keyup") {
      if (bin.length >= 6) {
        Mercadopago.getPaymentMethod(
          {
            bin: bin
          },
          setPaymentMethodInfo
        );
      }
    } else {
      setTimeout(function() {
        if (bin.length >= 6) {
          Mercadopago.getPaymentMethod(
            {
              bin: bin
            },
            setPaymentMethodInfo
          );
        }
      }, 100);
    }
  }

  setPaymentMethodInfo(status, response) {
    if (status === 200) {
      const paymentMethodElement = document.querySelector(
        "input[name=paymentMethodId]"
      );

      if (paymentMethodElement) {
        paymentMethodElement.value = response[0].id;
      } else {
        const inputEl = document.createElement("input");
        inputEl.setattribute("name", "paymentMethodId");
        inputEl.setAttribute("type", "hidden");
        inputEl.setAttribute("value", response[0].id);

        form.appendChild(inputEl);
      }
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  doPay(event) {
    event.preventDefault();
    if (!doSubmit) {
      var $form = document.querySelector("#pay");

      Mercadopago.createToken($form, sdkResponseHandler);

      return false;
    }
  }

  sdkResponseHandler(status, response) {
    if (status !== 200 && status !== 201) {
      alert("verify filled data");
    } else {
      var form = document.querySelector("#pay");
      var card = document.createElement("input");
      card.setAttribute("name", "token");
      card.setAttribute("type", "hidden");
      card.setAttribute("value", response.id);
      form.appendChild(card);
      doSubmit = true;
      form.submit();
    }
  }

  manejarPago() {
    console.log("llegue");
  }

  render() {
    return (
      <>
        <CheckoutTitle />
        <CheckoutPayment props2={() => this.manejarPago()} />
      </>
    );
  }
}

export default wraper(CheckoutController);
