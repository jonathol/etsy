const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
let _listings = {};
const ListingStore = new Store(AppDispatcher);
const ListingConstants = require('../constants/listing_constants');

ListingStore.all = function (){
  return Object.assign({}, _listings);
};

function resetAllListings(listings){
  _listings = listings;
  ListingStore.__emitChange();
}

ListingStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      resetAllListings(payload.listings);
      break;
  }
};

ListingStore.find = function(id){
  return Object.assign({}, _listings[id]);
};

module.exports = ListingStore;
