

import React from 'react';
//import clinte
import * as Ivar from './Ivar';

//Componentes

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { Auth } from 'aws-amplify';


class logController extends React.Component {
   constructor(props){
    super(props)

    this.state={
        isLogin : true , // Estado que define si le muestro o no spinner,
        email: '',
        password: '',
       }
      
       this.signIn = this.signIn.bind(this);
       //this.handleClick = this.handleClick.bind(this);
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
    console.log(user, password)
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

    myCallback = (dataFromChild) => {
      if (dataFromChild.email !== "" ){
          this.setState={
              isLogin:false 
      }
    }
  }
        //signIn es la funcion de gabo. paso atributos de frm por parametros
        //la funcion de gabo 
        //if  signIn(dataFromChild.user, dataFromChild.pass )
        //{
        //    set
        //}
   


    //changeState() = {
        //this.setState={
            //isLogin:true
        //}
    //}

    /*
              <div className="btn btn-success" onClick={this.signOut}> signOut</div>
              <div className="btn btn-success" onClick={this.changePassword('password123', 'password111')}> changePassword</div>
              <div className="btn btn-success" onClick={this.forgotPassword('carlos')}> forgotPassword</div>
              <div className="btn btn-success" onClick={this.verifyCurrentUserAttribute}> verifyCurrentUserAttribute</div>
              <div className="btn btn-success" onClick={this.signIn('testuser2', 'password123')}> signIn</div>
              <div className="btn btn-success" onClick={this.signUp('test_cognito', 'admin123', 'lucasjdelrio@hotmail.com')}> signUp</div>

              */

    render() {

        return (
        <>
          <div>
              
          </div>
          
          {/*?isLogin*/}
          {/*<SignIn props={"isLoading:true"}/>
        
          <SignIn signoIn={()=>this.signIn()}/>
          
        */} 
          
        
          <SignIn signoIn={()=>this.signIn()}/>
                
        </>
        )
    };
};

export default logController;