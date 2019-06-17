

import React from 'react';
//import clinte
import * as Ivar from './Ivar';

//Componentes
import Login from './logInView';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';


class loginController extends React.Component {
   constructor(props){
    super(props)
    this.state={
        isLogin : true , // Estado que define si le muestro o no spinner,
       
    }
   }

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