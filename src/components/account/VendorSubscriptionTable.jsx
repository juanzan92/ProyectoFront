import React from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

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

  cancelOportunity() {
    //really ?
  }

  calcularBarraProgreso() {
    var initialQuantity = this.props.item.initial_stock;
    var actualQuantity = this.props.item.stock;
    return (actualQuantity * 100) / initialQuantity;
  }

  componentDidMount() {}

  getStatus(item) {
    if (item.subscription_status === "CANCELLED") {
      return <span className="text-danger">Cancelado</span>;
    } else if (item.subscription_status === "FINISHED") {
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
          style={{ width: state.progress + "%" }}
          aria-valuenow={state.progress}
          aria-valuemin="0"
          aria-valuemax="100">
          {progress}&#37;
        </div>
      </div>
    );
  }

  buildRow(item) {
    const status = this.getStatus(item);
    const date = new Date(item.date_created);
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = date.getDay();
    const fecha = days + "/" + month + "/" + year;
    const progressBar = this.calcularBarraProgreso();
    return (
      <tr>
        <td>
          <Link to={`/subscripcion/${item.subscription_id}`}>
            <a className="text-medium navi-link">{item.title}</a>
          </Link>
        </td>
        <td>{fecha}</td>
        <td>{status}</td>
        <td>{this.buildProgressBar(progressBar)}</td>
        <td>
          <span className="text-medium">&#36;{item.actual_price}</span>
        </td>
        <td>
          <span onClick={this.cancelOportunity()}>
            <CancelIcon />{" "}
          </span>
        </td>
      </tr>
    );
  }

  buildTable(items) {
    const rows = items.map(sus => this.buildRow(sus));
    return (
      <div className="col-lg-8">
        <div className="padding-top-2x mt-2 hidden-lg-up" />
        <div className="table-responsive">
          <table className="table table-hover margin-bottom-none">
            <thead>
              <tr>
                <th>Oportunidad #</th>
                <th>Fecha de Compra</th>
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

  render() {
    const { items } = this.state;
    if (items.length > 0) {
      const table = this.buildTable(items);
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
export default VendorSuscriptionTable;
