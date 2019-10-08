import React from "react";

class PaymentMethod extends React.Component {
  render() {
    const { payment, date_created, total_amount } = this.props.subscription;
    const { id, totalPaidAmount, dateApproved } = payment[0];
    return (
      <>
        <h3>Método de Pago</h3>
        <div
          class="card margin-bottom-1x"
          style={{ backgroundColor: "#daecf9cf" }}>
          <div class="card-body">
            <p class="card-text" style={{ margin: "0 0 1px" }}>
              <i class="pe-7s-credit" style={{ fontSize: "large" }}></i> Pagaste
              U$D {total_amount}
            </p>
            <p class="card-text" style={{ margin: "0 0 1px" }}>
              El día {Date(date_created)}
            </p>
            <span class="text-muted">Número de transaccion: {id}</span>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentMethod;
