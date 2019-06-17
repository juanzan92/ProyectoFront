

import React from 'react';
//import clinte
import * as Ivar from './Ivar';

//Componentes

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';


class logController extends React.Component {
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

    myCallback = (dataFromChild) => {
      if (dataFromChild.email != "" ){
          this.setState={
              isLogin:false 
      }
        //signIn es la funcion de gabo. paso atributos de frm por parametros
        //la funcion de gabo 
        //if  signIn(dataFromChild.user, dataFromChild.pass )
        //{
        //    set
        //}
    }


    changeState() = {
        //this.setState={
            isLogin:true
        }
    }

    render() {

        return (
            <>
                <div>
                    ?isLogin
                    {/*<SignIn props={"isLoading:true"}/>*/}
                    <SignIn callbackFromParent={this.myCallback}/>
                    :
                    <SignUp />
                    
                </div>
            </>
        )
    }

}

export default logController;