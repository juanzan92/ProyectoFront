import React from "react";
import logController from "../views/login/logController"
import wrapper from './Wrapper';


class SignIn extends React.Component {

  
  constructor(props){
    super(props);

    this.state = {
      username: '',
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
    console.log(this.state)
    this.props.signoIn(this.state.username, this.state.password);

  }
  
  render() {
        return (
            //colocar brackets react js siempre, permite tomar a todo el content como unico bloque html a renderizar
            //<> al Inicio y </> al Final
            <>
            <div className="row padding-top-3x padding-bottom-3x">
            <div className="col-md-3" />
              <div className="col-md-6">
              
                <form class="login-box" onSubmit={this.handleSubmit}>

                  <div class="row margin-bottom-1x">

                    <div class="col-xl-4 col-md-6 col-sm-4">
                        <a class="btn btn-sm btn-block facebook-btn" href="#">
                            <i class="socicon-facebook"></i>
                        &nbsp;Facebook login</a>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-4">
                        <a class="btn btn-sm btn-block twitter-btn" href="#">
                            <i class="socicon-twitter"></i>
                        &nbsp;Twitter login</a>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-4">
                        <a class="btn btn-sm btn-block google-btn" href="#">
                            <i class="socicon-googleplus"></i>
                        &nbsp;Google+ login</a>
                    </div>
                  </div>
                  
                  <h4 class="margin-bottom-1x">Ingresá con tu usuario o e-mail</h4>

                  <div class="form-group input-group">
                  <span class="input-group-addon"><i class="icon-mail"></i></span>
                    <input name="username" class="form-control" type="text" placeholder="Email" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required/>
                  </div>

                  
                  <div class="form-group input-group">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input name="password" class="form-control" type="password" placeholder="Password" 
                      value={this.state.password} 
                      onChange={this.handleChange} 
                      required/>
                  </div>

                  
                  <div class="d-flex flex-wrap justify-content-between padding-bottom-1x">

                    <div class="custom-control custom-checkbox">
                        <input name="remember_me" type="checkbox"
                              value={this.state.remember_me}
                              onChange={this.handleChange}
                              />
                        <label for="remember_me">Remember me</label>
                    </div>

                    <a class="navi-link" href="account-password-recovery.html">Aca componente recovery pw</a>
                  </div>

                  <span>{JSON.stringify(this.state)}</span>
                  <br/>

                  <div class="text-center text-sm-center">
                    <button class="btn btn-primary margin-bottom-none" type="submit"
                        onClick={this.handleSubmit}>Ingresá</button>
                    
                    <button class="btn btn-primary margin-bottom-none" type="" 
                        onClick={this.handleSubmit}>Registrate</button>
                  </div>

                </form>
                
            </div>
            
          </div>
            </>
        )

                /*<div className="btn btn-success" onClick={this.signUp('testuser2', 'password111', 'lucasjdr_97@hotmail.com')}> signUp</div>
        <div className="btn btn-success" onClick={this.signIn('testuser2', 'password123')}> signIn</div>
        <div className="btn btn-success" onClick={this.signOut}> signOut</div>
        <div className="btn btn-success" onClick={this.changePassword('password123', 'password111')}> changePassword</div>
        <div className="btn btn-success" onClick={this.forgotPassword('carlos')}> forgotPassword</div>
        <div className="btn btn-success" onClick={this.verifyCurrentUserAttribute}> verifyCurrentUserAttribute</div>*/

    };
};

export default wrapper(SignIn);