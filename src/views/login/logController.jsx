

import React from   'react';
import Login from './logInView';
import Ragnar from '../../service/apiService';
const ragnar =new Ragnar()





class loginController extends React.Component {

loggearGiladas(){
    console.log("hoasodoasodoaosdas");

}

callBACK = () => {

    console.log(ragnar.makePOC())
}

render(){
    return(
        <>
        <div>

        {this.loggearGiladas()}
            <h1>
                hola bro
            </h1>
            <div className="btn btn-success" onClick={() =>this.callBACK()}></div>
            <Login/>
        </div>
        </>
    )
}

}

export default loginController ;