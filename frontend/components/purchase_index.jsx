const React = require('react');
const PurchaseIndexItem = require('./purchase_index_item');
const PurchaseStore = require('../stores/purchase_store');

const PurchaseIndex = React.createClass({
  purchases () {
    if (this.props.purchases) {
      let listItems = this.props.purchases.map((purchase) => {
        PurchaseStore.resetPurchase(purchase);
        return(
          <PurchaseIndexItem switchComponent={this.props.switchComponent} key={purchase.id} purchase={purchase}/>
        );
      });
      return listItems;
    } else {
      return <div></div>;
    }
  },
  render(){
    return(
      <div>
        <ul>
          { this.purchases() }
        </ul>
      </div>
    );
  }
});

module.exports = PurchaseIndex;
