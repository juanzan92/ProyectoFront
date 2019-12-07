import React from "react";

import wrapper from "../../components/Wrapper";

class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: false
    };
    this.handleFaqSubmit = this.handleFaqSubmit.bind(this);
  }

  handleFaqSubmit(event) {
    event.preventDefault();
    this.setState({
      isButtonDisabled: true
    });
    setTimeout(() => this.setState({ isButtonDisabled: false }), 5000);
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "1";
    setTimeout(() => window.confirm("Consulta enviada correctamente!!!"), 2500);
  }

  render() {
    return (
      <>
        <div class="page-title">
          <div class="container">
            <div class="column">
              <h1>Preguntas Frecuentes</h1>
            </div>
            <div class="column">
              <ul class="breadcrumbs">
                <li>
                  <a href="/">Home</a>
                </li>
                <li class="separator">&nbsp;</li>
                <li>Preguntas Frecuentes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container padding-bottom-3x">
          <div className="row">
            <div className="col-md-6">
              <h3 className="padding-top-2x">¡No te quedes con dudas!</h3>
              <p className="text-muted mb-30">
                Estamos para ayudarte. En esta sección podras encontrar aquellas
                preguntas que más frecuentan nuestros usuarios con sus
                respectivas respuestas.
              </p>
              <div className="accordion" id="accordion" role="tablist">
                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseOne"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Qué medios de pago se aceptan?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse show"
                    id="collapseOne"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Con Smarket podrás acceder a las mejores financiaciones
                        y promociones bancarias que ofrece Mercado Pago.
                      </p>
                      <p>
                        Disfrutá de todos los medios de pago en una plataforma
                        única. Utilizá efectivo, tarjeta de débito, crédito o
                        prepaga.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseThree"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Cuánto tardará en llegar mi paquete?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseThree"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Los tiempos de envío pueden variar dependiendo la
                        provincia donde se encuentre cada colaborador.
                      </p>
                      <p>
                        Recordá que Smarket interviene únicamente en el tramo de
                        envío que involucra el territorio nacional.
                      </p>
                      <p>
                        Usualmente los tiempos de entrega varían entre 15 y 20
                        días hábiles, pudiendo extenderse a 25 o 30 días
                        hábiles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseFour"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Me corresponde un reembolso si cancelo mi suscripción?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseFour"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Cancelá tu suscripción en cualquier momento y recibí el
                        dinero directamente en tu cuenta de Mercado Pago.
                      </p>
                      <p>
                        Cuando pagás, el vendedor puede ver el dinero en su
                        cuenta, pero tiene que esperar a que la oportunidad se
                        complete exitosamente para poder utilizarlo.
                      </p>
                      <p>
                        De esta forma, tendrás tiempo de cancelar tu suscripción
                        en cualquier momento previo a la concreción de la
                        oportunidad.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseFive"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Cómo protegemos a nuestros Colaboradores?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseFive"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Nos encargaremos de proteger tu dinero hasta que la
                        oportunidad se complete exitosamente.
                      </p>
                      <p>
                        Pagando con Mercado Pago tu compra se encuentra 100%
                        protegida.
                      </p>
                      <p>
                        Si el producto no es lo que esperabas te devolvemos el
                        dinero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseSix"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Cómo elegir a qué vendedor debería comprar?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseSix"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Todos los oferentes que publican en nuestra plataforma
                        han pasado exitosamente un proceso de selección previo.
                      </p>
                      <p>
                        De todas maneras, siempre recomendamos que leas las
                        opiniones de aquellas personas que ya compraron al
                        mismo.
                      </p>
                      <p>
                        Revisá atentamente cada publicación. Prestá atención a
                        las descripciones e imágenes para estar seguros de las
                        condiciones de venta que el vendedor propone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab">
                    <h6>
                      <a
                        href="#collapseTwo"
                        data-toggle="collapse"
                        className="collapsed"
                        aria-expanded="false">
                        ¿Puedo recibir mis productos en el exterior?
                      </a>
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseTwo"
                    data-parent="#accordion"
                    role="tabpanel">
                    <div className="card-body">
                      <p>
                        Momentáneamente despachamos nuestras oportunidades
                        únicamente en territorio nacional argentino.
                      </p>
                      <p>
                        Los productos que cada suscripción supone se envían a
                        destino mediante Mercado Envíos.
                      </p>
                      <p>
                        Podés comprar desde el exterior, pero necesariamente
                        deberás recibir tus productos en territorio argentino.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="padding-top-2x">
                ¿No encontraste lo que buscabas? Contáctanos.
              </h3>
              <p className="text-muted mb-30">
                Si después de leer nuestras preguntas frecuentes todavía tenés
                dudas, contactate con nosotros y te brindaremos toda la
                información que necesites saber.
              </p>
              <form
                className="row"
                method="post"
                onSubmit={this.handleFaqSubmit}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control form-control-rounded"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6" />
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="subject">Asunto</label>
                    <input
                      className="form-control form-control-rounded"
                      type="text"
                      id="subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <select
                      className="form-control form-control-rounded"
                      id="category">
                      <option value="1">Configuración de Cuenta</option>
                      <option value="2">Medios de Pago</option>
                      <option value="3">Políticas de Envío</option>
                      <option value="4">Seguimiento de Envíos</option>
                      <option value="5">Devoluciones</option>
                      <option value="6">Aduanas</option>
                      <option value="7">Otros</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                      className="form-control form-control-rounded"
                      id="description"
                      rows="8"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-right">
                  <button
                    className="btn btn-primary btn-rounded"
                    type="submit"
                    id="submit"
                    disabled={this.state.isButtonDisabled}>
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default wrapper(FAQs);
