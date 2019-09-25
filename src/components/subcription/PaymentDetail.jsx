import React from "react";

class PaymentDetail extends React.Component {
  render() {
    const { quantity, total_amount } = this.props;
    const shipping_amount = total_amount * 0.03;
    const afip_amount = total_amount * 0.1;
    const paid_amount = total_amount - afip_amount - shipping_amount;

    return (
      <div className="table-responsive" style={{ backgroundColor: "#3aa9ef" }}>
        <table className="table">
          <tbody>
            <tr>
              <td>Pagaste por {quantity}</td>
              <td>$ {paid_amount}</td>
            </tr>
            <tr>
              <td>Cargo de envío</td>
              <td>$ {shipping_amount}</td>
            </tr>
            <tr style={{ margin: "2px" }}></tr>
            <tr>
              <td>Cargo DDJJ AFIP</td>
              <td>$ {afip_amount}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$ {total_amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PaymentDetail;
