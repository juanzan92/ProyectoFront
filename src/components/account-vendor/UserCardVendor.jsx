import React from "react";

class UserCardVendor extends React.Component {
  render() {
    const { user } = this.state;
    const img = NaN;
    if (user.picture) {
      img = user.picture;
    }
    return (
      <>
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
          <NavUser orders={this.state.orders} selected={this.state.selected} />
        </div>
      </>
    );
  }
}

export default UserCardVendor;
