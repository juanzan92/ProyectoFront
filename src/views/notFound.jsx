import React from "react";

import wrapper from "../components/Wrapper";

class notFound extends React.Component {
  render() {
    var style = {
      width: "100%",
      maxWidth: "550px"
    };
    return (
      <>
        <div className="offcanvas-wrapper">
          <div className="container padding-top-3x padding-bottom-3x mb-1">
            <img
              className="d-block m-auto"
              src="img/404_art.jpg"
              style={style}
              alt="404"
            />
            <div className="padding-top-1x mt-2 text-center">
              <h3>Page Not Found</h3>
              <p>
                Esta no es la pagina que estas buscando!
                <a href="/">Volver a home</a>
                <br />
                Prueba buscar en la parte superior la pagina que deseas
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default wrapper(notFound);
