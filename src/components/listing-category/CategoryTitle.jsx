import React from "react";

class ListingCategoriesTitle extends React.Component {
  state = {
    item: null,
    isLoading: true,
    isError: false
  };

  render() {
    const { category_name } = this.props;
    return (
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>{category_name}</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>{category_name}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingCategoriesTitle;
