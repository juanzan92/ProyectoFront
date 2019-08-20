import React, { Component } from "react";
import wrapper from "../Wrapper";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async forgotPassword(user) {
    Auth.forgotPassword(user).catch(err => console.log(err));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.this.forgotPassword(this.state.username);
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
        <div className="container padding-bottom-3x mb-2">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2>¿Olvidaste tu clave de acceso?</h2>
                <p>
                  Reestablece tu contraseña de modo seguro en tres simples
                  pasos.
                </p>
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
                <form className="card mt-4" onSubmit={this.handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="username">
                        Ingrese su nombre de usuario
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
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
                  <div className="card-footer">
                    <button
                      className="btn btn-primary margin-bottom-none"
                      type="submit"
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
