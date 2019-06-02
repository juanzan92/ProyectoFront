import React from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends React.Component {

    render() {

        return (
            <div className="login">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        esto deberia ser el login BRO 
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                </header>
            </div>
        )
    };

}

export default Login;
