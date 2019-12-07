import React from "react";
import Wrapper from "../../components/Wrapper";
import SubscriptionTitle from "../../components/subcription/SubscriptionTitle";
import TrackingBar from "../../components/utils/TrackingBar";
import SubscriptionDetail from "../../components/subcription/SubscriptionDetail";
import AlertDanger from "../../components/utils/DangerAlert";
import CancelModal from "../../components/utils/TemplateModal";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import ReviewForm from "../../components/subcription/ReviewFrom";

const btnStyle = { marginBottom: "0.5rem !important" };

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: null,
      isLoading: true,
      isReviwedEnable: false,
      reviewed: false,
      subscription_id: this.props.match.params.subscription_id
    };

    this.cancelSuscription = this.cancelSuscription.bind(this);
  }

  componentDidMount() {
    this.fetchSuscription();
  }

  componentDidUpdate() {
    if (
      !this.state.reviewed &&
      this.state.subscription &&
      !this.state.isReviwedEnable
    ) {
      this.isReviwedEnable();
    }
  }

  fetchSuscription() {
    const { subscription_id } = this.state;

    const url = `http://localhost:8080/subscriptions/?subscription_id=${subscription_id}`;
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
    //closeWindow();
    const { subscription_id } = this.props.match.params;
    const url = `http://localhost:8080/subscriptions?subscription_id=${subscription_id}`;
    fetch(url, {
      method: "DELETE"
    }).then(response => {
      if (response.status === 200) {
        alert("Suscripcion cancelada con éxito");
        window.location.href = "/account";
      } else {
        alert("hubo un error");
      }
    });
  }

  buscarReviews() {
    const { item_id } = this.state.subscription;
    const url = `http://localhost:8080/catalog/reviews/search?index_name=item_id&search_pattern=${item_id}`;
    return new Promise(resolve => {
      fetch(url).then(response => {
        resolve(response.json());
      });
    });
  }

  async isReviwedEnable() {
    if (!this.state.reviewed) {
      this.setState({ reviewed: true });
    }

    let reviews = [];
    if (this.state.subscription.subscription_status === "FINISHED") {
      reviews = await this.buscarReviews();

      reviews = reviews.filter(
        review => review.username === this.state.subscription.username
      );

      if (
        reviews.length == 0 ||
        !reviews[0].username === this.state.subscription.username
      ) {
        this.setState({ isReviwedEnable: true });
      }
    }
  }

  render() {
    if (this.state.subscription != null) {
      const { subscription, isReviwedEnable } = this.state;

      var cancelable = false;
      if (subscription.subscription_status === "IN_PROGRESS") {
        cancelable = true;
      }
      return (
        <>
          <SubscriptionTitle subscription_id={subscription.subscription_id} />
          <div className="container padding-bottom-3x mb-1">
            <TrackingBar subscription={subscription} />
            <SubscriptionDetail subscription={subscription} />
            {cancelable && (
              <div className="card mb-3 col-lg-3">
                <div className="d-inline-block" style={{ margin: "auto" }}>
                  <h3 style={{ textAlign: "center", margin: "0,5 rem" }}>
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
                  data-target="#modalCentered"
                  style={btnStyle}>
                  Cancelar suscripción
                </button>
              </div>
            )}
            {isReviwedEnable && (
              <ReviewForm
                username={subscription.username}
                item_id={subscription.item_id}
                item_title={subscription.item_title}
              />
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
