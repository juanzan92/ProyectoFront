import React from "react";

class ShopToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: "minMax"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    this.props.orderItems(value);
  }

  render() {
    return (
      <>
        <div className="shop-toolbar padding-bottom-1x mb-2">
          <div className="column">
            <div className="shop-sorting">
              <label for="sorting">Ordenar por:</label>
              <select
                className="form-control"
                id="sorting"
                name="sorting"
                value={this.state.sorting}
                onChange={this.handleChange}>
                <option value="minMax">Precio Míninimo</option>
                <option value="maxMin">Precio Máximo </option>
                <option value="name">Nombre</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="shop-view">
              <a className="grid-view active" href="shop-grid-ls.html">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a className="list-view" href="shop-list-ls.html">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopToolbar;
