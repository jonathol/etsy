const ListingApiUtil = {
  fetchAllListings(callback){    
    $.ajax({
      url: '/api/listings',
      type: 'GET',
      success: function(benches) {
        callback(benches);
      }
    });
  }
};

module.exports = ListingApiUtil;
