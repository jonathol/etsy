const Store = require('flux/utils').Store;
const PurchaseConstants = require('../constants/favorite_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher');
const PurchaseStore = new Store(AppDispatcher);
let _purchases = {};


function addPurchase(purchase) {
  _purchases[purchase.id] = purchase;
  PurchaseStore.__emitChange();
}

function removePurchase(purchase) {  
  _purchases[purchase.id] = {};
  PurchaseStore.__emitChange();
}

PurchaseStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PurchaseConstants.PURCHASE_RECEIVED:
      PurchaseStore.addPurchase(payload.purchase);
      break;
    case PurchaseConstants.PURCHASE_REMOVED:
      PurchaseStore.removePurchase(payload.purchase);
      break;
  }
};

module.exports = PurchaseStore;
