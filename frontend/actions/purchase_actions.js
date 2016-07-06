const PurchaseApiUtil = require('../util/purchase_api_util');
const PurchaseConstants = require('../constants/purchase_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const PurchaseActions = {
  createPurchase(data) {
    PurchaseApiUtil.createPurchase(data, PurchaseActions.receivePurchase);
  },

  deletePurchase(data) {
    PurchaseApiUtil.deletePurchase(data, PurchaseActions.removePurchase);
  },

  receivePurchase(purchase) {
    AppDispatcher.dispatch({
      actionType: PurchaseConstants.PURCHASE_RECEIVED,
      purchase: purchase
    });
  },

  removePurchase(purchase) {
    AppDispatcher.dispatch({
      actionType: PurchaseConstants.PURCHASE_REMOVED,
      purchase: purchase
    });
  }
};

module.exports = PurchaseActions;
