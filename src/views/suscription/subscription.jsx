import React from "react";
import Wrapper from "../../components/Wrapper";
import SubscriptionTitle from "../../components/subcription/SubscriptionTitle";
import TrackingBar from "../../components/utils/TrackingBar";
import SubscriptionDetail from "../../components/subcription/SubscriptionDetail";
import AlertDanger from "../../components/utils/DangerAlert";

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

    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/subscriptions/search?subscription_id=${subscription_id}`;
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

    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/tracks/search?track=${subscription_id}`;
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
    const cancelled = false;
    if (this.subscription.subscription_status === "CANCELLED") {
      cancelled = true;
    }

    return (
      <>
        <SubscriptionTitle subscription_id={this.state.subscription_id} />
        {cancelled ? (
          <AlertDanger message={"Esta suscripción fue cancelada"} />
        ) : (
          <TrackingBar tracks={this.state.tracks} 
          subscription_id={}/>
        )}
        <SubscriptionDetail payment={this.state.subscription} />
      </>
    );
  }
}

export default Wrapper(Subscription);
