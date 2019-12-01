import React from "react";

class PaymentDetail extends React.Component {
  render() {
    const {
      quantity,
      total_amount,
      merchant_order_id
    } = this.props.subscription;
    const shipping_amount = total_amount * 0.19;
    const paid_amount = total_amount - shipping_amount;

    return (
      <>
        <h3>Detalle de Pago</h3>
        <div
          className="table-responsive"
          style={{ backgroundColor: "#daecf9cf" }}>
          <table className="table">
            <tbody>
              <tr>
                <td>Pagaste por {quantity}</td>
                <td>$ {paid_amount.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Cargo de envío</td>
                <td>$ {shipping_amount.toFixed(2)}</td>
              </tr>
              <tr style={{ margin: "2px" }}></tr>
              <tr>
                <td style={{ fontWeight: "600" }}>Total</td>
                <td style={{ fontWeight: "600" }}>$ {total_amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* TODO cambiar por la factura posta la url  */}
        <a
          class="btn btn-info"
          href={`https://www.mercadopago.com.ar/activities`}>
          Ver Factura
        </a>
      </>
    );
  }
}

export default PaymentDetail;
