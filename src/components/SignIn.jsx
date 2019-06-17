import React from "react";

import wrapper from './Wrapper';


class SignIn extends React.Component {
    render() {
        return (
            //colocar brackets react js siempre, permite tomar a todo el content como unico bloque html a renderizar
            //<> al Inicio y </> al Final
            <>
            <div className="row padding-top-3x padding-bottom-3x">
            <div className="col-md-3"></div>
            <div className="col">
            <form class="login-box" method="post">

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

              <h4 class="margin-bottom-1x">Or using form here</h4>

              <div class="form-group input-group">
              <input class="form-control" type="email" placeholder="Email" required/>
                    <span class="input-group-addon"><i class="icon-mail"></i></span>
              
              </div>

              <div class="form-group input-group">
                <input class="form-control" type="password" placeholder="Password" required/>
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                
              </div>

              <div class="d-flex flex-wrap justify-content-between padding-bottom-1x">
                <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="remember_me" checked/>
                  <label class="custom-control-label" for="remember_me">Remember me</label>
                  
                </div>
                <a class="navi-link" href="account-password-recovery.html">Te la olvidaste chinwenwencha?</a>
              </div>

              <div class="text-center text-sm-right">
                <button class="btn btn-primary margin-bottom-none" type="submit">Login</button>
              </div>
            </form>
            </div>
            <div className ="col-md-3"></div>
            </div>
            </>
        )
    };
};

export default wrapper(SignIn);