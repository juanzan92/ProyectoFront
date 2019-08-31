import React from "react";

import Timer from "../utils/Timer";

class ReactSectionFeatureItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    if (item) {
      return (
        <>
          <section className="container-fluid padding-top-3x">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 mb-30">
                <div className="rounded bg-faded position-relative padding-top-3x padding-bottom-3x">
                  <span
                    className="product-badge text-danger"
                    style={{ top: "24px", left: "24px" }}
                  >
                    Dale Que se acaban !
                  </span>
                  <div className="text-center">
                    <h3 className="h2 text-normal mb-1">Ultimos</h3>
                    <h2 className="display-2 text-bold mb-2">{item.title}</h2>
                    <Timer endDate={item.date_end} />
                    <br />
                    <a
                      className="btn btn-primary margin-bottom-none"
                      href={"/vip/" + item.item_id}
                    >
                      Ir a Oportunidad
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-5 col-lg-6 mb-30"
                style={{ minHeight: "270px" }}
              >
                <div
                  className="img-cover rounded"
                  style={{
                    backgroundImage: "url(" + item.pictures[0].src + ")"
                  }}
                />
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <div className="spinner-border text-info m-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}
export default ReactSectionFeatureItem;
