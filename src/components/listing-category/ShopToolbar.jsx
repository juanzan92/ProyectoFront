import React from "react";

class ShopToolbar extends React.Component {
  render() {
    return (
      <>
        <div class="shop-toolbar padding-bottom-1x mb-2">
          <div class="column">
            <div class="shop-sorting">
              <label for="sorting">Sort by:</label>
              <select class="form-control" id="sorting">
                <option>Popularity</option>
                <option>Low - High Price</option>
                <option>High - Low Price</option>
                <option>Avarage Rating</option>
                <option>A - Z Order</option>
                <option>Z - A Order</option>
              </select>
              <span class="text-muted">Showing:&nbsp;</span>
              <span>1 - 12 items</span>
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
