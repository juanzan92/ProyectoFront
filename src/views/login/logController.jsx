

import React from 'react';
//import clinte
import * as Ivar from './Ivar';

//Componentes
import Login from './logInView';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { Auth } from 'aws-amplify';

class loginController extends React.Component {
   constructor(props){
    super(props)
    this.state={
        isLogin : true , // Estado que define si le muestro o no spinner,
       
    }
   }

   async signUp(user, password, email) {
    Auth.signUp({
      username: user, //parametrizar
      password: password,
      attributes: {
        email: email
      },
      validationData: []  //optional
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  async signIn(user, password) {
    try {
      await Auth.signIn(user, password);
      console.log(Auth.currentAuthenticatedUser());
   } catch (e) {
     alert(e.message);
   }
   };

  async signOut() {
    Auth.currentSession()
    .catch(err => console.log(err));
  };

  async changePassword(oldPassword, newPassword) {
    Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .catch(err => console.log(err));
  };

  async forgotPassword(user) {
    Auth.forgotPassword(user)
      .catch(err => console.log(err));
  };


  async verifyCurrentUserAttribute() {//recuperar cuenta
    Auth.verifyCurrentUserAttribute('email')
      .then(() => {
        console.log('a verification mail is sent');
      }).catch((e) => {
        console.log('failed with error', e);
      });
  };

    cognitoPOC = () => {
        //la idea es que metas un JSON con los datos de form
        Ivar.authCognito()
    }

    changeState(){
        this.setState={
            isLogin:true
        }
    }

    render() {

        return (
            <>
                <div>
                <div className="btn btn-success" onClick={this.signUp('testuser', 'password123', 'gabrielneil7@gmail.com')}> signUp</div>
        <div className="btn btn-success" onClick={this.signIn('testuser', 'password123')}> signIn</div>
        <div className="btn btn-success" onClick={this.signOut}> signOut</div>
        <div className="btn btn-success" onClick={this.changePassword('password123', 'password111')}> changePassword</div>
        <div className="btn btn-success" onClick={this.forgotPassword('testuser')}> forgotPassword</div>
        <div className="btn btn-success" onClick={this.verifyCurrentUserAttribute}> verifyCurrentUserAttribute</div>

                    ?isLogin
                    {/*<SignIn props={"isLoading:true"}/>*/}
                    <SignUp/>
                    :
                    
                </div>
            </>
        )
    }

}

export default loginController;