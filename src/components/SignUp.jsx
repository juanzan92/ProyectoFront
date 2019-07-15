import React from "react";

import wrapper from './Wrapper';


class SignUp extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      remember_me: false,
      tieneCuenta: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value 
    });

    /*
    this.setState({ email: event.target.value.toLowerCase(), 
                    password: event.target.value, 
                    remember: event.target.value});*/
  }
  
  handleChecked () {
    this.setState({remember_me: !this.state.remember_me});
  }

  handleSubmit(event) {
    //event.preventDefault();
    //const data = new FormData(event.target);
    //this.props.callbackFromParent(data);
    this.props.signoIn(this.state.email, this.state.password);

  }


  render() {


    return (
      //colocar brackets react js siempre, permite tomar a todo el content como unico bloque html a renderizar
      //<> al Inicio y </> al Final

      <>
        <div className="row padding-top-3x padding-bottom-3x">
          <div className="col-md-3" />
          <div class="login-box col-md-6">
            <div class="padding-top-3x hidden-md-up" />
            <h3 class="margin-bottom-1x">No eres miembro?</h3>
            <p>Te tomará menos de un minuto registrarte. Unite. Colaborá. Ahorrá.</p>

            <form class="row" onSubmit={this.handleSubmit} >

            <div class="col-sm-6">
                <div class="form-group">
                  <label for="select-rol">Registrarme como:</label>
                  <select class="form-control" id="select-rol">
                    <option>Consumer</option>
                    <option>Vendor</option>
                  </select>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                  <label for="reg-fn">Username*</label>
                  <input class="form-control" type="text" id="reg-fn" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-fn">Nombres*</label>
                  <input class="form-control" type="text" id="reg-fn" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-ln">Apellidos*</label>
                  <input class="form-control" type="text" id="reg-ln" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-phone">DNI*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-phone">Teléfono*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-phone">Calle*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="reg-phone">Número*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="reg-phone">CP*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-email">E-mail*</label>
                  <input class="form-control" type="email" id="reg-email" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-phone">Confirmar E-mail*</label>
                  <input class="form-control" type="text" id="reg-phone" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-pass">Constraseña*</label>
                  <input class="form-control" type="password" id="reg-pass" required="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-pass-confirm">Confirmar Constraseña*</label>
                  <input class="form-control" type="password" id="reg-pass-confirm" required="" />
                </div>
              </div>
              <div class="col-12 text-center text-sm-right">
                <button class="btn btn-primary margin-bottom-none" type="submit">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  };
};

export default wrapper(SignUp);