import React from "react";
import logController from "../views/login/logController"
import wrapper from './Wrapper';
import { Auth } from 'aws-amplify';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      remember_me: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async signIn(user, password) {
    try {
      await Auth.signIn(user, password);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  assignInputValue(target){
    if (target.type === 'checkbox') {
      return target.checked;
    }
      return target.value.toLowerCase();
  }

  handleChange(event) {
    const target = event.target;
    const value = this.assignInputValue(target);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.signIn(this.state.username, this.state.password);
  }

   validate(name, email, password) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (this.state.username.length === 0) {
      errors.push("Name can't be empty");
    }
  
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
  
    if (this.state.password.length < 8) {
      errors.push("Password should be at least 6 characters long");
    }

    if (this.state.password.indexOf(".") === -1) {
      errors.push("Password should be at least 6 characters long");
    }
    return errors;
  }

  render() {
    return (
      <>
        <div className="page-title">
          <div className="container">
              <div className="column">
                  <h1>Ingresar</h1>
              </div>
              <div className="column">
                  <ul className="breadcrumbs">
                      <li>
                          <Link to='/'>
                              <span className="navi-link"/>Home
                          </Link>
                      </li>
                      <li className="separator">&nbsp;</li>
                      <li>
                          <Link to='/signup'>
                              <span className="navi-link"/>Registrarme
                          </Link>
                      </li>
                      <li className="separator">&nbsp;</li>
                      <li>Ingresar</li>
                  </ul>
              </div>
            </div>
        </div>

        <div className="row padding-bottom-3x mb-2">
          <div className="col-md-4" />
          <div className="col-md-4">

            <form className="login-box" onSubmit={this.handleSubmit}>

              <h4 className="margin-bottom-1x">Ingresar a tu cuenta</h4>

              <div className="form-group input-group">
                <span className="input-group-addon"><i className="icon-mail"></i></span>
                <input name="username" className="form-control" type="text" placeholder="Usuario o Correo"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required/>
              </div>

              <div className="form-group input-group">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input name="password" className="form-control" type="password" placeholder="Contraseña"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required />
              </div>

              <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">

                <div className="custom-control custom-checkbox">
                  <input name="remember_me" type="checkbox"
                    value={this.state.remember_me}
                    onChange={this.handleChange}
                  />Recuérdame
                </div>
                <div> 
                  <Link to='/forgot-password'>
                  <span className="navi-link"/>¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div className="text-center text-sm-center">
                <button className="btn btn-primary margin-bottom-none" type="submit">INGRESÁ</button>

                <Link to='/signup'>
                <button className="btn btn-primary margin-bottom-none">CREAR CUENTA</button>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </>
    )
  };
};

export default wrapper(SignIn);