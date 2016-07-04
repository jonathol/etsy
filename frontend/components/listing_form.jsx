const React = require('react');

const ListingForm = React.createClass ({
  render(){
    return(
      <form className="listing-form">
        <label className="listing-form-label">Quantity:
          <br/>
          <input
            className='listing-form-input'
            type="number"
            name="quantity"
            min="1"
            max="10"
            defaultValue="0"
          />
        </label>
        <br/>
        <div className="listing-button-container">
          <button type='button' className='listing-form-button'>
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
