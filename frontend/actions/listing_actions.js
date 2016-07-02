const AppDispatcher = require('../dispatcher/dispatcher');
const ListingConstants = require('../constants/listing_constants');
const ListingApiUtil = require('../util/listing_api_util');

const ListingActions = {
  fetchAllListings(){
    ListingApiUtil.fetchAllListings(this.receiveAllListings);
  },
  receiveAllListings(listings){    
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  }
};

module.exports = ListingActions;
