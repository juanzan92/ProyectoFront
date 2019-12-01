import React from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

const titleStyle = {
  width: "100px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "none"
};
class VendorSuscriptionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };

    this.getStatus = this.getStatus.bind(this);
    this.buildRow = this.buildRow.bind(this);
    this.buildTable = this.buildTable.bind(this);
    this.cancelOportunity = this.cancelOportunity.bind(this);
  }

  cancelOportunity(itemId) {
    const url = `http://localhost:8080/catalog/items?item_id=${itemId}`;
    fetch(url, { method: "DELETE" }).then(response => {
      if (response.status === 200) {
        window.location.reload();
      } else {
        //hacer notification
      }
    });
  }

  calcularBarraProgreso(item) {
    var { initial_stock, stock } = item;
    var ventas = initial_stock - stock;
    return (ventas * 100) / initial_stock;
  }

  getStatus(item) {
    if (item.item_status === "CANCELLED") {
      return <span className="text-danger">Cancelado</span>;
    } else if (item.item_status === "FINISHED") {
      return <span className="text-success">Finalizado</span>;
    } else {
      return <span className="text-info">En Progreso</span>;
    }
  }

  buildProgressBar(progress) {
    return (
      <div className="progress mt-1">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: progress + "%" }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100">
          {progress}&#37;
        </div>
      </div>
    );
  }

  buildRow(item) {
    const status = this.getStatus(item);
    const date = new Date(item.end_date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = date.getDay();
    const fecha = `${days}/${month}/${year}`;
    const progressBar = this.calcularBarraProgreso(item);
    return (
      <tr>
        <td>
          <Link
            to={`/vip/${item.item_id}`}
            className="text-medium navi-link"
            style={titleStyle}>
            {item.title.slice(0, 30)}
          </Link>
        </td>
        <td>{fecha}</td>
        <td>{status}</td>
        <td>{this.buildProgressBar(progressBar)}</td>
        <td>
          <span className="text-medium">&#36;{item.actual_price}</span>
        </td>
        <td>
          {item.item_status !== "CANCELLED" && (
            <span onClick={() => this.cancelOportunity(item.item_id)}>
              <CancelIcon />
            </span>
          )}
        </td>
      </tr>
    );
  }

  buildTable(items) {
    const rows = items.map(sus => this.buildRow(sus));
    return (
      <div>
        <div className="padding-top-2x mt-2 hidden-lg-up" />
        <div className="table-responsive">
          <table className="table table-hover margin-bottom-none">
            <thead>
              <tr>
                <th>Oportunidad #</th>
                <th>Fecha de Fin</th>
                <th>Estado</th>
                <th>Progresso</th>
                <th>Precio</th>
                <th>Cancelar</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  }

  buildEmptyTable() {
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
    const { items } = this.state;
    if (items.length > 0) {
      const table = this.buildTable(items);
      return <>{table}</>;
    } else if (items.length === 0) {
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
export default VendorSuscriptionTable;
