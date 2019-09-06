import React from "react";

class AccountProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.getUsuario()
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1
      });
    });
  }

  handleSubmit(event){
    event.preventDefault();
    modifyUser()
  }


  handleChange(event) { 
    const target = event.target;
    const value = this.assignInputValue(target);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  modifyUser(){
    const {user} = this.state;
    const url = ""
    fetch(url,{
      method:"POST"
    }
      
    )
  }

  render() {
    const { user } = this.state;
    if(user){
      window.location.href ="/"
    }
    else{

      return (
        <>
          <div class="col-lg-8">
            <div class="padding-top-2x mt-2 hidden-lg-up"></div>
            <form class="row" onSubmit={()=>this.handleSubmit()}>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-fn">Nombres</label>
                  <input
                    class="form-control"
                    type="text"
                    id="account-fn"
                    value="Daniel"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-ln">Apellidos</label>
                  <input
                    class="form-control"
                    type="text"
                    id="account-ln"
                    value="Adams"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-email">E-mail </label>
                  <input
                    class="form-control"
                    type="email"
                    id="account-email"
                    value="daniel.adams@mail.com"
                    disabled
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-phone">Telefono</label>
                  <input
                    class="form-control"
                    type="text"
                    id="account-phone"
                    value="+7(805) 348 95 72"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-pass">Nueva Contraseña</label>
                  <input class="form-control" type="password" id="account-pass" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="account-confirm-pass">Confirmar Contraserña</label>
                  <input
                    class="form-control"
                    type="password"
                    id="account-confirm-pass"
                  />
                </div>
              </div>
              <div class="col-12">
                <hr class="mt-2 mb-3" />
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                  <div class="custom-control custom-checkbox d-block">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="subscribe_me"
                      checked
                    />
                    <label class="custom-control-label" for="subscribe_me">
                      Quiero recibir ofertas !
                    </label>
                  </div>
                  <button
                    class="btn btn-primary margin-right-none"
                    type="button"
                    data-toast
                    data-toast-position="topRight"
                    data-toast-type="success"
                    data-toast-icon="icon-circle-check"
                    data-toast-title="Success!"
                    data-toast-message="Your profile updated successfuly."
                  >
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
}

export default AccountProfileForm;
