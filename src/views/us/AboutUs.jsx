import React from "react";

import wrapper from "../../components/Wrapper";

class AboutUs extends React.Component {
  render() {
    return (
      <>


        <div class="page-title">
          <div class="container">
            <div class="column">
              <h1>Quiénes Somos</h1>
            </div>
            <div class="column">
              <ul class="breadcrumbs">
                <li><a href="/">Home</a>
                </li>
                <li class="separator">&nbsp;</li>
                <li>Quiénes Somos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container padding-bottom-4x">
          <div class="row align-items-center padding-top-2x padding-bottom-2x">
            <div class="row align-items-center padding-bottom-2x">
              <div class="col-md-5">
                <img class="d-block w-270 m-auto" src="img/features/04.jpg" alt="Online Shopping" />
              </div>
              <div class="col-md-7 text-md-left text-center">
                <div class="mt-30 hidden-md-up" />
                <h2>Innovadores</h2>
                <p>
                  Smarket es una plataforma colaborativa que facilita el acceso a productos únicos de todo el
                  mundo mediante un mecanismo innovador de financiamiento colectivo.
                  Nos encargamos de conectar a consumidores y comerciantes argentinos mediante oportunidades únicas de precios inmejorables.
                </p>
                <a class="text-medium text-decoration-none" href="/">Catálogo de Oportunidades&nbsp;<i class="icon-arrow-right" /></a>
              </div>
            </div>
            <hr />

            <div class="row align-items-center padding-top-2x padding-bottom-2x">
              <div class="col-md-5 order-md-2">
                <img class="d-block w-270 m-auto" src="img/features/01.jpg" alt="Delivery" />
              </div>
              <div class="col-md-7 order-md-1 text-md-left text-center">
                <div class="mt-30 hidden-md-up" />
                <h2>Rentables</h2>
                <p>
                  Accedé a precios increíbles participando en carteras de compra colectivas. Democratizamos el acceso a bienes de todo el mundo, igualando el poder de compra entre nuestros colaboradores. Comprá productos novedosos que sólo encontrarás en el exterior evitando intermediarios en la cadena de suministro. ¡Sin trabas!
                </p>
                <a class="text-medium text-decoration-none" href="/faqs">Medios de Pago&nbsp;<i class="icon-arrow-right" /></a>
              </div>
            </div>

            <div class="row align-items-center padding-bottom-2x">
              <div class="col-md-5">
                <img class="d-block w-270 m-auto" src="img/features/03.jpg" alt="Mobile Shopping" />
              </div>
              <div class="col-md-7 text-md-left text-center">
                <div class="mt-30 hidden-md-up" />
                <h2>Transparentes</h2>
                <p>Con Smarket, el precio que pagás es el que ves en todo momento. Incluye todos los costos de envío e impuestos hasta llegar a tu hogar u oficina, por lo cuál el producto te llega sin costos adicionales hasta tu manos. ¡Sin sorpresas!</p>
                <a class="text-medium text-decoration-none" href="/faqs">Política de Costos&nbsp;<i class="icon-arrow-right" /></a>
              </div>
            </div>
            <hr />

            <div class="row align-items-center padding-top-2x padding-bottom-2x">
              <div class="col-md-5 order-md-2">
                <img class="d-block w-270 m-auto" src="img/features/02.jpg" alt="Shopping" />
              </div>
              <div class="col-md-7 order-md-1 text-md-left text-center">
                <div class="mt-30 hidden-md-up" />
                <h2>Cómodos</h2>
                <p>Recibí productos de todo el mundo directo a la puerta de tu casa mediante Mercado Envíos. Si el objetivo de tu oportunidad no prospera, el dinero se devuelve automáticamente a tu cuenta de Mercado Pago</p>
                <a class="text-medium text-decoration-none" href="/faqs">Políticas de Envío&nbsp;<i class="icon-arrow-right" /></a>
              </div>
            </div>

          </div>
        </div>

      </>
    );
  }
}

export default wrapper(AboutUs);
