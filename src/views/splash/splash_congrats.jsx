import React from "react";
import CardHF from "../../components/Checkout/CardHeader";

class Splash extends React.Component {
  render() {
    return (
      <>
        <div className="row center">
          <div className="container center pt-50px">
            <CardHF
              header="Genial! Estamos registrando tu suscripción"
              title="Espera unos segundos y serás redirigo automáticamente"
              body=""
              spinner={true}
            />
          </div>
        </div>
      </>
    );
  }

  parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
  }

  getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }

  redirect() {
    const merchantOrderId = this.getUrlVars()["merchant_order_id"];
    const preferenceId = this.getUrlVars()["preference_id"];

    console.log(merchantOrderId);

    fetch(
      `http://localhost:8080/mp/merchant_order?merchant_order_id=${merchantOrderId}&preference_id=${preferenceId}`,
      {
        method: "POST"
      }
    )
      .then(response => {
        return response.json();
      }
      ).then(myJson => {
        window.location.href = `/subscripcion/${myJson.suscription_id}`
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  componentDidMount() {
    this.redirect();
  }
}

export default Splash;