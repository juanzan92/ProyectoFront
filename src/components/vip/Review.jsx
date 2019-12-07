import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.creatStars = this.creatStars.bind(this);
  }

  creatStars() {
    let score = this.props.review.review_score;
    let stars = [];
    for (let i = 0; i < score; i++) {
      stars.push(<i className="icon-star filled"></i>);
    }
    score = 5 - score;
    for (let i = 0; i < score; i++) {
      stars.push(<i className="icon-star"></i>);
    }

    return <div className="rating-stars">{stars}</div>;
  }

  render() {
    const { review } = this.props;
    if (review) {
      return (
        <>
          <div className="comment">
            <div className="comment-body">
              <div className="comment-header d-flex flex-wrap justify-content-between">
                <h4 className="comment-title">{"Gran Producto"}</h4>
                <div className="mb-2">{this.creatStars()}</div>
              </div>
              <p className="comment-text">{this.props.review.description}</p>
              <div className="comment-footer">
                <span className="comment-meta">
                  {this.props.review.username}
                </span>
              </div>
            </div>
          </div>
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
export default Review;
