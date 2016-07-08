const AppDispatcher = require('../dispatcher/dispatcher');
const ReviewConstants = require('../constants/review_constants');
const ReviewApiUtil = require('../util/review_api_util');

const ReviewActions = {
  fetchAllReviews(){    
    ReviewApiUtil.fetchAllReviews(ReviewActions.receiveAllReviews);
  },
  receiveAllReviews(reviews){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },
  createReview(data){
    ReviewApiUtil.createReview(data, ReviewActions.receiveReview);
  },
  receiveReview(review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },
};

module.exports = ReviewActions;
