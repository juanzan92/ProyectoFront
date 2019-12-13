import React from "react";
import { Link } from "react-router-dom";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";

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
            "list-group-item with-badge " + this.isSelected("oportunities")
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
          class={"list-group-item " + this.isSelected("mi_cuenta")}>
          <i className="icon-head" />
          Datos de cuenta
        </Link>

        <Link
          to="/vendor-reporting"
          class={"list-group-item with-badge " + this.isSelected("reports")}
          href="/vendor-reporting"
          style={{ textDecoration: "none !important" }}>
          <AssessmentOutlinedIcon />
          Reportes
        </Link>
      </nav>
    );
  }

  render() {
    return this.buildView();
  }
}

export default VendorNavUser;
