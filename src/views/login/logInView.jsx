import React from 'react';

//componentes
import SingIn from '../../components/SingIn';
//wraper de componentes
import wraper from  '../../components/Wrapper';

class Login extends React.Component {

    render() {

        return (
           <>
           <SingIn/>
           </>
        )
    };

}

export default wraper(Login);
