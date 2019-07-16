import React from "react";
import logController from "../views/login/logController"
import wrapper from './Wrapper';
import { Auth } from 'aws-amplify';
import SignUp from './SignUp';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      remember_me: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async signIn(user, password) {
    console.log(user, password)
    try {
      await Auth.signIn(user, password);
      console.log(Auth.currentAuthenticatedUser());
    } catch (e) {
      alert(e.message);
    }
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.signIn(this.state.username, this.state.password);
    window.alert(this.state)
  }

  render() {
    return (
      <>
        <div className="row padding-top-3x padding-bottom-3x">
          <div className="col-md-3" />
          <div className="col-md-6">

            <form className="login-box">

              <div className="row margin-bottom-1x">

                <div className="col-xl-4 col-md-6 col-sm-4">
                  <a className="btn btn-sm btn-block facebook-btn" href="#">
                    <i className="socicon-facebook"></i>
                    &nbsp;Facebook login</a>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-4">
                  <a className="btn btn-sm btn-block twitter-btn" href="#">
                    <i className="socicon-twitter"></i>
                    &nbsp;Twitter login</a>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-4">
                  <a className="btn btn-sm btn-block google-btn" href="#">
                    <i className="socicon-googleplus"></i>
                    &nbsp;Google+ login</a>
                </div>
              </div>

              <h4 className="margin-bottom-1x">Ingresá con tu usuario o e-mail</h4>

              <div className="form-group input-group">
                <span className="input-group-addon"><i className="icon-mail"></i></span>
                <input name="username" className="form-control" type="text" placeholder="Email"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required />
              </div>


              <div className="form-group input-group">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input name="password" className="form-control" type="password" placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required />
              </div>


              <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">

                <div className="custom-control custom-checkbox">
                  <input name="remember_me" type="checkbox"
                    value={this.state.remember_me}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="remember_me">Remember me</label>
                </div>

                <a className="navi-link" href="account-password-recovery.html">Aca componente recovery pw</a>
              </div>

              <br />
              <span>{JSON.stringify(this.state)}</span>
              <br />

              <div className="text-center text-sm-center">
                <button className="btn btn-primary margin-bottom-none" type="submit"
                  onClick={() => this.signIn(this.username, this.password)}>Ingresá</button>

                <button className="btn btn-primary margin-bottom-none" type=""
                  onClick={() => window.alert(this.state.username + ', ' + this.state.password)}>Registrate</button>
              </div>

            </form>
          </div>
        </div>
      </>
    )
  };
};

export default wrapper(SignIn);