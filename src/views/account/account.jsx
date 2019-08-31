import React from "react";

//componentes
import AccountTitle from "../../components/account/AccountTitle";
import { Auth } from "aws-amplify";
import UserCard from "../../components/account/UserCard";
import SuscriptionTable from "../../components/account/SuscriptionTable";
import wrapper from "../../components/Wrapper";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      user: this.getUsuario(),
      orders: []
    };
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1
      });
    });
  }

  componentDidMount() {
    if (this.state.isLoading) {
      localStorage.getItem();
      //const userId = this.props.match.params.userId;
    }
  }

  fetchOrders() {
    const url = `http://localhost:8080/subscriptions/`;
    fetch(url, {
      method: "GET",
      body: {
        index_name: "username",
        search_pattern: `${this.state.user.username}`
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
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

  getFullname() {
    return `${this.state.user.name} ${this.state.user.given_name}`;
  }

  render() {
    const { user, orders } = this.state;
    if (user) {
      return (
        <>
          <AccountTitle />
          <div class="container padding-bottom-3x mb-2">
            <div class="row">
              <UserCard props={user} props2={orders} />
              <SuscriptionTable props={orders} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div class="spinner-border text-info m-2" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export default wrapper(UserAccount);
