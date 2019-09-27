import React from "react";
import { get } from "https";
//import "./tracking.scss";

class TrackingBar extends React.Component {
  renderFinalTrack() {}

  getState() {}

  getDate(trackDate) {
    const date = new Date(trackDate);
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = date.getDay();
    const fecha = days + "/" + month + "/" + year;
    return fecha;
  }

  getAdressName(reciver) {
    if (reciver) {
      return reciver.address_name;
    } else {
      return "Recibido";
    }
  }

  isSubscriptionDelivered() {
    const { subscription_status } = this.props.subscription;
    if (subscription_status !== "FINISHED")
      return (
        <div className="step">
          <div className="step-icon-wrap">
            <div className="step-icon">
              <i className="pe-7s-home"></i>
            </div>
          </div>
          <h4 className="step-title">Recibido</h4>
        </div>
      );
  }

  render() {
    const {
      shipments,
      subscription_id,
      subscription_status
    } = this.props.subscription;

    return (
      <div className="card mb-3">
        <div className="p-4 text-center text-white text-lg bg-dark rounded-top tracking-bar">
          <span className="text-uppercase">Tracking Order No - </span>
          <span className="text-medium">{subscription_id}</span>
        </div>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Enviado por:</span> Mercado Envios
          </div>
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">
              Estado:
              <span style={{ fontWeight: "500", color: "green" }}>
                {subscription_status}
              </span>
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="pe-7s-plane"></i>
                </div>
              </div>
              <h4 className="step-title">Envio Externo</h4>
            </div>
            {shipments.map(track => {
              return (
                <div className="step completed">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <i className="pe-7s-way"></i>
                    </div>
                  </div>
                  <h4 className="step-title">
                    {this.getAdressName(track.receiver_address)}
                  </h4>
                  <h4 className="step-title">
                    {this.getDate(track.date_created)}
                  </h4>
                </div>
              );
            })}
            {this.isSubscriptionDelivered()}
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingBar;
