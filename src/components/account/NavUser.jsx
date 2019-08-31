import React from "react";

class NavUser extends React.Component {
  isSelected(...btn) {
    const { selected } = this.props.selected;
    if (selected === btn) return "active";
  }

  render() {
    const { orders } = this.props;

    return (
      <div class="col-lg-4">
        <nav class="list-group">
          <a
            class={
              "list-group-item with-badge" + this.isSelected("suscripciones")
            }
            href="account-orders.html"
          >
            <i class="icon-bag" />
            Suscripciones
            <span class="badge badge-primary badge-pill">{orders.length}</span>
          </a>
          <a class={"list-group-item" + this.isSelected("mi cuenta")} href="">
            <i class="icon-head" />
            Mi cuenta
          </a>
          <a class={"list-group-item" + this.isSelected("direcciones")} href="">
            <i class="icon-map" />
            Direcciones
          </a>
          <a
            class={"list-group-item with-badge" + this.isSelected("favoritos")}
            href=""
          >
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
