import React from "react";
import { get } from "https";
//import "./tracking.scss";

class TrackingBar extends React.Component {
  renderFinalTrack() {}

  getState()

  render() {
    const { tracks, subscription_id, delivery_date } = this.props;
    return (
      <div className="container padding-bottom-3x mb-1">
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
              <span className="text-medium">Estado:</span> {getState()}
            </div>
            <div className="w-100 text-center py-1 px-2">
              <span className="text-medium">Fecha Esperada:</span> {delivery_date}
            </div>
          </div>
          <div className="card-body">
            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              {tracks.map(track => {
                return (
                  <div className="step completed">
                    <div className="step-icon-wrap">
                      <div className="step-icon">
                        <i className="pe-7s-cart"></i>
                      </div>
                    </div>
                    <h4 className="step-title">{track.id}</h4>
                  </div>
                );
              })}

              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <i className="pe-7s-config"></i>
                  </div>
                </div>
                <h4 className="step-title">Processing Order</h4>
              </div>
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <i className="pe-7s-medal"></i>
                  </div>
                </div>
                <h4 className="step-title">Quality Check</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <i className="pe-7s-car"></i>
                  </div>
                </div>
                <h4 className="step-title">Product Dispatched</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <i className="pe-7s-home"></i>
                  </div>
                </div>
                <h4 className="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingBar;
