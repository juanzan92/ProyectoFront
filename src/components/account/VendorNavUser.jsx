import React from "react";
import { Link } from "react-router-dom";

class VendorNavUser extends React.Component {
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
            "list-group-item with-badge " + this.isSelected("oportunidades")
          }
          href="/account">
          <i className="icon-bag" />
          Oportunidades
          <span className="badge badge-primary badge-pill">
            {orders.length}
          </span>
        </a>

        <Link
          to="/vendor-profile"
          class={"list-group-item " + this.isSelected("mi cuenta")}>
          <i className="icon-head" />
          Mi cuenta
        </Link>

        <a
          class={"list-group-item " + this.isSelected("direcciones")}
          href="/vendor-directions">
          <i className="icon-map" />
          Direcciones
        </a>
        <Link
          class={"list-group-item with-badge " + this.isSelected("reportes")}
          href="/vendor-reporting">
          <i className="icon-heart" />
          Reportes
          <span className="badge badge-primary badge-pill">3</span>
        </Link>
      </nav>
    );
  }

  render() {
    return this.buildView();
  }
}
export default VendorNavUser;
