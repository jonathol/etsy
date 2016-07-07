const ReviewApiUtil = {
  fetchAllReviews(callback){
    $.ajax({
      url: '/api/reviews',
      type: 'GET',
      success: function(benches) {
        callback(benches);
      }
    });
  },
  createReview(data, callback){
    $.ajax({
      url: '/api/reviews',
      type: 'POST',
      data: {data},
      success: function(review) {
        callback(review);
      }
    });
  }
};

module.exports = ReviewApiUtil;
