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

  componentDidMount() {}

  getFullname() {
    return `${this.state.user.name} ${this.state.user.given_name}`;
  }
  render() {
    const { user } = this.state;
    const img = NaN;

    if (user.picture) {
      img = user.picture;
    }
    return (
      <div class="col-lg-4">
        <aside class="user-info-wrapper">
          <div
            class="user-cover"
            style={{
              backgroundImage: `${img}`
            }}
          ></div>
          <div class="user-info">
            <div class="user-avatar">
              <a class="edit-avatar" onClick={() => window.location.reload()} />
              <img src="img/account/user-ava.jpg" alt="User" />
            </div>
            <div class="user-data">
              <h4>{this.getFullname()}</h4>
            </div>
          </div>
        </aside>
        <NavUser orders={this.state.orders} selected={this.state.selected} />
      </div>
    );
  }
}
export default UserCard;
