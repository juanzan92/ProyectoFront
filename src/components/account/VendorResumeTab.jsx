import React from "react";
import Divider from "@material-ui/core/Divider";

const styleCardText = {
  fontWeight: "bold"
};

class VendorResumeTab extends React.Component {
  render() {
    const { oportunities } = this.props;
    const finished = oportunities.filter(
      oportunity => oportunity.item_status === "FINISHED"
    );
    const inProgress = oportunities.filter(
      oportunity => oportunity.item_status === "ACTIVE"
    );
    const cancelled = oportunities.filter(
      oportunity => oportunity.item_status === "CANCELLED"
    );

    return (
      <>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            class="card text-white bg-success text-center mb-3 "
            style={{ width: "150px" }}>
            <div class="card-body">
              <h4 class="card-title">Finalizadas</h4>
              <p class="card-text" style={styleCardText}>
                {finished.length}
              </p>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div
            class="card text-white bg-primary text-center mb-3 "
            style={{ width: "150px" }}>
            <div class="card-body">
              <h4 class="card-title">Activas</h4>
              <p class="card-text" style={styleCardText}>
                {inProgress.length}
              </p>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div
            class="card text-white bg-danger text-center mb-3 "
            style={{ width: "150px" }}>
            <div class="card-body">
              <h4 class="card-title">Canceladas</h4>
              <p class="card-text" style={styleCardText}>
                {cancelled.length}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VendorResumeTab;
