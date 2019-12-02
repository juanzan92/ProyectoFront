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
          className={
            "list-group-item with-badge " + this.isSelected("suscripciones")
          }
          href="/account">
          <i className="icon-bag" />
          Suscripciones
          <span className="badge badge-primary badge-pill">
            {orders.length}
          </span>
        </a>
        <Link
          to="/account-profile"
          className={"list-group-item " + this.isSelected("mi_cuenta")}>
          <i className="icon-head" />
          Mi Cuenta
        </Link>
      </nav>
    );
  }

  render() {
    return this.buildView();
  }
}
export default NavUser;
