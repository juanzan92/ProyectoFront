import React from "react";

const cardStyle = {
  maxWidth: "265px",
  height: "310px",
  margin: "0.5rem"
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
                style={{ maxHeight: "180px", margin: "auto" }}
                href={`/vip/${x.item_id}`}>
                <img src={x.pictures[0].src} alt="Product" />
              </a>
              <h3 class="product-title">
                <a href={`/vip/${x.item_id}`}>{x.title}</a>
              </h3>
              <h4 class="product-price">$ {x.actual_price}</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist">
                  <i class="icon-heart"></i>
                </button>
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
