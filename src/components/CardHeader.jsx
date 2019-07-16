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

            return <a className="btn btn-primary" href={this.props.href}>{this.props.button}</a>
        }
    }
    spinner(){
        if(this.props.spinner)
        return <Spinner className=""/>
    }

    render(){

        return(
            <div className="card text-center">
              <div className="card-header"><span className="text-lg">{this.props.header}</span></div>
              <div className="card-body">
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-text">{this.props.body}</p>
                { this.hayBoton()}
                { this.spinner()}
              </div>
              <div className="card-footer text-muted">{this.props.footer}</div>
            </div>
        )
    }
}
export default CardHF