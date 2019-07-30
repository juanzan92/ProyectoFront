import React from 'react'

class Spinner extends React.Component {
    constructor(props) {
        super(props)
        const divStyle = {
            width: "3rem",
            height: "3rem",
        };
    }

    render() {
        return (
            <>  <div className={this.props.class}>
                <div className="spinner-border text-gray-dark m-2" style={this.divStyle} role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            </div>
            </>
        )
    }

}

export default Spinner