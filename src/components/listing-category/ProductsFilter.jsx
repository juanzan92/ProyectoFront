import React from "react";

class ProductFilter extends React.Component {
  render() {
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
            <h3 class="widget-title">Shop Categories</h3>
            <ul>
              <li class="has-children expanded">
                <a href="#">Shoes</a>
                <span>(1138)</span>
                <ul>
                  <li>
                    <a href="#">Women's</a>
                    <span>(508)</span>
                    <ul>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                      <li>
                        <a href="#">Loafers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men's</a>
                    <span>(423)</span>
                    <ul>
                      <li>
                        <a href="#">Boots</a>
                      </li>
                      <li>
                        <a href="#">Oxfords</a>
                      </li>
                      <li>
                        <a href="#">Loafers</a>
                      </li>
                      <li>
                        <a href="#">Sandals</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Boy's Shoes</a>
                    <span>(97)</span>
                  </li>
                  <li>
                    <a href="#">Girl's Shoes</a>
                    <span>(110)</span>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#">Clothing</a>
                <span>(2356)</span>
                <ul>
                  <li>
                    <a href="#">Women's</a>
                    <span>(1032)</span>
                    <ul>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Shirts &amp; Tops</a>
                      </li>
                      <li>
                        <a href="#">Swimwear</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men's</a>
                    <span>(937)</span>
                    <ul>
                      <li>
                        <a href="#">Shirts &amp; Tops</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                      <li>
                        <a href="#">Swimwear</a>
                      </li>
                      <li>
                        <a href="#">Pants</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Kid's Clothing</a>
                    <span>(386)</span>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#">Bags</a>
                <span>(420)</span>
                <ul>
                  <li>
                    <a href="#">Handbags</a>
                    <span>(180)</span>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                    <span>(132)</span>
                  </li>
                  <li>
                    <a href="#">Wallets &amp; Accessories</a>
                    <span>(47)</span>
                  </li>
                  <li>
                    <a href="#">Luggage</a>
                    <span>(61)</span>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#">Accessories</a>
                <span>(874)</span>
                <ul>
                  <li>
                    <a href="#">Sunglasses</a>
                    <span>(211)</span>
                  </li>
                  <li>
                    <a href="#">Hats</a>
                    <span>(195)</span>
                  </li>
                  <li>
                    <a href="#">Watches</a>
                    <span>(159)</span>
                  </li>
                  <li>
                    <a href="#">Jewelry</a>
                    <span>(203)</span>
                  </li>
                  <li>
                    <a href="#">Belts</a>
                    <span>(106)</span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section class="widget widget-categories">
            <h3 class="widget-title">Price Range</h3>
            <form
              class="price-range-slider"
              method="post"
              data-start-min="250"
              data-start-max="650"
              data-min="0"
              data-max="1000"
              data-step="1">
              <div class="ui-range-slider"></div>
              <footer class="ui-range-slider-footer">
                <div class="column">
                  <button class="btn btn-outline-primary btn-sm" type="submit">
                    Filter
                  </button>
                </div>
                <div class="column">
                  <div class="ui-range-values">
                    <div class="ui-range-value-min">
                      $<span></span>
                      <input type="hidden" />
                    </div>
                    &nbsp;-&nbsp;
                    <div class="ui-range-value-max">
                      $<span></span>
                      <input type="hidden" />
                    </div>
                  </div>
                </div>
              </footer>
            </form>
          </section>

          <section class="widget">
            <h3 class="widget-title">Filter by Brand</h3>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="adidas" />
              <label class="custom-control-label" for="adidas">
                Adidas&nbsp;<span class="text-muted">(254)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                class="custom-control-input"
                type="checkbox"
                id="bilabong"
              />
              <label class="custom-control-label" for="bilabong">
                Bilabong&nbsp;<span class="text-muted">(39)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="klein" />
              <label class="custom-control-label" for="klein">
                Calvin Klein&nbsp;<span class="text-muted">(128)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="nike" />
              <label class="custom-control-label" for="nike">
                Nike&nbsp;<span class="text-muted">(310)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="bahama" />
              <label class="custom-control-label" for="bahama">
                Tommy Bahama&nbsp;<span class="text-muted">(42)</span>
              </label>
            </div>
          </section>

          <section class="widget">
            <h3 class="widget-title">Filter by Size</h3>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="xl" />
              <label class="custom-control-label" for="xl">
                XL&nbsp;<span class="text-muted">(208)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="l" />
              <label class="custom-control-label" for="l">
                L&nbsp;<span class="text-muted">(311)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="m" />
              <label class="custom-control-label" for="m">
                M&nbsp;<span class="text-muted">(485)</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="s" />
              <label class="custom-control-label" for="s">
                S&nbsp;<span class="text-muted">(213)</span>
              </label>
            </div>
          </section>
        </aside>
      </>
    );
  }
}

export default ProductFilter;
