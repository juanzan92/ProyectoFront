import React from "react";

class AlertDanger extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="alert alert-danger alert-dismissible fade show text-center margin-bottom-1x">
        <span className="alert-close" data-dismiss="alert"></span>
        <i className="icon-ban"></i>&nbsp;&nbsp;<strong>Alerta</strong> {message}
      </div>
    );
  }
}
