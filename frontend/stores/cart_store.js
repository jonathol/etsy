const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
let _carts = {};
const CartStore = new Store(AppDispatcher);
const CartConstants = require('../constants/cart_constants');

CartStore.current = function (){  
  return Object.assign({}, _carts);
};

function resetCart(cart){
  _carts = cart;
  CartStore.__emitChange();
}

CartStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CartConstants.CART_RECEIVED:
      resetCart(payload.cart);
      break;
  }
};

module.exports = CartStore;
