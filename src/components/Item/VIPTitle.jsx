import React from "react";

class VIPTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    item: null,
    isLoading: true,
    isError: false
  };

  render() {
    return (
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>Oportunidades</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>
                S-Market
              </li>
              <li className="separator">&nbsp;</li>
              <li>{this.prop1}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default VIPTitle;
