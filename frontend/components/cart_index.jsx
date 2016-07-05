const React = require('react');
const CartStore = require('../stores/cart_store');
const CartActions = require('../actions/cart_actions');
const PurchaseIndex = require('./purchase_index');

const CartIndex = React.createClass({
  getInitialState(){
    CartActions.fetchCart();
    return {cart: CartStore.current()};
  },
  componentDidMount(){
    this.cartListener = CartStore.addListener(this._cartChanged);
  },
  _cartChanged(){
    this.setState({cart: CartStore.current()});
  },
  componentWillUnmount(){
    this.cartListener.remove();
  },
  render(){
    return (
      <PurchaseIndex purchases={this.state.cart.purchases} />
    );
  }
});

module.exports = CartIndex;
