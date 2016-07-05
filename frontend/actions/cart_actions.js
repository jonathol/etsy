const AppDispatcher = require('../dispatcher/dispatcher');
const CartConstants = require('../constants/cart_constants');
const CartApiUtil = require('../util/cart_api_util');


const CartActions = {
  createCart(currentUser){
    CartApiUtil.createCart(CartActions.receiveCart, currentUser);
  },

  fetchCart(){
    CartApiUtil.fetchCart(CartActions.receiveCart);
  },

  receiveCart(cart) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_RECEIVED,
      cart: cart
    });
  },

};

module.exports = CartActions;
