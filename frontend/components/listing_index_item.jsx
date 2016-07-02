const React = require('react');
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const hashHistory = require('react-router').hashHistory;

const ListingIndexItem = React.createClass ({
  _handleClick(){
    hashHistory.push(`/listing/${this.props.listing.id}`);
  },
  render(){
    return(
      <div className="listing-index-item-container" onClick={this._handleClick}>
        <img className="listing-img" src={this.props.listing.img_url} />
        <div className = "listing-name">{this.props.listing.name}</div>
      </div>
    );
  }
});

module.exports= ListingIndexItem;
