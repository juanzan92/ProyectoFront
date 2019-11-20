import React from "react";

class ReactCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var body = "";
    const { img, id, text, title } = this.props;
    if (text !== "") {
      body = <p className="text-muted">{body}</p>;
    }
    return (
      <>
        <div className="card mb-30">
          <a className="card-img-tiles" href={"/" + id}>
            <div className="inner">
              <div className="main-img">
                <img src={img} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title">{title}</h4>
            {body}
            <a
              className="btn btn-outline-primary btn-sm"
              href={`/category/${id}`}>
              {text}
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default ReactCard;
