import React from "react";

//componentes
import AccountTitle from "../../components/account/AccountTitle";
import { Auth } from "aws-amplify";
import UserCard from "../../components/account/UserCard";
import SuscriptionTable from "../../components/account/SuscriptionTable";
import wrapper from "../../components/Wrapper";
const Context = React.createContext();

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      user: "",
      orders: []
    };
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }

  componentDidMount() {
    this.getUsuario();
    if (this.state.isLoading) {
    }
  }

  componentDidUpdate() {
    if (this.state.user != "" && this.state.orders.length == 0) {
      this.fetchOrders();
    }

    if (this.state.orders != []) {
      localStorage.setItem("orders", this.state.orders.join(","));
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
    const { user, orders } = this.state;
    const selected = "suscripciones";
    if (user && orders != orders.length > 0) {
      return (
        <Context.Provider value={selected}>
          <AccountTitle />
          <div class="container padding-bottom-3x mb-2">
            <div class="row">
              <UserCard user={user} orders={orders} selected="suscripciones" />
              <SuscriptionTable ordenes={orders} />
            </div>
          </div>
        </Context.Provider>
      );
    } else {
      return (
        <div class="spinner-border text-info m-2 center" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export const ContextSelected = Context;
export default wrapper(UserAccount);
