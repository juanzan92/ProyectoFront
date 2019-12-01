import React from "react";
import { Auth } from "aws-amplify";

class VendorAccountProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      userDynamo: null,

      userNombres: "",
      userApellidos: "",
      userRol: "",
      userEmail: "",
      userTelefono: "",
      userDni: "",
      userAddCalle: "",
      userAddNum: "",
      userAddCp: "",
      userAddPiso: null,
      userAddDepto: null,
      userAddPais: "",
      userAddPvcia: "",
      userAddCiudad: "",

      userCurrentPw: "",
      userNewPw: "",
      userNewPwConf: "",

      isPwButtonDisabled: false,
      isDataButtonDisabled: false
    };

    this.getUserByUsername = this.getUserByUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitUserDataUpload = this.submitUserDataUpload.bind(this);
    this.submitPasswordUpload = this.submitPasswordUpload.bind(this);
  }


  async componentDidMount() {
    const dynamoUser = await this.getUserByUsername();
    this.setState({
      userDynamo: dynamoUser.data,
      userNombres: dynamoUser.first_name,
      userApellidos: dynamoUser.last_name,
      userRol: dynamoUser.user_role,
      userEmail: dynamoUser.email,
      userTelefono: dynamoUser.phone,
      userDni: dynamoUser.dni,
      userAddCalle: dynamoUser.address.address_name,
      userAddNum: dynamoUser.address.address_number,
      userAddCp: dynamoUser.address.address_code,
      userAddPais: dynamoUser.address.address_country,
      userAddPvcia: dynamoUser.address.address_region,
      userAddCiudad: dynamoUser.address.address_city
    })
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    let value = "";
    if (target.type === "password") {
      value = target.value;
    }
    else {
      value = target.value.toUpperCase();
    }
    this.setState({
      [name]: value
    });
  }

  getUserByUsername() {
    return new Promise(resolve => {
      fetch("http://localhost:8080/account/users?username=" + this.state.user.nickname, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          else {
            return response.json()
          }
        })
        .then(userData => {
          resolve(userData)
        })
        .catch(e => console.log(e));
    });
  }

  updateUser() {
    var body = {
      username: this.props.user.nickname,
      first_name: this.state.userNombres,
      last_name: this.state.userApellidos,
      user_role: this.state.userRol,
      email: this.state.userEmail,
      phone: this.state.userTelefono,
      dni: this.state.userDni,
      address: {
        address_name: this.state.userAddCalle,
        address_number: this.state.userAddNum,
        address_code: this.state.userAddCp,
        floor: null,
        apartment: null,
        address_country: this.state.userAddPais,
        address_region: this.state.userAddPvcia,
        address_city: this.state.userAddCiudad
      }
    };

    fetch("http://localhost:8080/account/users", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(body)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        else {
          this.setState({
            isDataButtonDisabled: true
          });
          setTimeout(() => this.setState({ isDataButtonDisabled: false }), 5000);
          return response.json();
        }
      })
      .then(response => {
        var c = window.confirm("Usuario actualizado correctamente !!!");
        if (c) {
          window.location.reload();
        }
        else {
          window.location.href = "/account";
        }
        return response
      })
      .catch(e => console.log(e));
  }

  async updatePassword() {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, this.state.userCurrentPw, this.state.userNewPwConf)
        .then(response => {
          if (response) {
            this.setState({
              isPwButtonDisabled: true
            });
            setTimeout(() => this.setState({ isPwButtonDisabled: false }), 5000);
            var c = window.confirm("Contraseña actualizada correctamente !!!");
            if (c) {
              window.location.reload();
            }
            else {
              window.location.href = "/account";
            }
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
    catch (error) {
      alert(error.message);
      throw error;
    }
  }

  submitPasswordUpload(event) {
    event.preventDefault();
    this.updatePassword();
  }

  submitUserDataUpload(event) {
    event.preventDefault();
    this.updateUser();
    console.log("Usuario correctamente actualizado!!!");
  }

  render() {
    if (this.state.userDynamo !== null) {
      return (
        <>
          <div className="col-md-8">
            <div className="accordion" id="accordion1" role="tablist">
              <div className="card">
                <div className="card-header" role="tab">
                  <h6><a className="collapsed" href="#collapseTwo" data-toggle="collapse" aria-expanded="false">#Datos Personales</a></h6>
                </div>
                <div className="collapse show" id="collapseTwo" data-parent="#accordion1" role="tabpanel">
                  <form className="margin-top-1x margin-bottom-1x" onSubmit={this.submitUserDataUpload}>
                    <div className="row offset-1">
                      <div className="col-md-5">
                        <div className="form-group input-group">
                          <label htmlFor="userNombres">Nombres</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userNombres"
                            value={this.state.userNombres}
                            onChange={this.handleChange}
                            pattern="[A-ZÑ\s]{3,40}"
                            title="Únicamente texto. Longitud de 3-40 caracteres."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-group input-group">
                          <label htmlFor="userApellidos">Apellidos</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userApellidos"
                            value={this.state.userApellidos}
                            onChange={this.handleChange}
                            pattern="[A-ZÑ\s]{3,40}"
                            title="Únicamente texto. Longitud de 3-40 caracteres."
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row offset-1">
                      <div className="col-md-6">
                        <div className="form-group input-group">
                          <label htmlFor="userTelefono">Teléfono</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userTelefono"
                            value={this.state.userTelefono}
                            onChange={this.handleChange}
                            pattern="[0-9]{10}"
                            title="Incluir código de área en todo caso. Se admite opcionalmente prefijo internacional (+54) y nacional (15)."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row offset-1">
                      <div className="col-md-4">
                        <div className="form-group input-group">
                          <label htmlFor="userAddPais">Pais</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddPais"
                            value={this.state.userAddPais}
                            onChange={this.handleChange}
                            pattern="[A-ZÑ\s]{4,20}"
                            title="Solo texto (4-40 caracteres)."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group input-group">
                          <label htmlFor="userAddPvcia">Provincia</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddPvcia"
                            value={this.state.userAddPvcia}
                            onChange={this.handleChange}
                            pattern="[A-ZÑ\s]{4,25}"
                            title="Solo texto (4-25 caracteres)."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group input-group">
                          <label htmlFor="userAddCiudad">Ciudad</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddCiudad"
                            value={this.state.userAddCiudad}
                            onChange={this.handleChange}
                            pattern="[A-ZÑ\s]{4,30}"
                            title="Solo texto (4-30 caracteres)."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row offset-1">
                      <div className="col-md-5">
                        <div className="form-group input-group">
                          <label htmlFor="userAddCalle">Calle</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddCalle"
                            value={this.state.userAddCalle}
                            onChange={this.handleChange}
                            pattern="[A-Z0-9Ñ\s]{3,40}"
                            title="Únicamente texto. Longitud de 3-40 caracteres."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group input-group">
                          <label htmlFor="userAddNum">Número</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddNum"
                            value={this.state.userAddNum}
                            onChange={this.handleChange}
                            pattern="[0-9]{1,4}"
                            title="Numérico. Longitud de 1-4 caracteres."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group input-group">
                          <label htmlFor="userAddCp">CP</label>
                          <input
                            className="form-control form-control-rounded form-control-sm"
                            type="text"
                            name="userAddCp"
                            value={this.state.userAddCp}
                            onChange={this.handleChange}
                            pattern="[0-9]{4}"
                            title="Numérico. Longitud de 4 caracteres."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center text-md-center">
                        <button
                          className="btn btn-primary margin-bottom-none"
                          type="submit"
                          id="submit-userdata"
                          disabled={this.state.isDataButtonDisabled}
                        >
                          ACTUALIZAR
                                    </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab">
                  <h6><a href="#collapseOne" data-toggle="collapse" aria-expanded="true">#Contraseña</a></h6>
                </div>
                <div className="collapse show" id="collapseOne" data-parent="#accordion1" role="tabpanel">
                  <form className="row margin-top-1x margin-bottom-1x" onSubmit={this.submitPasswordUpload}>

                    <div className="col-md-6 offset-3">
                      <div className="form-group input-group">
                        <label htmlFor="userCurrentPw">Contraseña actual</label>
                        <input
                          className="form-control form-control-rounded form-control-sm"
                          type="password"
                          name="userCurrentPw"
                          value={this.userCurrentPw}
                          onChange={this.handleChange}
                          pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                          title="Ingrese su contraseña actual."
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-3">
                      <div className="form-group input-group">
                        <label htmlFor="userNewPw">Ingresá tu nueva contraseña</label>
                        <input
                          className="form-control form-control-rounded form-control-sm"
                          type="password"
                          name="userNewPw"
                          value={this.state.userNewPw}
                          onChange={this.handleChange}
                          pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                          title="Longitud mínima de 8 caracteres. Incluir al menos una letra minúscula y un número."
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-3">
                      <div className="form-group input-group">
                        <label htmlFor="userNewPwConf">
                          Repetí tu nueva contraseña
                                </label>
                        <input
                          className="form-control form-control-rounded form-control-sm"
                          type="password"
                          name="userNewPwConf"
                          id="userPwConf"
                          value={this.userNewPwConf}
                          onChange={this.handleChange}
                          pattern={this.state.userNewPw}
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
                        ACTUALIZAR CONTRASEÑA
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
    else {
      return (
        <div className="spinner-center text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

  }
}

export default VendorAccountProfileForm;