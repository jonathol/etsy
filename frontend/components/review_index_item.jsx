const React = require('react');

const ReviewIndexItem = React.createClass({
  render(){
    let review = this.props.review;
    if(review) {
      return (
        <li>
          <div>Score: {review.score}</div>
          <div>Comment: {review.comment}</div>
        </li>
      );
    } else {
      return (
        <li></li>
      );
    }
  }
});

module.exports = ReviewIndexItem;
