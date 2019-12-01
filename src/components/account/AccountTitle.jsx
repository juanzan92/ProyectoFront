import React from "react";

class AccountTitle extends React.Component {
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
            <h1>Mi cuenta</h1>
          </div>
         
        </div>
      </div>
    );
  }
}

export default AccountTitle;
