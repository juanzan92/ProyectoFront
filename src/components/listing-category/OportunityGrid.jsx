import React from "react";

const cardStyle = {
  maxWidth: "265px",
  height: "325px",
  margin: "0.5rem"
};

const titleStyle = {
  width: "230px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

class OportunityGrid extends React.Component {
  goToItem(item_id) {
    window.location.href = `/vip/${item_id}`;
  }

  render() {
    const { items } = this.props;
    return (
      <>
        {/*<!-- Product-->*/}
        <div class="row" style={{ flexWrap: "wrap" }}>
          {items.map(x => (
            <div class="product-card" style={cardStyle} key={x.item_id}>
              <a
                class="product-thumb"
                style={{ height: "181px", margin: "auto" }}
                href={`/vip/${x.item_id}`}>
                <img
                  src={x.pictures[0].src}
                  alt="Product"
                  style={{ height: "181px", margin: "auto" }}
                />
              </a>
              <h3 class="product-title" style={titleStyle}>
                <a href={`/vip/${x.item_id}`} style={titleStyle}>
                  {x.title}
                </a>
              </h3>
              <h4 class="product-price">$ {x.actual_price}</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-primary btn-sm"
                  onClick={() => this.goToItem(x.item_id)}
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!">
                  Ver Oportunidad
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default OportunityGrid;
