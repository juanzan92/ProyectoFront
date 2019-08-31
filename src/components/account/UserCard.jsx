import React from "react";
import NavUser from "./NavUser";

class UserCard extends React.Component {
constructor(props){
    state = {
        user: this.props.user,
        orders: this.props2.orders
    }
}

componentDidMount(){

}


  render() {
      const {user} = this.state
      const img ;
    if (user.picture) {
        img = user.picture
    }
    return (
      <div class="col-lg-4">
        <aside class="user-info-wrapper">
          <div
            class="user-cover"
            style={{
              backgroundImage: `${img}`
            }}
          >
        
          </div>
          <div class="user-info">
            <div class="user-avatar">
              <a class="edit-avatar" onClick={() => window.location.reload() }/>
              <img src="img/account/user-ava.jpg" alt="User" />
            </div>
            <div class="user-data">
              <h4>{this.getFullname()}</h4>
            </div>
          </div>
        </aside>
        <NavUser prop={orders}/>
      </div>
    );
  }
}
export default UserCard;
