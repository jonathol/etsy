const React = require('react');
const CartStore = require('../stores/cart_store');
const CartActions = require('../actions/cart_actions');
const PurchaseIndex = require('./purchase_index');
const Link = require('react-router').Link;

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
      <div className="cart-container">
        <h2 className="cart-container-title">Your Cart</h2>
        <PurchaseIndex purchases={this.state.cart.purchases} />
        <Link className="cart-back" to="/" >Back to Listings</Link>
      </div>
    );
  }
});

module.exports = CartIndex;
