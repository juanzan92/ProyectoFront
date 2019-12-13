import React from "react";
import NavUser from "./NavUser";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      orders: this.props.orders,
      selected: this.props.selected
    };
  }

  getFullname() {
    return `${this.state.user.name} ${this.state.user.given_name}`;
  }

  render() {
    const { user, orders, selected } = this.state;
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
              <img src="/img/account/avatar-consumer.png" alt="User" />
            </div>
            <div className="user-data">
              <h4>{this.getFullname()}</h4>
            </div>
          </div>
        </aside>
        <NavUser orders={orders} selected={selected} />
      </div>
    );
  }
}
export default UserCard;
