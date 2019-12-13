import React from "react";

const alingCenterStyle = {
  alignItems: "center",
  textAlign: "center",
  display: " inline-block"
};

class CancelItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickable: false,
      item_id: this.props.item_id
    };

    this.usarfun = this.usarfun.bind(this);
    this.enableCancleBtn = this.enableCancleBtn.bind(this);
  }

  usarfun() {
    this.setState({ isClickable: true });
    this.props.cancelOportunity(this.state.item_id);
  }

  enableCancleBtn() {
    this.setState({ isClickable: false });
  }

  render() {
    return (
      <>
        <div
          class="modal fade"
          id={`modalCentered${this.props.item_id}`}
          tabindex="-1"
          role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Cancelacion de Oportunidad</h4>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  onClick={this.enableCancleBtn}
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" style={alingCenterStyle}>
                <p>
                  Estas por cancelar un Oportunidad.{" "}
                  <p>Seguro quieres hacerlo ?</p>
                </p>
              </div>
              <div class="modal-footer" style={alingCenterStyle}>
                <button
                  class="btn btn-success btn-sm"
                  type="button"
                  data-dismiss="modal">
                  Cerrar
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  type="button"
                  disabled={this.state.isClickable}
                  onClick={() => this.usarfun()}>
                  Cancelar Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CancelItemModal;
