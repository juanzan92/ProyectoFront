import React from "react";
import wrapper from "../../components/Wrapper";
import ChartsDeck from "../../components/reports/ChartsDeck";
import VendorResumeTab from "../../components/account/VendorResumeTab";
import { Auth } from "aws-amplify";

class VendorReporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
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

  render() {
    const { items } = this.state;
    return (
      <>
        <div className="container padding-bottom-3x mb-2 ">
          <div className="row">
            <VendorResumeTab oportunities={items} />
          </div>
          <ChartsDeck />
        </div>
      </>
    );
  }
}

export default wrapper(VendorReporting);
