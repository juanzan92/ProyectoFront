import React from "react";
import PaymentDetail from "../subcription/PaymentDetail";
import PaymentMethod from "../subcription/PaymentMethod";

class SubscriptionDetail extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-4">
            <ul>
              <li>
                <PaymentDetail />
              </li>
              <li style={{ padding: "5px" }}>
                <PaymentMethod />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default SubscriptionDetail;
