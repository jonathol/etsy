const React = require('react');

const ReviewIndexItem = React.createClass({
  render(){
    let review = this.props.review;
    let stars = [];
    for (var i = 0; i < review.score; i++) {
      stars.push(<label key={i} className="review-star"></label>);
    }


    if(review) {
      return (
        <li className='review-index-item'>
          <div className='review-box'>
            <img src={review.user.img_url} className="review-img"/>
            <h5 className="review-user">{review.user.username}</h5>
          </div>
          <div className='review-score'>{stars}</div>
          <div className='review-comment'>{review.comment}</div>
        </li>
      );
    }
  }
});

module.exports = ReviewIndexItem;
