import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home/home";
import CheckoutController from "./views/checkout/checkoutController";
import vip from "./views/item/vip";
import splash from "./views/splash/splash";
import SignUp from "./views/login/SignUp";
import SignIn from "./views/login/SignIn";
import ForgotPassword from "./views/login/ForgotPassword";
import UploadOportunity from "./views/vendor/UploadOportunity";
import splash_congrats from "./views/splash/splash_congrats";
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
          <Route path="/upload-oportunity" component={UploadOportunity} />
          <Route exact path="/subscripcion/:subscription_id" component={Subscription} />
          <Route path="/splash" component={splash} />
          <Route path="/splash_congrats" component={splash_congrats} />
          <Route path="*" component={notFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
