import React from "react";

style = {
  margin: "20px"
};

class VendorResumeTab extends React.Component {
  render() {
    const { oportunities } = this.props;
    const finished = oportunities.filter();

    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="card text-white bg-success text-center mb-3">
          <div class="card-body">
            <h4 class="card-title">Finalizadas</h4>
            <p class="card-text">{finished}</p>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div class="card text-white bg-primary text-center mb-3">
          <div class="card-body">
            <h4 class="card-title">En Proceso</h4>
            <p class="card-text">cuantas</p>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div class="card text-white bg-danger text-center mb-3">
          <div class="card-body">
            <h4 class="card-title">Canceladas</h4>
            <p class="card-text">cuanrtas</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorResumeTab;
