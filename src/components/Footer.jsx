import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Contact Info*/}
                <section className="widget widget-light-skin">
                  <h3 className="widget-title">CONTACTO</h3>
                  <p className="text-white">
                    <a className="navi-link-light" href="#">
                      Teléfono: +(54) 351-2370691
                    </a>
                  </p>
                  <p>
                    <a className="navi-link-light" href="#">
                      Email: support@smarket.com
                    </a>
                  </p>
                  <p>
                    <a className="navi-link-light" href="#">
                      Smarket Social
                    </a>
                  </p>
                  <a
                    className="social-button shape-circle sb-facebook sb-light-skin"
                    href="#">
                    <i className="socicon-facebook" />
                  </a>
                  <a
                    className="social-button shape-circle sb-instagram sb-light-skin"
                    href="#">
                    <i className="socicon-instagram" />
                  </a>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* About Us*/}
                <section className="widget widget-links widget-light-skin">
                  <h3 className="widget-title">NOSOTROS</h3>
                  <ul>
                    <li>
                      <a href="#">Quiénes Somos</a>
                    </li>
                    <li>
                      <a href="/utils/faqs">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Mobile App Buttons*/}
                <section className="widget widget-links widget-light-skin">
                  <h3 className="widget-title">MARCAS</h3>
                  <ul>
                    <li>
                      <a href="#">Adidas</a>
                    </li>
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Chanel</a>
                    </li>
                    <li>
                      <a href="#">Motorola</a>
                    </li>
                    <li>
                      <a href="#">Stanley</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Account / Shipping Info*/}
                <section className="widget widget-links widget-light-skin">
                  <h3 className="widget-title">DATOS DE COLOR</h3>
                  <ul>
                    <li>
                      <a href="#">Medios de Pago</a>
                    </li>
                    <li>
                      <a href="#">Políticas de Calidad</a>
                    </li>
                    <li>
                      <a href="#">Devoluciones</a>
                    </li>
                    <li>
                      <a href="#">Información Aduanera</a>
                    </li>
                    <li>
                      <a href="#">Terminos y Condiciones</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            {/* Copyright*/}
            <div className="row">
                <p className="footer-copyright col-sm-3">
                  <i className="icon-heart text-danger"/> 
                  &nbsp;&nbsp;Colaborativo
                </p>
                <p className="footer-copyright col-sm-3">
                  <i className="icon-heart text-danger"/> 
                  &nbsp;&nbsp;Seguro
                </p>
                <p className="footer-copyright col-sm-3">
                  <i className="icon-heart text-danger"/> 
                  &nbsp;&nbsp;Cómodo
                </p>
                <p className="footer-copyright col-sm-3">
                  <i className="icon-heart text-danger"/> 
                  &nbsp;&nbsp;Transparente
                </p>
            </div>

            


            </div>
        </footer>
      </>
    );
  }
}

export default Footer;
