const React = require('react');
const CartStore = require('../stores/cart_store');
const CartActions = require('../actions/cart_actions');
const PurchaseIndex = require('./purchase_index');
const Link = require('react-router').Link;
const ReviewForm = require('../components/review_form');
const Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : 0,
    border                : 0,
    height                : 600,
    overflow              : 'hidden',
    border                : '1px solid #ccc'
  }
};

const CartIndex = React.createClass({
  getInitialState(){
    CartActions.fetchCart();
    return {cart: CartStore.current(), checkOut: false, listing: 0, modalIsOpen: false, bought: false};
  },
  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
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
      this.setState({checkOut: true, listing: number, modalIsOpen: true});
    }
  },

  handleSubmit() {
    this.closeModal();
    this.setState({bought: true});

	},

  currentComponent(){
    if (this.state.checkOut) {
      return <div className="cart-container">
        <h2 className="cart-container-title">Your Cart</h2>
        <PurchaseIndex switchComponent={this.switchComponent} purchases={this.state.cart.purchases} />
        <Link className="cart-back" to="/" >Back to Listings</Link>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles} >
          <ul ref="subtitle" className="modalTab">

          </ul>
          <form onSubmit={this.handleSubmit} className="form-box">
            <h3>PRESSING "BUY" DOES NOTHING</h3>
            <div className="login-form">
              <label className="login-label"> Name:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br />
              <label className="login-label"> Address:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> City:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> State:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> Zip Code:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> Card Number:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br />
              <input className="login-submit" type="submit" value="Buy"/>
            </div>
          </form>

        </Modal>
      </div>;

      //
    } else {
      return <div className="cart-container">
        <h2 className="cart-container-title">Your Cart</h2>
        <PurchaseIndex switchComponent={this.switchComponent} purchases={this.state.cart.purchases} />
        <Link className="cart-back" to="/" >Back to Listings</Link>
      </div>;
    }
  },

  render(){
    var currView;
    if (this.state.bought){
      currView = <ReviewForm listing={this.state.listing}/>;
    } else {
      currView = this.currentComponent();
    }
    return (
      currView
    );
  }
});

module.exports = CartIndex;
