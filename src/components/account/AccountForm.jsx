import React from "react";
import { Auth } from "aws-amplify";

class AccountProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const btn = document.getElementById("submit-btn");
    btn.disabled = true;
  }

  assignInputValue(target) {
    if (target.type === "email") {
      if (target.name !== "userEmail") {
        document.getElementById("userEmailConf").pattern = this.state.userEmail;
      }
      return target.value.toLowerCase();
    }
    if (target.type === "password") {
      if (target.name !== "userPw") {
        document.getElementById("userPwConf").pattern = this.state.userPw;
      }
      return target.value;
    }
    if (target.type === "text") {
      if (target.name !== "userName") {
        return target.value.toUpperCase();
      }
      return target.value.toLowerCase();
    }

    if (target.type === "select-one") {
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

  modifyUser() {
    const { user } = this.state;
    const url = "";
    fetch(url, {
      method: "POST"
    });
  }

  render() {
    let { user } = this.state;

    return (
      <>
        <div className="col-lg-8">
          <div className="padding-top-2x mt-2 hidden-lg-up"></div>
          <form className="row" onSubmit={() => this.handleSubmit()}>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-fn">Nombres</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-fn"
                  value={user.name}
                  onChange={this.handleChange}
                  pattern="[A-ZÑ\s]{3,40}"
                  title="Únicamente texto. Longitud de 3-40 caracteres."
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-ln">Apellidos</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-ln"
                  value={user.given_name}
                  onChange={this.handleChange}
                  pattern="[A-ZÑ\s]{3,40}"
                  title="Únicamente texto. Longitud de 3-40 caracteres."
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group input-group">
                <label htmlFor="reg-phone">DNI*</label>
                <input
                  className="form-control"
                  type="text"
                  name="userDni"
                  value={this.state.userDni}
                  onChange={this.handleChange}
                  pattern="[0-9]{7,8}"
                  title="Numérico. 7 u 8 caracteres."
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-email">E-mail </label>
                <input
                  className="form-control"
                  type="email"
                  id="account-email"
                  value={user.email}
                  onChange={this.handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  disabled
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-phone">Telefono</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-phone"
                  value={user.phone}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-pass">Nueva Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-pass"
                  pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                  title="Longitud mínima de 8 caracteres. Incluir al menos una letra minúscula y un número."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="account-confirm-pass">Confirmar Contraserña</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-confirm-pass"
                  title="Las contraseñas deben coincidir."
                />
              </div>
            </div>
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="custom-control custom-checkbox d-block">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="subscribe_me"
                    checked
                  />
                  <label className="custom-control-label" for="subscribe_me">
                    Quiero recibir ofertas !
                  </label>
                </div>
                <button
                  className="btn btn-primary margin-right-none"
                  id="submit-btn"
                  type="button"
                  data-toast
                  data-toast-position="topRight"
                  data-toast-type="success"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Success!"
                  data-toast-message="Your profile updated successfuly.">
                  Modificar Perfil
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AccountProfileForm;
