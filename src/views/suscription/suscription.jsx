import React from "react";
import Wrapper from "../../components/Wrapper";

class Suscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suscription: null,
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchSuscription();
  }

  fetchSuscription(props) {
    const suscripction_id = this.props.match.suscripction_id;

    const url = "http://localhost:8080//subscriptions/search";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        subscription_id: `${suscripction_id}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          suscription: myJson,
          isLoading: false
        });
      });
  }

  render() {
    {
    }

    return <></>;
  }
}

export default Wrapper(Suscription);
