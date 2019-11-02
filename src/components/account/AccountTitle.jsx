import React from "react";

class AccountTitle extends React.Component {
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
            <h1>Mi Cuenta</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>
                <a href="shop-grid-ls.html">Cuenta</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>mis ordenes</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountTitle;
