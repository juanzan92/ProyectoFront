import React from 'react';

//componentes
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
//wraper de componentes
import wraper from  '../../components/Wrapper';

class Login extends React.Component {

    render() {

        return (
           <>
           <SignIn/>
           </>
        )
    };

}

export default wraper(Login);
