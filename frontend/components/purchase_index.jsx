const React = require('react');

const PurchaseIndex = React.createClass({
  hasPurchases () {
    debugger
    if (this.props.purchases) {
      this.props.purchases.map(purchase => {
        return(
          <li key={this.props.purchases.id}>
            <p>Quantity: this.props.purchases.quantity</p>
            <p>Listing ID: this.props.purchases.listing_id</p>
            <p>Cart ID: this.props.purchases.cart_id</p>
          </li>
        );
      });
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
