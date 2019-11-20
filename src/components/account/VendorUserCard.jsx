import React from "react";
import VendorNav from "./VendorNavUser";

class VendorUserCard extends React.Component {
  getFullname() {
    return `${this.props.user.name} ${this.props.user.given_name}`;
  }

  render() {
    const { user, orders, selected } = this.props;
    const img = NaN;
    if (user.picture) {
      img = user.picture;
    }
    return (
      <div className="col-lg-4">
        <aside className="user-info-wrapper">
          <div
            className="user-cover"
            style={{
              background: `/img/account/user-cover-img.jpg`
            }}></div>
          <div className="user-info">
            <div className="user-avatar">
              <a
                className="edit-avatar"
                onClick={() => window.location.reload()}
              />
              <img src="/img/account/avatar-vendor.png" alt="User" />
            </div>
            <div className="user-data">
              <h4>{this.getFullname()}</h4>
            </div>
          </div>
        </aside>
        <VendorNav orders={orders} selected={selected} />
      </div>
    );
  }
}
export default VendorUserCard;
