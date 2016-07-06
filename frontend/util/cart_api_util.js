const CartApiUtil = {
  createCart(callback, userId){
    $.ajax({
      url: '/api/cart',
      type: 'POST',
      dataType: 'json',
      data: {cart: {user_id: userId}},
      success: function(cart) {
        callback(cart);
      }
    });
  },

  fetchCart(callback){
    $.ajax({
      url: '/api/cart',
      type: 'GET',
      success: function(cart) {      
          callback(cart);
      }
    });
  }
};

module.exports = CartApiUtil;
