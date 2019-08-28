import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      activeUser: this.currentActiveUser()
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

  currentActiveUser() {
    Auth.currentAuthenticatedUser({})
      .then(user => {
        this.setState({
          activeUser: user.username.toUpperCase()
        });
        console.log(JSON.stringify(this.state.activeUser));
      })
      .catch(err => console.log(err));
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    console.log(Auth.currentAuthenticatedUser());

    const isLogged = this.state.isAuthenticated;
    let btnNavBar;
    if (isLogged) {
      btnNavBar = (
        <>
          <div className="row">
            <span className="col-md-5 mb-3 padding-top-1x">
              {"HOLA, " + this.state.activeUser}
            </span>
            <div className="col-md-2 mt-2">
              <div className="account">
                <a href="/" />
                <i className="icon-head" />
                <ul className="toolbar-dropdown">
                  <li className="sub-menu-user">
                    <div className="user-ava">
                      <img
                        src="img/account/user-ava-sm.jpg"
                        alt="Daniel Adams"
                      />
                    </div>
                    <div className="user-info">
                      <h6 className="user-name">Daniel Adams</h6>
                      <span className="text-xs text-muted">
                        290 Reward points
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="account-profile.html">My Profile</a>
                  </li>
                  <li>
                    <a href="account-orders.html">Orders List</a>
                  </li>
                  <li>
                    <a href="account-wishlist.html">Wishlist</a>
                  </li>
                  <li className="sub-menu-separator" />
                  <li>
                    <a href="/">
                      {" "}
                      <i className="icon-unlock" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 align-middle">
              <div className="btn btn-primary p" onClick={this.handleLogout}>
                LOGOUT
              </div>
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
                <img src="/img/logo/logo-smarket-favico.png" alt="Smarket" />
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
                  <span>Hurry up!</span>
                </a>
              </li>
              <li className="has-megamenu">
                <a href="/">
                  <span>Categorias</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Quienes somos</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>FAQ</span>
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
