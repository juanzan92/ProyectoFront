import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
//import App from '../App';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    window.location.href = "/signin";
  };

  render() {
    const isLogged = this.state.isAuthenticated;
    let btnNavBar;
    if (isLogged) {
      btnNavBar = (
        <>
          <div>
            <div className="btn btn-primary p" onClick={this.handleLogout}>
              LOGOUT
            </div>
          </div>
        </>
      );
    } else {
      btnNavBar = (
        <>
          <Link to="/signin">
            <div className="btn btn-primary p">
              <i className="icon-unlock" /> INGRESAR
            </div>
          </Link>
          <Link to="/signup">
            <div className="btn btn-primary p"> REGISTRATE</div>
          </Link>
        </>
      );
    }

    return (
      <>
        <header className="navbar navbar-sticky">
          {/* Search*/}
          <div className="site-branding">
            <div className="inner">
              {/* Off-Canvas Toggle (#shop-categories)*/}
              <a
                className="offcanvas-toggle cats-toggle"
                href="#shop-categories"
                data-toggle="offcanvas"
              />
              {/* Off-Canvas Toggle (#mobile-menu)*/}
              <a
                className="offcanvas-toggle menu-toggle"
                href="#mobile-menu"
                data-toggle="offcanvas"
              />
              {/* Site Logo*/}
              <a className="site-logo" href="/">
                <img src="./img/logo-smarket.png" alt="Smarket" />
              </a>
            </div>
          </div>
          {/* Main Navigation*/}
          <nav className="site-menu">
            <ul>
              <li className="has-megamenu active">
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Shop</span>
                </a>
              </li>
              <li className="has-megamenu">
                <a href="/">
                  <span>Mega Menu</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Account</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Toolbar*/}
          <div className="toolbar">
            <div className="inner">
              <div className="tools">{btnNavBar}</div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default NavBar;
