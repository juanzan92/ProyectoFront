import React from "react";

class Accordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //usuarioDeDynamo: this.props.usuarioDeDynamo,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleUserDataSubmit = this.handleUserDataSubmit.bind(this);
        this.handleUserPasswordSubmit = this.handleUserPasswordSubmit.bind(this);
    }

    async getUserByUsername() {
            const usuarioX = await this.props.onChange();
            return usuarioX
    }

    assignDataValues(target) {
          return target.value
    }
    
    assignPasswordValues(target) {
            return target.value.toUpperCase()
    }

    handleChange(event) {
        const value = "";
        const target = event.target;
        
        if (target.type === "password") {
            value = this.assignPasswordValues(target);
        }
        else {
            value = this.assignDataValues(target);
        }

        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async componentDidMount() {

        console.log("parent props")
        console.log(this.props);
        
        console.log("*** PROPS: UsuarioDeDynamo***")
        console.log(this.props.userFromDynamo);

    }

    handleUserDataSubmit = event => {
        this.props.handleUserDataSubmit(this.state.price);
    };

    handleUserPasswordSubmit = event => {
        this.props.handleUserPasswordSubmit(this.state.currentPw, this.state.newPw, this.state.newPwConfirm);
    };

    render() {
        return(
        <>
            <div className="accordion" id="accordion1" role="tablist">
              
            <div className="card">
                <div className="card-header" role="tab">
                  <h6><a className="collapsed" href="#collapseTwo" data-toggle="collapse" aria-expanded="false">#Datos Personales</a></h6>
                </div>
                <div className="collapse show" id="collapseTwo" data-parent="#accordion1" role="tabpanel">
                    <form className="margin-top-1x margin-bottom-1x" onSubmit={this.handleUserDataSubmit}>
                        <div className="row offset-1">
                            <div className="col-md-5">
                                <div className="form-group input-group">
                                    <label htmlFor="userNombres">Nombres</label>
                                    <input
                                        className="form-control form-control-rounded form-control-sm"
                                        type="text"
                                        name="userNombres"
                                        value={this.value}
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
                                        value={this.value}
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
                                    <label htmlFor="userPhone">Teléfono</label>
                                    <input
                                        className="form-control form-control-rounded form-control-sm"
                                        type="text"
                                        name="userPhone"
                                        value={this.value}
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
                                    <label htmlFor="userPais">Pais</label>
                                    <input
                                        className="form-control form-control-rounded form-control-sm"
                                        type="text"
                                        name="userPais"
                                        value={this.value}
                                        onChange={this.handleChange}
                                        pattern="[A-ZÑ\s]{4,20}"
                                        title="Solo texto (4-40 caracteres)."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group input-group">
                                    <label htmlFor="userProvincia">Provincia</label>
                                    <input
                                        className="form-control form-control-rounded form-control-sm"
                                        type="text"
                                        name="userProvincia"
                                        value={this.value}
                                        onChange={this.handleChange}
                                        pattern="[A-ZÑ\s]{4,25}"
                                        title="Solo texto (4-25 caracteres)."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group input-group">
                                    <label htmlFor="userCiudad">Ciudad</label>
                                    <input
                                        className="form-control form-control-rounded form-control-sm"
                                        type="text"
                                        name="userCiudad"
                                        value={this.value}
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
                                value={this.value}
                                onChange={this.handleChange}
                                pattern="[A-ZÑ\s]{3,40}"
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
                                value={this.value}
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
                                value={this.value}
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
                            type="submit">
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
                    <form className="row margin-top-1x margin-bottom-1x" onSubmit={this.handleUserPasswordSubmit}>
                        
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
                            <label htmlFor="userNewPwConfirm">
                                Repetí tu nueva contraseña
                            </label>
                            <input
                                className="form-control form-control-rounded form-control-sm"
                                type="password"
                                name="userNewPwConfirm"
                                id="userPwConf"
                                value={this.value}
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
                            name="submit-btn">
                            ACTUALIZAR CONTRASEÑA
                            </button>
                        </div>

                    </form>
                </div>
              </div>

            </div>
        </>
        );
    }

}

export default Accordion;