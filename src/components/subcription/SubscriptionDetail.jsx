import React from "react";
import PaymentDetail from "../subcription/PaymentDetail";
import PaymentMethod from "../subcription/PaymentMethod";

class SubscriptionDetail extends React.Component {
  render() {
    const { subscription } = this.props;
    return (
      <>
        <div
          className="card mb-3"
          style={{ display: "flex", flexDirection: "row" }}>
          <div className="col-lg-4 " style={{ margin: "2% auto" }}>
            <PaymentDetail subscription={subscription} />
          </div>
          <div className="col-lg-4" style={{ margin: "2% auto" }}>
            <PaymentMethod subscription={subscription} />
          </div>
        </div>
      </>
    );
  }
}

export default SubscriptionDetail;
