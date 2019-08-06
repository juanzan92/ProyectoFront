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
      <label>HELLO WORLD</label>
    )
  };
};

export default logController;