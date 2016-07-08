const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
let _reviews = {};
const ReviewStore = new Store(AppDispatcher);
const ReviewConstants = require('../constants/review_constants');

ReviewStore.all = function (){
  return Object.assign({}, _reviews);
};

function resetAllReviews(reviews){  
  _reviews = reviews;
  ReviewStore.__emitChange();
}

function addReview(review) {
  _reviews[review.id] = review;
  ReviewStore.__emitChange();
}

ReviewStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      resetAllReviews(payload.reviews);
      break;
    case ReviewConstants.REVIEW_RECEIVED:
      addReview(payload.review);
      break;
  }
};

ReviewStore.find = function(id){
  return Object.assign({}, _reviews[id]);
};

module.exports = ReviewStore;
