import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slider from "@material-ui/core/Slider";

class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [0, 100]
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCheck = name => {
    this.props.handleBrandFilter(name);
  };

  handleChange = (event, newPrice) => {
    this.setState({ price: newPrice });
  };
  render() {
    const { brands } = this.props;

    return (
      <>
        <button
          class="sidebar-toggle position-left"
          data-toggle="modal"
          data-target="#modalShopFilters">
          <i class="icon-layout"></i>
        </button>
        <aside class="sidebar sidebar-offcanvas">
          <section class="widget widget-categories">
            <h3 class="widget-title">Rango de Precios</h3>
            <Slider
              value={this.state.price}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />{" "}
          </section>

          <section class="widget">
            <h3 class="widget-title">Buscar Por Marca</h3>
            <FormGroup row>
              {brands.map(brand => {
                return (
                  <FormControlLabel
                    key={brand.value}
                    control={
                      <Checkbox
                        onChange={() => this.handleCheck(brand.value)}
                        value={brand.value}
                        color="primary"
                      />
                    }
                    label={`${brand.value} (${brand.count})`}
                  />
                );
              })}
            </FormGroup>
          </section>
        </aside>
      </>
    );
  }
}

export default ProductFilter;
