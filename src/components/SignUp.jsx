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
      tycChecked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);

  }
 
  routeChange() {
    let path = `/`;
    this.props.history.push(path);
  }
  
  async signUp(user, password, email, role, userNombres, userApellidos, userDni, 
    userPhone, userCalle, userNum, userCp) {

    Auth.signUp({
      username: user, 
      password: password,
      attributes: {
        nickname: user,
        email: email,
        name: userNombres,
        given_name: userApellidos,
        address: userCalle,
        'custom:role': role,
        'custom:phone': userPhone,
        'custom:dni': userDni
      },
      validationData: []
    }) 
      .then(function(){
      
        if(role == 'vendor'){
          var body = {
            username: user,
            user_role: role,
            email: email,
            first_name : userNombres,
            last_name : userApellidos
          }

          fetch(`http://localhost:8080/account/users/create_user` , {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body:JSON.stringify(body)
        }).then(
            function () {
              window.location = `https://auth.mercadopago.com.ar/authorization?client_id=5912969040584293&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Flocalhost:3000/splash?user_id=${user}`;
            }).catch(function (e) {
                console.log(e)
            })
        }
      })
      .catch(e => console.log(e));
  };

  assignInputValue(target){
    if (target.type === 'checkbox') {
      return target.checked;
    }
    if (target.type === 'text' && target.name!='userName') {
      return target.value.toUpperCase();
    }
    else {
      return target.value.toLowerCase();
    }
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
                    pattern="^[a-z0-9_-]{3,20}"
                    title="Longitud de 3-15 caracteres. No admite caracteres especiales."
                    required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Nombres*</label>
                    <input className="form-control" type="text" name="userNombres"
                        value={this.state.userNombres} 
                        onChange={this.handleChange} 
                        pattern="[A-ZÑ]{3,40}"
                        title="Únicamente texto. Longitud de 3-40 caracteres."
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-ln">Apellidos*</label>
                    <input className="form-control" type="text" name="userApellidos"  
                        value={this.state.userApellidos} 
                        onChange={this.handleChange} 
                        pattern="[A-ZÑ]{3,40}"
                        title="Únicamente texto. Longitud de 3-40 caracteres."
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">DNI*</label>
                    <input className="form-control" type="text" name="userDni"  
                        value={this.state.userDni} 
                        onChange={this.handleChange} 
                        pattern="[0-9]{7,8}"
                        title="Numérico. 7 u 8 caracteres."
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Teléfono*</label>
                    <input className="form-control" type="text" name="userPhone"
                        value={this.state.userPhone} 
                        onChange={this.handleChange} 
                        pattern="^(?:(?:00)?+549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$"
                        title="Incluir código de área en todo caso. Se admite opcionalmente prefijo internacional (+54) y nacional (15)."
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Calle*</label>
                    <input className="form-control" type="text" name="userAddCalle"  
                        value={this.state.userAddCalle} 
                        onChange={this.handleChange} 
                        pattern="[A-Z]{3,40}"
                        title="Únicamente texto. Longitud de 3-40 caracteres."
                        required/>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">Número*</label>
                    <input className="form-control" type="text" name="userAddNum" 
                        value={this.state.userAddNum} 
                        onChange={this.handleChange} 
                        pattern="[0-9]{1,4}"
                        title="Numérico. Longitud de 1-4 caracteres."
                        required/>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="form-group input-group">
                    <label htmlFor="reg-phone">CP*</label>
                    <input className="form-control" type="text" name="userAddCp"  
                        value={this.state.userAddCp} 
                        onChange={this.handleChange} 
                        pattern="[0-9]{4}"
                        title="Numérico. Longitud de 4 caracteres."
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
                    <label htmlFor="reg-phone">Confirmar e-mail*</label>
                    <input className="form-control" type="email" name="userEmailConf"  
                        value={this.state.userEmailConf} 
                        onChange={this.handleChange} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required/>
              </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-pass">Contraseña*</label>
                    <input className="form-control" type="password" name="userPw" 
                        value={this.state.userPw} 
                        onChange={this.handleChange}
                        pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                        title="Debe contener 8 o más caracteres. Incluir al menos un número y una letra minúscula."
                        required/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="form-group input-group">
                    <label htmlFor="reg-pass-confirm">Confirmar contraseña*</label>
                    <input className="form-control" type="password" name="userPwConf"  
                        value={this.state.userPwConf} 
                        onChange={this.handleChange} 
                        pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                        title="Debe contener 8 o más caracteres. Incluir al menos un número y una letra minúscula."
                        required/>
                  </div>
              </div>
              <div className="custom-control custom-checkbox">
                  <input name="tycChecked" type="checkbox"
                    value={this.state.tycChecked}
                    onChange={this.handleChange}
                    required
                  />Acepto términos y condiciones.
              </div>
              <div className="col-12 text-center text-sm-right">
                  <button className="btn btn-primary margin-bottom-none" type="submit"
                    onClick={() => this.signUp(this.state.userName, this.state.userPw, 
                    this.state.userEmail, this.state.userRol, this.state.userNombres, 
                    this.state.userApellidos, this.state.userDni, this.state.userPhone,
                    this.state.userAddCalle, this.state.userAddNum, this.state.userAddCp)}>Registrate</button>
              </div>
            </form>
          </div>
          <label>{JSON.stringify(this.state)}</label>
        </div>
      </>
    )
  };
};

export default wrapper(SignUp);