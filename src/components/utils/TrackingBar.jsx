import React from "react";
//import "./tracking.scss";

class TrackingBar extends React.Component {
  renderTrack(track) {}

  render() {
    const { tracks } = this.props;
    return (
      <div class="container padding-bottom-3x mb-1">
        <div class="card mb-3">
          <div class="p-4 text-center text-white text-lg bg-dark rounded-top tracking-bar">
            <span class="text-uppercase">Tracking Order No - </span>
            <span class="text-medium">34VB5540K83</span>
          </div>
          <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Shipped Via:</span> UPS Ground
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Status:</span> Checking Quality
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Expected Date:</span> SEP 09, 2017
            </div>
          </div>
          <div class="card-body">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-cart"></i>
                  </div>
                </div>
                <h4 class="step-title">Confirmed Order</h4>
              </div>
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-config"></i>
                  </div>
                </div>
                <h4 class="step-title">Processing Order</h4>
              </div>
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-medal"></i>
                  </div>
                </div>
                <h4 class="step-title">Quality Check</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-car"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Dispatched</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-home"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingBar;
