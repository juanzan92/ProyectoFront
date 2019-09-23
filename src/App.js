import React, { Component, Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home/home";
import CheckoutController from "./views/checkout/checkoutController";
import vip from "./views/item/vip";
import splash from "./views/splash/splash";
import SignUp from "./components/LogIn/SignUp";
import SignIn from "./components/LogIn/SignIn";
import ForgotPassword from "./components/LogIn/ForgotPassword";
import notFound from "./views/notFound";
import Account from "./views/account/account";
import Subscription from "./views/suscription/subscription";
import AccountProfile from "./views/account/account-profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={CheckoutController} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/vip/:item_id" component={vip} />
          <Route exact path="/account-profile" component={AccountProfile} />
          <Route exact path="/account" component={Account} />

          <Route
            exact
            path="/subscripcion/:subscription_id"
            component={Subscription}
          />

          <Route path="/splash" component={splash} />
          <Route path="*" component={notFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
