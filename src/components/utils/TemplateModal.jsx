import React from "react";

class TemplateModal extends React.Component {
  constructor(props) {
    super(props);

    this.usarfun = this.usarfun.bind(this);
  }

  usarfun() {
    this.props.cancelSuscription && this.props.cancelSuscription();
  }

  render() {
    return (
      <>
        <div class="modal fade" id="modalCentered" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Cancelacion de Suscripcion</h4>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>
                  Estas por cancelar una Suscripción.{" "}
                  <p>Seguro quieres hacerlo ?</p>
                </p>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-success btn-sm"
                  type="button"
                  data-dismiss="modal">
                  Cerrar
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => this.usarfun()}>
                  Cancelar Suscripción
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TemplateModal;
