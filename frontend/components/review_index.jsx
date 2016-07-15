const React = require('react');
const ReviewStore = require('../stores/review_store');
const ReviewActions = require('../actions/review_actions');
const ReviewIndexItem = require('./review_index_item');

const ReviewIndex = React.createClass({
  getInitialState(){
    ReviewActions.fetchAllReviews();
    return {reviews: ReviewStore.all()};
  },
  componentDidMount(){
    this.reviewListener = ReviewStore.addListener(this.filterReviews);
  },
  componentWillUnmount(){
    this.reviewListener.remove();
  },
  filterReviews(){
    let unfilteredReview = ReviewStore.all();
    let uReviewKeys = Object.keys(unfilteredReview);
    let reviews = {};
    uReviewKeys.map(key=>{
      if (unfilteredReview[key].listing_id === this.props.listing.id) {
        reviews[key] = unfilteredReview[key];
      }
    });
    this.setState({reviews: reviews});
  },
  render(){
    let reviewKeys = Object.keys(this.state.reviews);
    reviewKeys.reverse();

    let stars = [];
    for (var i = 0; i < this.props.listing.averageScore; i++) {
      stars.push(<label key={i} className="review-star average"></label>);
    }

    if (reviewKeys.length > 0) {
      return  <ul>
                <li><h4>Average: {stars}</h4></li>
                {
                  reviewKeys.map(key => {
                    return <ReviewIndexItem key={this.state.reviews[key].id} review={this.state.reviews[key]} />;
                  })
                }
              </ul>;
    } else {
      return <div>No reviews</div>;
    }
  }
});

module.exports = ReviewIndex;