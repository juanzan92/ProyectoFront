import React, { Component } from "react";
import wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code: "",
      new_password: "",
      new_password_confirm: "",
      isPwButtonDisabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirmationCode = this.handleConfirmationCode.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    let value = "";
    if (target.type == "text") {
      value = target.value.toLowerCase();;
    }
    else {
      value = target.value;
    }
    this.setState({
      [name]: value
    });
  }

  async getConfirmationCode() {
    Auth.forgotPassword(this.state.username)
      .then(response => {
        if (response) {
          window.confirm("Codigo de verificación enviado correctamente a su casilla de correo !!!");
          return response.json()
        }
        else {
          throw new Error(response.status);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  async submitNewPassword() {
    this.setState({
      isPwButtonDisabled: true
    });
    setTimeout(() => this.setState({ isPwButtonDisabled: false }), 5000);
    Auth.forgotPasswordSubmit(this.state.username, this.state.code, this.state.new_password_confirm)
      .then(data => {
        if (data) {
          var c = window.confirm("Contraseña actualizada correctamente !!!");
          if (c) {
            window.location.href = "/signin";
          }
          else {
            window.location.reload();
          }
          return data.json()
        }
        else {
          throw new Error(data.status);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleConfirmationCode(event) {
    event.preventDefault();
    this.getConfirmationCode();
  }

  confirmation() {
    var c = window.confirm("Contraseña actualizada correctamente !!!");
    if (c) {
      window.location.href = "/signin";
    }
    else {
      window.location.reload();
    }
  }

  handlePasswordChange(event) {
    event.preventDefault();
    this.submitNewPassword();
    setTimeout(() => this.confirmation(), 1000);
  }

  render() {
    return (
      <>
        <div className="page-title">
          <div className="container">
            <div className="column">
              <h1>Reestablecer contraseña</h1>
            </div>
            <div className="column">
              <ul className="breadcrumbs">
                <li>
                  <Link to="/">
                    <span className="navi-link" />
                    Home
                  </Link>
                </li>
                <li className="separator">&nbsp;</li>
                <li>
                  <Link to="/signin">
                    <span className="navi-link" />
                    Ingresar
                  </Link>
                </li>
                <li className="separator">&nbsp;</li>
                <li>Reestablecer contraseña</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-8 offset-2">
          <div className="text-center text-md-center">
            <h2>¿Olvidaste tu clave de acceso?</h2>
            <p>
              Reestablece tu contraseña de modo seguro en tres simples
              pasos.
            </p>
          </div>
          <div className="text-center text-md-center">
            <ol className="list-unstyled">
              <li>
                <span className="text-primary text-medium">1. </span>Ingresa
                tu nombre de usuario.
              </li>
              <li>
                <span className="text-primary text-medium">2. </span>Te
                enviaremos un enlace a la cuenta de correo asociada.
              </li>
              <li>
                <span className="text-primary text-medium">3. </span>Utiliza
                el enlace para restablecer tu contraseña.
              </li>
            </ol>
          </div>

          <div className="accordion" id="accordion1" role="tablist">

            <div className="card">

              <div className="card-header" role="tab">
                <h6><a href="#collapseOne" data-toggle="collapse" aria-expanded="true">Código de Verificación</a></h6>
              </div>

              <div className="collapse show" id="collapseOne" data-parent="#accordion1" role="tabpanel">


                <form className="row margin-top-1x margin-bottom-1x" onSubmit={this.handleConfirmationCode}>

                  <div className="col-md-6 offset-3">
                    <div className="form-group">
                      <label htmlFor="username">
                        Ingrese su nombre de usuario
                      </label>
                      <input
                        className="form-control form-control-rounded form-control-sm"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        pattern="^[a-z0-9_-]{3,20}"
                        title="Longitud de 3-15 caracteres. No admite caracteres especiales."
                        required
                      />
                      <small className="form-text text-muted">
                        Enviaremos el enlace a la dirección de correo
                        electrónico asociada a tu cuenta.
                      </small>
                    </div>
                  </div>
                  <div className="col-md-6 offset-3 text-center text-md-center">
                    <button
                      className="btn btn-primary margin-bottom-none"
                      type="submit">
                      OBTENER CODIGO
                    </button>
                  </div>
                </form>
              </div>

            </div>


            <div className="card margin-bottom-3x">
              <div className="card-header" role="tab">
                <h6><a href="#collapseTwo" data-toggle="collapse" aria-expanded="true">Recuperar Contraseña</a></h6>
              </div>
              <div className="collapse show" id="collapseTwo" data-parent="#accordion1" role="tabpanel">
                <form className="row margin-top-1x margin-bottom-1x" onSubmit={this.handlePasswordChange}>

                  <div className="col-md-6 offset-3">
                    <div className="form-group input-group">
                      <label htmlFor="code">Ingresá tu Código de Verificación</label>
                      <input
                        className="form-control form-control-rounded form-control-sm"
                        type="text"
                        name="code"
                        value={this.state.code}
                        onChange={this.handleChange}
                        pattern="[0-9]{6}"
                        title="Ingrese el código de confirmación que se ha enviado a su casilla de correo."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 offset-3">
                    <div className="form-group input-group">
                      <label htmlFor="new_password">Ingresá tu nueva contraseña</label>
                      <input
                        className="form-control form-control-rounded form-control-sm"
                        type="password"
                        name="new_password"
                        value={this.state.new_password}
                        onChange={this.handleChange}
                        pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                        title="Longitud mínima de 8 caracteres. Incluir al menos una letra minúscula y un número."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 offset-3">
                    <div className="form-group input-group">
                      <label htmlFor="new_password_confirm">
                        Repetí tu nueva contraseña
                                </label>
                      <input
                        className="form-control form-control-rounded form-control-sm"
                        type="password"
                        name="new_password_confirm"
                        value={this.userNewPwConf}
                        onChange={this.handleChange}
                        pattern={this.state.new_password}
                        title="Las nuevas contraseñas deben coincidir."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 offset-3 text-center text-md-center">
                    <button
                      className="btn btn-primary margin-bottom-none"
                      type="submit"
                      name="submit-password"
                      disabled={this.state.isPwButtonDisabled}
                    >
                      RECUPERAR CONTRASEÑA
                                </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default wrapper(ForgotPassword);
