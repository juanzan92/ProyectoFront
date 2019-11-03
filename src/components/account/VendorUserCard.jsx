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
              backgroundImage: `${img}`
            }}></div>
          <div className="user-info">
            <div className="user-avatar">
              <a
                className="edit-avatar"
                onClick={() => window.location.reload()}
              />
              <img src="img/account/user-ava.jpg" alt="User" />
            </div>
            <div className="user-data">
              <h4>{this.getFullname()}</h4>
            </div>
          </div>
        </aside>
        {console.log("---------")}
        {console.log(orders)}
        {console.log("-------")}
        {console.log(selected)}
        <VendorNav orders={orders} selected={selected} />
      </div>
    );
  }
}
export default VendorUserCard;
