const Store = require('flux/utils').Store;
const PurchaseConstants = require('../constants/purchase_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher');
const PurchaseStore = new Store(AppDispatcher);
let _purchases = {};


function addPurchase(purchase) {
  _purchases[purchase.id] = purchase;
  PurchaseStore.__emitChange();
}

function removePurchase(purchase) {
  delete _purchases[purchase.id];
  PurchaseStore.__emitChange();
}

PurchaseStore.all = function(){
  return Object.assign({},_purchases);
};

PurchaseStore.find = function(id){
  return _purchases[id];
};

PurchaseStore.resetPurchase = function(purchase){
  _purchases[purchase.id]=purchase;
};

PurchaseStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PurchaseConstants.PURCHASE_RECEIVED:
      addPurchase(payload.purchase);
      break;
    case PurchaseConstants.PURCHASE_REMOVED:
      removePurchase(payload.purchase);
      break;
  }
};

module.exports = PurchaseStore;
