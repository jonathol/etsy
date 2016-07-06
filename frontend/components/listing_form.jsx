const React = require('react');
const PurchaseActions = require('../actions/purchase_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;


const ListingForm = React.createClass ({
  getInitialState() {
    return {
			quantity: 1
    };
  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  handleAdd(){
    let data = {
      cart_id: SessionStore.currentUser().id,
      listing_id: this.props.listing.id,
      quantity: this.state.quantity
    };

    PurchaseActions.createPurchase(data);
    hashHistory.push("/cart");

  },
  _handleSubmit(){
    hashHistory.push("/");
  },
  render(){
    return(
      <form className="listing-form" onSubmit={this._handleSubmit}>
        <label className="listing-form-label">Quantity:
          <br/>
          <input
            className='listing-form-input'
            type="number"
            name="quantity"
            min="1"
            defaultValue="1"
            onChange={this.update("quantity")}
          />
        </label>
        <br/>
        <div className="listing-button-container">
          <button type='button' className='listing-form-button' onClick={this.handleAdd}>
            Add to cart
          </button>
          <input
            type="submit"
            className='listing-form-button'
            value="Buy"
            />
        </div>
      </form>
    );
  }

});

module.exports = ListingForm;
