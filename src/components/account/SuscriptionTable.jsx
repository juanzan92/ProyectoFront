import React from "react";
import { Link } from "react-router-dom";

class SuscriptionTable extends React.Component {
  getStatus(suscripcion) {
    if (suscripcion.suscription_status === "cancel") {
      return <span class="text-danger">Cancelado</span>;
    } else if (suscripcion.suscription_status === "finish") {
      return <span class="text-success">Finalizado</span>;
    } else {
      return <span class="text-info">En Progreso</span>;
    }
  }

  buildRow(suscripcion) {
    return (
      <tr>
        <td>
          <Link to={`/suscription/${suscripcion.item_id}`}>
            <a class="text-medium navi-link" href="#">
              {suscripcion.item_id}
            </a>
          </Link>
        </td>
        <td>{suscripcion.date_created}</td>
        <td>{this.getStatus(suscripcion)}</td>
        <td>
          <span class="text-medium">&#36;{suscripcion.total_amount}</span>
        </td>
      </tr>
    );
  }

  render() {
    const { orders } = this.props;
    return (
      <>
        <div class="col-lg-8">
          <div class="padding-top-2x mt-2 hidden-lg-up" />
          <div class="table-responsive">
            <table class="table table-hover margin-bottom-none">
              <thead>
                <tr>
                  <th>Suscripcion #</th>
                  <th>Fecha de Compra</th>
                  <th>Estado</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(suscripcion => {
                  this.buildRow(suscripcion);
                })}
              </tbody>
            </table>
          </div>

          <div class="text-right">
            <a class="btn btn-link-primary margin-bottom-none" href="#">
              <i class="icon-download" />
              &nbsp;Order Details
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default SuscriptionTable;
