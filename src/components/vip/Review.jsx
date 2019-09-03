import React from   'react'


class Review extends React.Component {


constructor(props){
    super(props)
    


}


creatStars(){
    let score = this.reviews.score
    let stars = []
    for(let i = 0; i < score; i++){
        stars.push(<i class="icon-star filled"></i>)
    }
    score = 5 - score
    for(let i = 0; i < score; i++){
        stars.push(<i class="icon-star"></i>)
    }
    return stars
}


render(){
return(
    <>
                    <div class="comment">
                    <div class="comment-body">
                      <div class="comment-header d-flex flex-wrap justify-content-between">
                        <h4 class="comment-title">{this.props.review.title}</h4>
                        <div class="mb-2">
                            <div class="rating-stars">
                                {this.creatStars()}
                            </div>
                        </div>
                      </div>
                      <p class="comment-text">{this.props.review.body}</p>
                      <div class="comment-footer"><span class="comment-meta">{this.props.review.reviewer}</span></div>
                    </div>
                  </div>             
    </>
)

}

}
export default Review
