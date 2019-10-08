import React from "react";
import { Link } from "react-router-dom";

class NavUser extends React.Component {
  isSelected(btn) {
    const selected = this.props.selected;
    if (selected === btn) {
      return "active";
    } else {
      return "";
    }
  }

  buildView() {
    const { orders } = this.props;
    return (
      <nav className="list-group">
        <a
          class={
            "list-group-item with-badge " + this.isSelected("suscripciones")
          }
          href="account-orders.html">
          <i className="icon-bag" />
          Suscripciones
          <span className="badge badge-primary badge-pill">
            {orders.length}
          </span>
        </a>

        <Link
          to="/account-profile"
          class={"list-group-item " + this.isSelected("mi cuenta")}>
          <i className="icon-head" />
          Mi cuenta
        </Link>

        <a
          class={"list-group-item " + this.isSelected("direcciones")}
          href="/account-directions">
          <i className="icon-map" />
          Direcciones
        </a>
        <a
          class={"list-group-item with-badge " + this.isSelected("favoritos")}
          href="/account-favs">
          <i className="icon-heart" />
          Favoritos
          <span className="badge badge-primary badge-pill">3</span>
        </a>
      </nav>
    );
  }

  render() {
    return this.buildView();
  }
}
export default NavUser;