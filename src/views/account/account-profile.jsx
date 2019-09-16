import React from "react";

import UserCard from "../../components/account/UserCard";
import wrapper from "../../components/Wrapper";
import AccountProfileForm from "../../components/account/AccountForm";
import AccountTitle from "../../components/account/AccountTitle";
import { Auth } from "aws-amplify";
import DangerAlert from "../../components/utils/DangerAlert";

class AccountProfile extends React.Component {
  state = {
    user: "",
    orders: []
  };

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }

  componentDidMount() {
    this.getUsuario();
  }

  componentDidUpdate() {
    if (this.state.user !== "" && this.state.orders.length == 0) {
      this.getOrders();
    }
  }

  getOrders() {
    const ordenLocalStorage = localStorage.getItem("orders").split(",");
    this.setState({
      orders: ordenLocalStorage
    });
  }

  render() {
    return (
      <>
        <AccountTitle />
        <div class="container padding-bottom-3x mb-2">
          <div class="row">
            <UserCard
              user={this.state.user}
              orders={this.state.orders}
              selected={"mi_cuenta"}
            />
            <AccountProfileForm />
          </div>
        </div>
        <DangerAlert />
      </>
    );
  }
}

export default wrapper(AccountProfile);
