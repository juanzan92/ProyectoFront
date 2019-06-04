import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from './views/home/home';
import Login from './views/login/logInView';
import loginController from './views/login/logController.jsx';


function App() {
  return (
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={loginController}/>
        </Router>
  );
}

export default App;
