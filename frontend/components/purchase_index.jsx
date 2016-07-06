const React = require('react');
const PurchaseActions = require('../actions/purchase_actions');
const hashHistory = require('react-router').hashHistory;

const PurchaseIndex = React.createClass({
  handleDelete(){
    debugger
    let data = {
      cart_id: this.state.cart_id,
      quantity: this.state.quantity,
      listing_id: this.state.listing_id
    };

    PurchaseActions.deletePurchase(data);
    hashHistory.push('/cart');
  },
  hasPurchases () {
    if (this.props.purchases) {
      let listingItem = this.props.listings;
      let listItems = this.props.purchases.map((purchase, idx) => {
        return(
          <li key={purchase.id} className="cart-item-container">
            <div className="creator-container">
              <img className="creator-img" src={listingItem[idx].user.img_url} />
              <h3 className="creator-title">{listingItem[idx].user.username}</h3>
            </div>
            <div className="cart-listing-container">
              <div className="cart-listing-left">
                <img src={listingItem[idx].img_url} className="cart-listing-img"/>
                <div className="cart-listing-detail-container">
                  <p>{listingItem[idx].name}</p>
                  <p>Total: ${(listingItem[idx].price*purchase.quantity).toFixed(2)}</p>
                  <p>Quantity: {purchase.quantity}</p>
                </div>
              </div>
              <div className="cart-pay-container">
                <button className="cart-listing-detail-button" type="button" onClick={this.handleDelete}>Delete</button>
                <button className="cart-listing-detail-button" type="button">Edit</button>
                <button className="cart-listing-detail-button" type="button">Buy</button>
              </div>
            </div>
          </li>
        );
      });
      return listItems;
    } else {
      return <div></div>;
    }
  },
  render(){
    return(
      <ul>
        {
          this.hasPurchases()
        }
      </ul>
    );
  }
});

module.exports = PurchaseIndex;
