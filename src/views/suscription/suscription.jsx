import React from "react";
import Wrapper from "../../components/Wrapper";
import SubscriptionTitle from "../../components/subcription/SubscriptionTitle";
import TrackingBar from "../../components/utils/TrackingBar";

class Suscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suscription: null,
      isLoading: true,
      subscription_id: this.props.match.params.subscription_id
    };
  }

  componentDidMount() {
    this.fetchSuscription();
  }

  fetchSuscription() {
    const { subscription_id } = this.state;

    const url = `http://localhost:8080/subscriptions/search?subscription_id=${subscription_id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
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

    return (
      <>
        <SubscriptionTitle subscription_id={this.state.subscription_id} />
        <TrackingBar />
      </>
    );
  }
}

export default Wrapper(Suscription);
