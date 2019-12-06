import React from "react";
import wrapper from "../../components/Wrapper";
import ChartsDeck from "../../components/reports/ChartsDeck";
import VendorResumeTab from "../../components/account/VendorResumeTab";
import { Auth } from "aws-amplify";
import VendorUserCard from "../../components/account/VendorUserCard";

class VendorReporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.getUsuario(),
      items: []
    };
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }

  componentDidUpdate() {
    if (this.state.user != null && this.state.items.length === 0) {
      this.getItems();
    }
  }

  getItems() {
    const { nickname } = this.state.user;
    const url = `http://localhost:8080/catalog/items/search?index_name=vendor_username&search_pattern=${nickname}`;
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
          items: myJson
        });
      });
  }

  handleBackBtn() {
    window.location.href = "/account";
  }

  render() {
    const { items, user } = this.state;
    if (!user) {
      return (
        <div className="spinner-border text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <>
          <div
            className="container padding-bottom-3x mb-2 "
            style={{ width: "100%", maxWidth: "70%" }}>
            <h6 class="text-muted text-normal text-uppercase padding-top-2x">
              Oportunidades:{" "}
            </h6>
            <hr class="margin-bottom-1x"></hr>
            <div
              className="row"
              style={{
                paddingTop: "1rem",
                marginTop: "1rem",
                border: "1px solid rgba(0, 0, 0, 0.12)"
              }}>
              {items.length === 0 && (
                <h3 style={{ margin: "1.0rem" }}>
                  No tienes Datos. Cuando vendas, aqu&#237; encontraras tus
                  reportes.
                </h3>
              )}
              {items.length > 0 && <VendorResumeTab oportunities={items} />}
            </div>
            <h6 class="text-muted text-normal text-uppercase padding-top-2x">
              Reportes Vendedor:{" "}
            </h6>
            <hr class="margin-bottom-1x"></hr>
            <div className="row">
              <ChartsDeck />
            </div>
            <div
              className="btn btn-outline-primary "
              onClick={e => this.handleBackBtn()}
              href="/account">
              Volver a Cuenta
            </div>
          </div>
        </>
      );
    }
  }
}

export default wrapper(VendorReporting);
