import React from "react";
import wrapper from "../../components/Wrapper";
import VendorSuscriptionTable from "../../components/account/VendorSubscriptionTable";
import VendorResumeTab from "../../components/account/VendorResumeTab";
import AccountTitle from "../../components/account/AccountTitle";

import { Auth } from "aws-amplify";

import { Link } from "@material-ui/core";

class VendorAccountOportunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      items: []
    };
  }

  componentDidMount() {
    this.getUsuario();
  }

  componentDidUpdate() {
    if (this.state.user != null && this.state.items.length == 0) {
      this.getItems();
    }
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }

  getItems() {
    const { nickname } = this.state.user;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/items/search?index_name=vendor_username&search_pattern=${nickname}`;
    fetch(url, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          items: myJson
        });
      });
  }

  cancelFullSubscription() {}

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
          <AccountTitle />
          <div className="container padding-bottom-3x mb-2">
            <div className="row">
              <Link to="/vendor-reporting">
                <a className="btn btn-primary " style={{ paddingBottom: "5%" }}>
                  Volver a Cuenta
                </a>
              </Link>
              <VendorResumeTab oportunities={items} />
              {items.length > 0 && <VendorSuscriptionTable items={items} />}
            </div>
          </div>
        </>
      );
    }
  }
}

export default wrapper(VendorAccountOportunities);
