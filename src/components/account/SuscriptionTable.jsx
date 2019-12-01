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

  getStatus(suscripcion) {
    if (suscripcion.subscription_status === "CANCELLED") {
      return <span className="text-danger">Cancelado</span>;
    } else if (suscripcion.subscription_status === "FINISHED") {
      return <span className="text-success">Finalizado</span>;
    } else {
      return <span className="text-info">En Progreso</span>;
    }
  }

  buildRow(suscripcion) {
    const status = this.getStatus(suscripcion);
    const date = new Date(suscripcion.date_created);
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = date.getDay();
    const fecha = days + "/" + month + "/" + year;
    let shownTitle = suscripcion.item_title;
    if (shownTitle) {
      shownTitle = shownTitle.substring(0, 30);
    }
    return (
      <tr>
        <td>
          <Link to={`/subscripcion/${suscripcion.subscription_id}`}>
            <a className="text-medium navi-link">{shownTitle}</a>
          </Link>
        </td>
        <td>{fecha}</td>
        <td>{status}</td>
        <td>
          <span className="text-medium">&#36;{suscripcion.paid_amount}</span>
        </td>
      </tr>
    );
  }

  buildTable(orders) {
    const rows = orders.map(sus => this.buildRow(sus));
    return (
      <div className="col-lg-8">
        <div className="padding-top-2x mt-2 hidden-lg-up" />
        <div className="table-responsive">
          <table className="table table-hover margin-bottom-none">
            <thead>
              <tr>
                <th>Suscripcion </th>
                <th>Fecha de Compra</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <div className="text-right">
          <a className="btn btn-link-primary margin-bottom-none" href="#">
            <i className="icon-download" />
            &nbsp;Detalles
          </a>
        </div>
      </div>
    );
  }

  render() {
    const { orders } = this.state;
    if (orders.length > 0) {
      const table = this.buildTable(orders);
      return <>{table}</>;
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
