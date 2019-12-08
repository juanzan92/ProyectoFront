import React from "react";
import { Link } from "react-router-dom";

const titleStyle = {
  width: "200px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

class SuscriptionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };

    this.getStatus = this.getStatus.bind(this);
    this.buildRow = this.buildRow.bind(this);
    this.buildTable = this.buildTable.bind(this);
  }

  componentDidMount() {
    this.setState({
      orders: this.props.ordenes
    });
  }

  reemplazarFecha(description) {
    var chars = {
      Dec: "Dic",
      Jan: "Ene",
      Mon: "Lun",
      Tue: "Mar",
      Thu: "Jue",
      Fri: "Vie",
      Sat: "Sab",
      Sun: "Dom"
    };
    var expr = /[Dec,]/gi;
    var res = description.replace(expr, function(e) {
      return chars[e];
    });
    return res;
  }

  getStatus(suscripcion) {
    if (suscripcion.subscription_status === "CANCELLED") {
      return <span className="text-danger">Cancelado</span>;
    } else if (suscripcion.subscription_status === "FINISHED") {
      return (
        <span className="text" style={{ color: "#038858" }}>
          Finalizado
        </span>
      );
    } else if (suscripcion.subscription_status === "DELIVERING") {
      return (
        <span className="text" style={{ color: "#c206e2" }}>
          En Camino
        </span>
      );
    } else {
      return <span className="text-info">En Proceso</span>;
    }
  }

  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date
      .getDate()
      .toString()
      .padStart(2, "0");

    return day + "/" + month + "/" + year;
  }

  buildRow(suscripcion) {
    const status = this.getStatus(suscripcion);
    const date = new Date(suscripcion.date_created);

    const fecha = this.getFormattedDate(date);
    let shownTitle = suscripcion.item_title;
    if (shownTitle) {
      shownTitle = shownTitle.substring(0, 20);
    }
    return (
      <tr>
        <td>
          <Link
            className="text-medium navi-link"
            to={`/subscripcion/${suscripcion.subscription_id}`}
            style={{ textDecoration: "none !important" }}>
            {shownTitle}
          </Link>
        </td>
        <td>{fecha}</td>
        <td>{status}</td>
        <td>
          <span className="text-medium">&#36;{suscripcion.total_amount}</span>
        </td>
      </tr>
    );
  }

  buildTable(orders) {
    const rows = orders.map(sus => this.buildRow(sus));
    return (
      <>
        <div className="padding-top-2x mt-2 hidden-lg-up" />
        <div className="table-responsive">
          <table className="table table-hover margin-bottom-none">
            <thead>
              <tr>
                <th>Suscripción </th>
                <th>Fecha de Compra</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </>
    );
  }

  buildEmptyTable() {
    return (
      <>
        <div className="padding-top-2x mt-2 hidden-lg-up" />
        <div className="table-responsive">
          <table className="table table-hover margin-bottom-none">
            <thead>
              <tr>
                <th>Suscripción </th>
                <th>Fecha de Compra</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
          </table>
        </div>
      </>
    );
  }

  render() {
    const { orders } = this.state;
    if (orders.length > 0) {
      const table = this.buildTable(orders);
      return <>{table}</>;
    } else if (orders.length === 0) {
      return this.buildEmptyTable();
    } else {
      return (
        <div className="spinner-center text-info m-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}
export default SuscriptionTable;
