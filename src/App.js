
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from './views/home/home';
import Login from './views/login/logController';
import CheckoutController from './views/checkout/checkoutController';
import vip from './views/item/vip';



function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={CheckoutController}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/vip" component={vip}/>
    </Router>
  );
}

export default App;
