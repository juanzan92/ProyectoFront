import React from 'react';
import Spinner from './Spinner'


class CardHF extends React.Component {
    constructor(props){
        super(props)
       this.state = {
            headder:"",
            body:"",
            footer:""
        }
    }
    
    hayBoton(){

        if(this.props.btn){

            return <a class="btn btn-primary" href={this.props.href}>{this.props.button}</a>
        }
    }
    spinner(){
        if(this.props.spinner)
        return <Spinner class=""/>
    }

    render(){

        return(
            <div class="card text-center">
              <div class="card-header"><span class="text-lg">{this.props.header}</span></div>
              <div class="card-body">
                <h3 class="card-title">{this.props.title}</h3>
                <p class="card-text">{this.props.body}</p>
                { this.hayBoton()}
                { this.spinner()}
              </div>
              <div class="card-footer text-muted">{this.props.footer}</div>
            </div>
        )
    }
}
export default CardHF