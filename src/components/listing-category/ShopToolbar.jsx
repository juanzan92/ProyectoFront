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
        <div class="shop-toolbar padding-bottom-1x mb-2">
          <div class="column">
            <div class="shop-sorting">
              <label for="sorting">Ordenar por:</label>
              <select
                class="form-control"
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
          <div class="column">
            <div class="shop-view">
              <a class="grid-view active" href="shop-grid-ls.html">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a class="list-view" href="shop-list-ls.html">
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
