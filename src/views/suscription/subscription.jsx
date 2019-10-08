import React from "react";
import Wrapper from "../../components/Wrapper";
import SubscriptionTitle from "../../components/subcription/SubscriptionTitle";
import TrackingBar from "../../components/utils/TrackingBar";
import SubscriptionDetail from "../../components/subcription/SubscriptionDetail";
import AlertDanger from "../../components/utils/DangerAlert";
import CancelModal from "../../components/utils/TemplateModal";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: null,
      isLoading: true,
      subscription_id: this.props.match.params.subscription_id
    };

    this.cancelSuscription = this.cancelSuscription.bind(this);
  }

  componentDidMount() {
    this.fetchSuscription();
  }

  componentDidUpdate() {}

  fetchSuscription() {
    const { subscription_id } = this.state;

    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/subscriptions/?subscription_id=${subscription_id}`;
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
          subscription: myJson,
          isLoading: false
        });
      });
  }

  cancelSuscription() {
    const { subscription_id } = this.props.match.params;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/subscriptions?subscription_id=${subscription_id}`;
    fetch(url, {
      method: "DELETE"
    }).then(response => {
      return response.json();
    });
  }

  render() {
    if (this.state.subscription != null) {
      const { subscription } = this.state;
      const cancelled = false;
      return (
        <>
          <SubscriptionTitle subscription_id={subscription.subscription_id} />
          <div className="container padding-bottom-3x mb-1">
            {cancelled ? (
              <AlertDanger message={"Esta suscripción fue cancelada"} />
            ) : (
              <TrackingBar subscription={subscription} />
            )}
            <SubscriptionDetail subscription={subscription} />
            {(subscription.subscription_status != "CANCELLED" ||
              subscription.subscription_status != "FINISHED") && (
              <div className="card mb-3 col-lg-3">
                <div className="d-inline-block" style={{ margin: "auto" }}>
                  <h3 style={{ margin: "auto" }}>
                    <WarningRoundedIcon>WarningRoundedIcon</WarningRoundedIcon>
                    Cuidado
                    <WarningRoundedIcon>WarningRoundedIcon</WarningRoundedIcon>
                  </h3>
                </div>

                <CancelModal cancelSuscription={this.cancelSuscription} />
                <button
                  class="btn btn-outline-danger m-auto"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalCentered">
                  Cancelar suscripción
                </button>
              </div>
            )}
          </div>
        </>
      );
    } else {
      return (
        <div className="spinner-border text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export default Wrapper(Subscription);
