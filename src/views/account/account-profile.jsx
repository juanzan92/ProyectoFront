import React from "react";

import UserCard from "../../components/account/UserCard";
import wrapper from "../../components/Wrapper";
import AccountProfileForm from "../../components/account/account-form";
import AccountTitle from "../../components/account/AccountTitle";

class AccountProfile extends React.Component {
  state = {
    user:"",
    orders:[]
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }


  componentDidMount(){
    this.getUsuario()
    this.getOrders()
  }

  getOrders(){
    const ordenLocalStorage  = localStorage.getItem("orders").split(',')

    this.setState({
      orders: ordenLocalStorage
    })
  }

  render() {
    return (
      <>
        <AccountTitle />
        <div class="container padding-bottom-3x mb-2">
          <div class="row">
            <UserCard props={user} props2={orders} selected={"mi_cuenta"} />
            <AccountProfileForm />
          </div>
        </div>
      </>
    );
  }
}

export default wrapper(AccountProfile);
