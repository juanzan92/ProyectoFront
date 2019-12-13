import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: [],
      user_username: "",
      user_rol: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
        this.currentActiveUser();
      }
    } catch (e) {
      if (e !== "No current user") {
        //Acá va un toast
        //alert(e)
        console.log(e);
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
    window.location.href = "/";
  };

  currentActiveUser() {
    Auth.currentAuthenticatedUser({})
      .then(userObject => {
        this.setState({
          user: userObject.attributes,
          user_username: userObject.username.toLowerCase(),
          user_rol: userObject.attributes["custom:role"]
        });
        console.log("Authenticated User NavBar");
        console.log(this.state.user);
        console.log("Username");
        console.log(this.state.user_username);
        console.log("User Role");
        console.log(this.state.user_rol);
      })
      .catch(err => console.log(err));
  }

  handleSearch(inputSearch) {
    if (inputSearch) {
    }
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    //console.log(Auth.currentAuthenticatedUser());

    //const isLogged = this.state.isAuthenticated;

    let navToolBar;

    if (this.state.isAuthenticated) {
      if (this.state.user_rol === "consumer") {
        navToolBar = (
          <>
            <div className="row">
              <div className="col-md-3 mt-2">
                <div className="account">
                  <a href="/account" />
                  <i className="icon-head" />
                  <ul className="toolbar-dropdown">
                    <li className="sub-menu-user">
                      <div className="user-ava">
                        <img
                          src="/img/account/avatar-consumer.png"
                          alt={this.state.user_username}
                        />
                      </div>
                      <div className="user-info">
                        <h6 className="user-name">
                          {this.state.user_username}
                        </h6>
                        <span className="text-xs text-muted">Colaborador</span>
                      </div>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a href="/account-profile">Mi Cuenta</a>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a href="/account">Suscripciones</a>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a onClick={this.handleLogout}>Salir</a>
                    </li>
                    <li className="sub-menu-separator" />
                  </ul>
                </div>
              </div>
              <div className="col-md-2 align-middle">
                <div className="btn btn-primary p" onClick={this.handleLogout}>
                  Logout
                </div>
              </div>
            </div>
          </>
        );
      } else {
        navToolBar = (
          <>
            <div className="row">
              <div className="col-md-3 mr-3">
                <nav className="site-menu">
                  <ul>
                    <li>
                      <a href="/upload-oportunity">
                        <span>Publicar</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3 mt-2">
                <div className="account">
                  <a href="/account" />
                  <i className="icon-head" />
                  <ul className="toolbar-dropdown">
                    <li className="sub-menu-user">
                      <div className="user-ava">
                        <img
                          src="/img/account/avatar-vendor.png"
                          alt={this.state.user_username}
                        />
                      </div>
                      <div className="user-info">
                        <h6 className="user-name">
                          {this.state.user_username}
                        </h6>
                        <span className="text-xs text-muted">Oferente</span>
                      </div>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a href="/vendor-profile">Mi Cuenta</a>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a href="/account">Oportunidades</a>
                    </li>
                    <li className="sub-menu-separator" />
                    <li>
                      <a onClick={this.handleLogout}>Salir</a>
                    </li>
                    <li className="sub-menu-separator" />
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-primary p" onClick={this.handleLogout}>
                  Logout
                </div>
              </div>
            </div>
          </>
        );
      }
    } else {
      navToolBar = (
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
          <form class="site-search" method="get">
            <input
              type="text"
              name="site_search"
              placeholder="Type to search..."
              onClick={this.handleSearch}
            />
            <div class="search-tools">
              <span class="clear-search">Clear</span>
              <span class="close-search">
                <i class="icon-cross"></i>
              </span>
            </div>
          </form>
          {/* Branding*/}
          <div className="site-branding">
            <div className="inner">
              {/* Off-Canvas Toggle (#shop-categories)*/}
              <a
                className="offcanvas-toggle cats-toggle"
                //href="#shop-categories"
                data-toggle="offcanvas"
                onClick={this.props.handleOpenOffCanvasMenu}
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
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/aboutus">
                  <span>Quienes somos</span>
                </a>
              </li>
              <li>
                <a href="/faqs">
                  <span>FAQ's</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Toolbar*/}
          <div className="toolbar">
            <div className="inner">
              <div className="tools">{navToolBar}</div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default NavBar;
