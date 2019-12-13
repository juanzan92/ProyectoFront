import React from "react";
import UserCard from "../../components/account/UserCard";
import wrapper from "../../components/Wrapper";
import AccountProfileForm from "../../components/account/AccountForm";
import AccountTitle from "../../components/account/AccountTitle";
import { Auth } from "aws-amplify";
import { Snackbar } from "@material-ui/core";

class AccountProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      orders: []
    };
    this.getUsuario();
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(userObject => {
      this.setState({
        user: userObject.attributes
      });
    });
  }

  componentDidUpdate() {
    if (this.state.user !== "" && this.state.orders.length === 0) {
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
    if (this.state.orders.length > 0) {
      return (
        <>
          <AccountTitle />
          <div className="container padding-bottom-3x mb-2">
            <div className="row">
              <UserCard
                user={this.state.user}
                orders={this.state.orders}
                selected={"mi_cuenta"}
              />
              {this.state.user && <AccountProfileForm user={this.state.user}/>}
            </div>
          </div>
          <Snackbar />
        </>
      );
    } else {
      return (
        <div className="spinner-center text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export default wrapper(AccountProfile);
