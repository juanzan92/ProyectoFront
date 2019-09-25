import React from "react";

class DangerAlert extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <>
        <button
          className="btn btn-outline-secondary"
          data-toast
          data-toast-position="topCenter"
          data-toast-icon="icon-clock"
          data-toast-title="Default"
          data-toast-message="toast notification with icon">
          Default Top Center
        </button>
        <div
          className="toast position-fixed top-center"
          id="toast-top-center"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-autohide="true"
          data-delay="2000">
          <div className="toast-header">
            <div
              className="d-inline-block align-middle bg-primary rounded mr-2"
              style={{ width: "25px;", height: "25px;" }}></div>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              className="ml-2 close"
              type="button"
              data-dismiss="toast"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </>
    );
  }
}

export default DangerAlert;
