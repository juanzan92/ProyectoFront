import React from "react";
import wrapper from './Wrapper';
import { Auth } from 'aws-amplify';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      userRol: 'consumer',
      userName: '',
      userNombres: '',
      userApellidos: '',
      userDni: '',
      userPhone: '',
      userAddCalle: '',
      userAddNum: '',
      userAddCp: '',
      userEmail: '',
      userEmailConf: '',
      userPw: '',
      userPwConf: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async signUp(user, password, email) {
    Auth.signUp({
      username: user, 
      password: password,
      attributes: {
        email: email
      },
      validationData: []
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
    this.signUp(this.state.userName, this.state.userPw, this.state.userEmail);
  }

  render() {
    return (
      <>
        <div className="page-title">
          <div className="container">
              <div className="column">
                  <h1>Registrarme</h1>
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
                          <Link to='/signin'>
                              <span className="navi-link"/>Ingresar
                          </Link>
                      </li>
                      <li className="separator">&nbsp;</li>
                      <li>Registrarme</li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="row padding-bottom-2x mb-2">
          <div className="col-md-3"/>
          <div className="login-box col-md-6">
            <div className="padding-top-3x hidden-md-up" />
            <div>
              <div className="col-md-6">
                <h4 className="">Ya eres miembro?</h4>
                <Link to='/signin'>
                      <span/>Ingresar
                </Link>
              </div>
              <div className="col-md-6">
                <h4 className="margin-top-1x">No tienes una cuenta?</h4>
                <span>Unite. Colaborá. Ahorrá.</span>
              </div>
            </div>
            <form className="row margin-top-1x">
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="select-rol">Registrarme como:</label>
                    <select className="form-control" name="userRol" 
                        value={this.state.userRol} 
                        onChange={this.handleChange}>
                      <option value="consumer">Consumer</option>
                      <option value="vendor">Vendor</option>
                    </select>
                  </div>
              </div>
              <div className="col-sm-12">
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Username*</label>
                    <input className="form-control" type="text" name="userName"  
                    value={this.state.userName} 
                    onChange={this.handleChange} 
                    required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Nombres*</label>
                    <input className="form-control" type="text" name="userNombres" 
                        value={this.state.userNombres} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-ln">Apellidos*</label>
                    <input className="form-control" type="text" name="userApellidos"  
                        value={this.state.userApellidos} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">DNI*</label>
                    <input className="form-control" type="text" name="userDni"  
                        value={this.state.userDni} 
                        onChange={this.handleChange} 
                        pattern="[0-9]{8}"
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Teléfono*</label>
                    <input className="form-control" type="text" name="userPhone"
                        value={this.state.userPhone} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Calle*</label>
                    <input className="form-control" type="text" name="userAddCalle"  
                        value={this.state.userAddCalle} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Número*</label>
                    <input className="form-control" type="text" name="userAddNum" 
                        value={this.state.userAddNum} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">CP*</label>
                    <input className="form-control" type="text" name="userAddCp"  
                        value={this.state.userAddCp} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-email">E-mail*</label>
                    <input className="form-control" type="email" name="userEmail"  
                        value={this.state.userEmail} 
                        onChange={this.handleChange} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Confirmar E-mail*</label>
                    <input className="form-control" type="text" name="userEmailConf"  
                        value={this.state.userEmailConf} 
                        onChange={this.handleChange} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required/>
              </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-pass">Constraseña*</label>
                    <input className="form-control" type="password" name="userPw" placeholder="Password" 
                        value={this.state.userPw} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-pass-confirm">Confirmar Constraseña*</label>
                    <input className="form-control" type="password" name="userPwConf" placeholder="Password" 
                        value={this.state.userPwConf} 
                        onChange={this.handleChange} 
                        required/>
                  </div>
              </div>
              <div className="col-12 text-center text-sm-right">
                  <button className="btn btn-primary margin-bottom-none" type="submit"
                    onClick={() => this.signUp(this.state.userName, this.state.userPw, this.state.userEmail)}>Registrate</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  };
};

export default wrapper(SignUp);