import React from 'react';
import * as Ivar from './Ivar';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { Auth } from 'aws-amplify';

class logController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isUser: true,
      email: '',
      password: '',
    }
  }

  async signUp(user, password, email) {
    Auth.signUp({
      username: user,
      password: password,
      attributes: {
        email: email
      },
      validationData: []
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

  async verifyCurrentUserAttribute() {
    Auth.verifyCurrentUserAttribute('email')
      .then(() => {
        console.log('a verification mail is sent');
      }).catch((e) => {
        console.log('failed with error', e);
      });
  };

  render() {
    return (
      <>
        <div className="btn btn-success" onClick={() => this.signUp('yorio', 'yorio123', 'cojezalifu@cloud-mail.net')}> signUp</div>
        <div className="btn btn-success" onClick={() => this.signIn('yorio', 'yorio123')}> signIn</div>
        <div className="btn btn-success" onClick={() => this.signOut}> signOut</div>
        <div className="btn btn-success" onClick={() => this.changePassword('password123', 'password111')}> changePassword</div>
        <div className="btn btn-success" onClick={() => this.forgotPassword('carlos')}> forgotPassword</div>
        <div className="btn btn-success" onClick={() => this.verifyCurrentUserAttribute}> verifyCurrentUserAttribute</div>
        { 
          this.state.isUser ? (
            <SignIn />
          ) : (
              <SignUp />
            )
        }
      </>
    )
  };
};

export default logController;