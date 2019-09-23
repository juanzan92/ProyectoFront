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
      this.fetchOrders();
    }
  }

  fetchOrders() {
    const url = `http://localhost:8080/subscriptions/search?index_name=username&search_pattern=${this.state.user.nickname}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          orders: myJson
        });
      })
      .catch(e => console.log(e));
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
            <AccountProfileForm user={this.state.user} />
          </div>
        </div>
        <div class="iziToast-wrapper iziToast-wrapper-topRight"></div>
        <DangerAlert />
      </>
    );
  }
}

export default wrapper(AccountProfile);
