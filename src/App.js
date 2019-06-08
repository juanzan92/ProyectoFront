
import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from './views/home/home';

import Login from './views/login/logController';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
   
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
