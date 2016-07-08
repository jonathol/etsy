const React = require('react');
const CartStore = require('../stores/cart_store');
const CartActions = require('../actions/cart_actions');
const PurchaseIndex = require('./purchase_index');
const Link = require('react-router').Link;
const ReviewForm = require('../components/review_form');

const CartIndex = React.createClass({
  getInitialState(){
    CartActions.fetchCart();
    return {cart: CartStore.current(), checkOut: false, listing: 0};
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

  switchComponent(number){
    if (this.state.checkOut) {
      this.setState({checkOut: false});
    } else {
      this.setState({checkOut: true, listing: number});
    }
  },

  currentComponent(){
    if (this.state.checkOut) {
      return <ReviewForm listing={this.state.listing}/>;
    } else {
      return <div className="cart-container">
        <h2 className="cart-container-title">Your Cart</h2>
        <PurchaseIndex switchComponent={this.switchComponent} purchases={this.state.cart.purchases} />
        <Link className="cart-back" to="/" >Back to Listings</Link>
      </div>;
    }
  },
  render(){
    return (
      this.currentComponent()
    );
  }
});

module.exports = CartIndex;
