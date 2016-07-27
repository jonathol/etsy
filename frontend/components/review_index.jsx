const React = require('react');
const ReviewStore = require('../stores/review_store');
const ReviewIndexItem = require('./review_index_item');

const ReviewIndex = React.createClass({
  render(){
    if (this.props.listing.reviews.length > 0) {
    let reviewKeys = Object.keys(this.props.listing.reviews);
    reviewKeys.reverse();

    let stars = [];
    for (var i = 0; i < this.props.listing.averageScore; i++) {
    stars.push(<label key={i} className="review-star average"></label>);
    }
      return  <ul>
                <li><h4>Average: {stars}</h4></li>
                {
                  reviewKeys.map(key => {
                    return <ReviewIndexItem key={this.props.listing.reviews[key].id} review={this.props.listing.reviews[key]}  />;
                  })
                }
              </ul>;
    } else {
      return <div>No reviews</div>;
    }
  }
});

module.exports = ReviewIndex;
