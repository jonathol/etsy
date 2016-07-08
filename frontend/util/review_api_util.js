const ReviewApiUtil = {
  fetchAllReviews(callback){
    $.ajax({
      url: '/api/reviews',
      type: 'GET',
      success: function(reviews) {  
        callback(reviews);
      }
    });
  },
  createReview(data, callback){
    $.ajax({
      url: '/api/reviews',
      type: 'POST',
      data: {review: data},
      success: function(review) {
        callback(review);
      }
    });
  }
};

module.exports = ReviewApiUtil;
