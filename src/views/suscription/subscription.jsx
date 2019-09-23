import React from "react";
import Wrapper from "../../components/Wrapper";
import SubscriptionTitle from "../../components/subcription/SubscriptionTitle";
import TrackingBar from "../../components/utils/TrackingBar";
import SubscriptionDetail from "../../components/subcription/SubscriptionDetail";

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: null,
      isLoading: true,
      subscription_id: this.props.match.params.subscription_id,
      tracks: ["1", "2", "3"]
    };
  }

  componentDidMount() {
    this.fetchSuscription();
  }

  componentDidUpdate() {
    if (this.state.subscription != null) {
      //  this.fetchTracking();
    }
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

  fetchTracking() {
    const { subscription_id } = this.state;

    const url = `http://localhost:8080/tracks/search?track=${subscription_id}`;
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
          tracks: myJson
        });
      });
  }

  render() {
    return (
      <>
        <SubscriptionTitle subscription_id={this.state.subscription_id} />
        <TrackingBar tracks={this.state.tracks} />
        <SubscriptionDetail payment={this.state.subscription} />
      </>
    );
  }
}

export default Wrapper(Subscription);
