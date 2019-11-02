import React from "react";
import wrapper from "../../components/Wrapper";
import VendorSuscriptionTable from "../../components/account/VendorSubscriptionTable";
import VendorResumeTab from "../../components/account/VendorResumeTab";
import VendorUserCard from "../../components/account/VendorUserCard";

import { Link } from "@material-ui/core";

class VendorAccountOportunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      items: []
    };
  }

  componentDidMount() {
    this.getUsuario();
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }

  getItems() {
    const { vendor_username } = this.user;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/items/search?index_name=vendor_username&search_pattern=${vendor_username}`;
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

  cancelFullSubscription() {}

  render() {
    const { items } = this.state;
    if (user) {
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
                <a class="btn btn-primary " style={{ paddingBottom: "5%" }}>
                  Volver a Cuenta
                </a>
              </Link>
              <VendorResumeTab />
              {items.length > 0 && <VendorSuscriptionTable items={items} />}
            </div>
          </div>
        </>
      );
    }
  }
}

export default wrapper(VendorAccountOportunities);
