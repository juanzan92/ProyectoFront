import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home/home';
import Login from './views/login/logController';
import CheckoutController from './views/checkout/checkoutController';
import vip from './views/item/vip';
import splash from './views/splash/splash';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
//import { Auth } from 'aws-amplify';
//import awsmobile from './aws-exports';
//Amplify.configure(awsmobile);
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
// Get the aws resources configuration parameters
//import awsconfig from './aws-exports'; // if you are using Amplify CLI

Amplify.configure(awsmobile);


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={CheckoutController}/>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/vip" component={vip}/>
      <Route path="/splash" component={splash}/>
    </Router>
  );
}

export default withAuthenticator(App, true);
//export default App;