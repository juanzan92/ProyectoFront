import React from 'react';


class ReactH3 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {h3Class,h3Title} = this.props
        return(
            <h3 className={h3Class}>{h3Title}</h3>
        )
    }


}
export default ReactH3