import React from   'react'


class Review extends React.Component {


constructor(props){
    super(props)
    


}


creatStars(){
    let score = this.reviews.score
    let stars = []
    for(let i = 0; i < score; i++){
        stars.push(<i className="icon-star filled"></i>)
    }
    score = 5 - score
    for(let i = 0; i < score; i++){
        stars.push(<i className="icon-star"></i>)
    }
    return stars
}


render(){
return(
    <>
                    <div className="comment">
                    <div className="comment-body">
                      <div className="comment-header d-flex flex-wrap justify-content-between">
                        <h4 className="comment-title">{this.props.review.title}</h4>
                        <div className="mb-2">
                            <div className="rating-stars">
                                {this.creatStars()}
                            </div>
                        </div>
                      </div>
                      <p className="comment-text">{this.props.review.body}</p>
                      <div className="comment-footer"><span className="comment-meta">{this.props.review.reviewer}</span></div>
                    </div>
                  </div>             
    </>
)

}

}
export default Review
