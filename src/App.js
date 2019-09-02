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
import account from "./views/account/account";
import Suscription from "./views/suscription/suscription";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={CheckoutController} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/vip" component={vip} />
        <Route path="/splash" component={splash} />
        <Route path="/account" component={account} />

        <Route
          exact
          path="/suscripcion/:suscripction_id"
          component={Suscription}
        />

        <Route path="" component={notFound} />
      </Switch>
    </Router>
  );
}

export default App;
