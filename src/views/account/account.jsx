import React from "react";

//componentes
import AccountTitle from "../../components/account/AccountTitle";
import { Auth } from "aws-amplify";
import UserCard from "../../components/account/UserCard";
import SuscriptionTable from "../../components/account/SuscriptionTable";

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
    localStorage.getItem();
    //const userId = this.props.match.params.userId;
  }

  fetchOrders() {
    const url = `http://localhost:8080/subscriptions/`;
    fetch(url, {
      method: "GET",
      body: {
        index_name: "username",
        search_pattern: `${state.user.username}`
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
    return `${user.name} ${user.given_name}`;
  }

  render() {
    const { user, orders } = this.state;

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
  }
}

export default wrapper(UserAccount);
