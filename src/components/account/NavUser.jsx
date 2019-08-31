import React from "react";

class NavUser extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div class="col-lg-4">
        <nav class="list-group">
          <a
            class="list-group-item with-badge active"
            href="account-orders.html"
          >
            <i class="icon-bag" />
            Suscripciones
            <span class="badge badge-primary badge-pill">{orders.length}</span>
          </a>
          <a class="list-group-item" href="">
            <i class="icon-head" />
            My cuenta
          </a>
          <a class="list-group-item" href="">
            <i class="icon-map" />
            Direcciones
          </a>
          <a class="list-group-item with-badge" href="">
            <i class="icon-heart" />
            Favoritos
            <span class="badge badge-primary badge-pill">3</span>
          </a>
        </nav>
      </div>
    );
  }
}
export default NavUser;
