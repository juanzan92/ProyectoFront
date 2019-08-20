import React from 'react';


class ReactA extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const {aClass,aHref,aTitle} = this.props ;
        return(
            <>
             <a className={aClass} href={aHref}>{aTitle}</a>
            </>
        )
    }
}
export default ReactA