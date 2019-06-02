import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from './views/home/home';


function App() {
  return (
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
  );
}

export default App;
