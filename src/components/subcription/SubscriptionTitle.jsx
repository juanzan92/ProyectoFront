import React from "react";

class SubscriptionTitle extends React.Component {
  render() {
    const { subscription_id } = this.props;

    return (
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>Suscripcion</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Suscripcion</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>
                <span>{subscription_id}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionTitle;
