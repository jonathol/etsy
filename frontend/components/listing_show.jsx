const React = require('react');
const Link = require('react-router').Link;
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const ListingDetail = require('./listing_detail');


const ListingShow = React.createClass ({
  getInitialState() {
    const listingId = this.props.params.listingId;
    const listing = ListingStore.find(listingId) || {} ;
    return { listing };
  },
  componentDidMount() {
    this.listingListener = ListingStore.addListener(this._listingChanged);
    ListingActions.fetchAllListings();
  },

  componentWillUnmount() {
    this.listingListener.remove();
  },

  componentWillReceiveProps(newProps){
    const listingId = newProps.params.listingId;
    const listing = ListingStore.find(listingId) || {} ;
    this.setState({ listing});
  },

  _listingChanged() {
    const listingId = this.props.params.listingId;
    const listing = ListingStore.find(listingId);
    this.setState({ listing });
  },
  render(){
    return(
      <div className="single-listing-show">
        <ListingDetail listing={this.state.listing} />
        <Link className="back" to="/" >Back to Listings</Link>
      </div>
    );
  }
});

module.exports = ListingShow;
