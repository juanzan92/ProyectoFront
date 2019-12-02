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
