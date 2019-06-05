

import React from 'react';
//import clinte
import * as Ivar from './Ivar';

//Componentes
import Login from './logInView';


class loginController extends React.Component {
   constructor(props){
    super(props)
    this.state={
        isLogin : false // Estado que define si el muestro spinner o no
    }
   }

    cognitoPOC = () => {
        //la idea es que metas un JSON con los datos de form
        Ivar.authCognito()
    }

    render() {

        return (
            <>
                <div>
                    <Login />
                </div>
            </>
        )
    }

}

export default loginController;