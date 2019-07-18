import React, { Component } from 'react';
import wrapper from './Wrapper';
import {Link} from 'react-router-dom';
import { Auth } from 'aws-amplify';

class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async forgotPassword(user) {
        Auth.forgotPassword(user)
          .catch(err => console.log(err));
    };

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render(){
        return(
            <>
                <div className="page-title">
                    <div className="container">
                        <div className="column">
                            <h1>Reestablecer contraseña</h1>
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
                                <li>Reestablecer contraseña</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container padding-bottom-3x mb-2">
                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10">
                                <h2>Forgot your password?</h2>
                                <p>Change your password in three easy steps. This helps to keep your new password secure.</p>
                                <ol className="list-unstyled">
                                    <li><span className="text-primary text-medium">1. </span>Fill in your email address below.</li>
                                    <li><span className="text-primary text-medium">2. </span>We'll email you a temporary code.</li>
                                    <li><span className="text-primary text-medium">3. </span>Use the code to change your password on our secure website.</li>
                                </ol>
                                <form className="card mt-4">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="email-for-pass" />Enter your email address
                                            <input className="form-control" type="text" name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required />
                                            <small className="form-text text-muted" />Type in the email address you used when you registered with s-market. Then we'll email a code to this address.
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary margin-bottom-none" type="submit"
                                        onClick={() => this.forgotPassword(this.state.username)}>RECUPERAR CONTRASEÑA</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
    };
        
};

export default wrapper(ForgotPassword);

