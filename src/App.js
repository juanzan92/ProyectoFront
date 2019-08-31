import React, { Component, Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home/home";
import CheckoutController from "./views/checkout/checkoutController";
import vip from "./views/item/vip";
import splash from "./views/splash/splash";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import { Auth } from "aws-amplify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={CheckoutController} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/vip" component={vip} />
        <Route path="/splash" component={splash} />
      </Router>
    );
  }
}

export default App;
