
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from './views/home/home';
import Login from './views/login/logController';
import CheckoutController from './views/checkout/checkoutController';
import vip from './views/item/vip';
import splash from './views/splash/splash';



function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={CheckoutController}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/vip" component={vip}/>
      <Route path="/splash" component={splash}/>
    </Router>
  );
}

export default App;
