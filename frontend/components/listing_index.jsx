const React = require('react');
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const ListingIndexItem = require('./listing_index_item');

const ListingIndex = React.createClass({
  getInitialState(){
    return {listings: ListingStore.all()};
  },
  _handleChange(){
    this.setState({listings: ListingStore.all()});
  },
  componentDidMount(){
    this.storeListener = ListingStore.addListener(this._handleChange);
    ListingActions.fetchAllListings();
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  render(){
    const listings = this.state.listings;
    const listingKeys = Object.keys(listings);
    const reverseKeys = listingKeys.reverse();

    return(
      <div>
        <h2 className="listing-title">Homemade meals delivered to your door!</h2>
        <div className="listing-index-container">
          {
            reverseKeys.map( key => {
              return <ListingIndexItem
                key={listings[key].id}
                listing={listings[key]}
                />;
            })
          }
          <div >&nbsp</div>
          <div class="filler-div"></div>
          <div class="filler-div"></div>
          <div class="filler-div"></div>
        </div>
      </div>
    );
  }
});

module.exports = ListingIndex;
