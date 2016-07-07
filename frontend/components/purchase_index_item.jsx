const React = require('react');
const PurchaseStore = require('../stores/purchase_store');
const PurchaseActions = require('../actions/purchase_actions');
const Link = require('react-router').Link;

const PurchaseIndexItem = React.createClass ({
  getInitialState(){
    return {purchase: this.props.purchase};
  },
  componentDidMount(){
    this.purchaseListener = PurchaseStore.addListener(this.updatePurchase);
  },
  componentWillUnmount(){
    this.purchaseListener.remove();
  },
  updatePurchase(){
    this.setState({purchase: PurchaseStore.find(this.state.purchase.id)});
  },
  handleDelete (){
    PurchaseActions.deletePurchase(this.state.purchase.id);
  },
  handleBuy(){
    PurchaseActions.deletePurchase(this.state.purchase.id);
  },
  updateQuantity(e){
    e.preventDefault();
    let that = this;

    let data = {
      cart_id: this.state.purchase.cart_id,
      quantity: e.currentTarget.value,
      listing_id: this.state.purchase.listing_id,
    };
    PurchaseActions.editPurchase(that.state.purchase.id, data);
  },
  purchaseItem(){
    if(this.state.purchase) {
      return (<li className="cart-item-container">
        <div className="creator-container">
          <img
            className="creator-img"
            src={this.state.purchase.user.img_url}
          />
          <h3 className="creator-title">
            {this.state.purchase.user.username}
          </h3>
        </div>
        <div className="cart-listing-container">
          <div className="cart-listing-left">
            <img
              src={this.state.purchase.listing.img_url}
              className="cart-listing-img"
            />
            <div className="cart-listing-detail-container">
              <p>{this.state.purchase.listing.name}</p>
              <p>
                Total:
                ${(this.state.purchase.listing.price*this.state.purchase.quantity).toFixed(2)}
              </p>
              <label className="cart-listing-label">Quantity:
                <input
                  className='cart-listing-input'
                  type="number"
                  name="quantity"
                  min="1"
                  defaultValue={this.state.purchase.quantity}
                  onChange={this.updateQuantity}
                  id="quantity"
                />
              </label>
            </div>
          </div>
          <div className="cart-pay-container">
            <button className="cart-listing-detail-button"
                    onClick={ this.handleDelete }>
              Delete
            </button>
            <Link to="/review"
                  className="cart-listing-detail-button"
                  activeClassName="current"
                  onClick={ this.handleBuy }
            >
              Buy
            </Link>
          </div>
        </div>
      </li>);
    } else {
      return <div></div>;
    }
  },
  render (){
    return (
      this.purchaseItem()
    );
  }
});

module.exports = PurchaseIndexItem;
