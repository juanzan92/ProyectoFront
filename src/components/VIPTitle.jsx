import React from 'react';







class VIPTitle extends React.Component {


constructor(props){
    super(props)

}

state = {
    item: null,
    isLoading: true,
    isError: false,
};



fetchItem = () => {
    const idItem = this.props.match.params.idItem;
    const url = 'https://cors-anywhere.herokuapp.com/' +
        `https://api.mercadolibre.com/items/${idItem}`;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            console.log(myJson)
            this.setState({
                item: myJson,
                isLoading: false,
            })
        });
}
render(){



    return(

        <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>Oportunidades</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li><a href="/index">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li><a href="shop-grid-ls.html">Shop</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>Oportunidad</li>
            </ul>
          </div>
        </div>
      </div>
    )

}

}

export default VIPTitle