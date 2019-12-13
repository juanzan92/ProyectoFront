import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slider from "@material-ui/core/Slider";

class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [0, this.props.priceMax]
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleStopDrag = this.handleStopDrag.bind(this);
  }

  handleCheck = name => {
    this.props.handleBrandFilter(name);
  };
  handleSliderChange = (event, price) => this.setState({ price });
  handleStopDrag = () => this.props.update(this.state.price);
  submitPriceChange = event => {
    this.props.handlePriceFilter(this.state.price);
  };
  render() {
    const { brands, priceMin, priceMax } = this.props;
    const { price } = this.state;

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
              value={price}
              min={priceMin}
              max={priceMax}
              onChange={this.handleSliderChange}
              onDragStop={this.handleStopDrag}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />{" "}
            <div className="row" style={{ alignItems: "center" }}>
              <div class="column">
                <button
                  class="btn btn-outline-primary btn-sm"
                  onClick={this.submitPriceChange}>
                  Aplicar
                </button>
              </div>
              <div class="column">
                <div
                  class="ui-range-values"
                  style={{ display: "flex", flexDirection: "row" }}>
                  <div class="ui-range-value-min">
                    ${this.state.price[0]}
                    <span></span>
                  </div>
                  &nbsp;-&nbsp;
                  <div class="ui-range-value-max">
                    ${this.state.price[1]}
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="widget">
            <h3 class="widget-title">Buscar Por Marca</h3>
            <FormGroup row style={{ display: "inline-grid" }}>
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
          <section
            class="promo-box"
            style={{
              backgroundImage: "url(/img/crowdfundinf.png)",
              height: "270px"
            }}>
            <div class="promo-box-content text-center padding-top-3x padding-bottom-2x"></div>
          </section>
        </aside>
      </>
    );
  }
}

export default ProductFilter;
