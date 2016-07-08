const React = require('react');
const Link = require('react-router').Link;
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const ListingDetail = require('./listing_detail');
const ReviewForm = require('../components/review_form');


const ListingShow = React.createClass ({
  getInitialState() {
    const listingId = this.props.params.listingId;
    const listing = ListingStore.find(listingId) || {} ;
    return { listing: listing, checkOut: false };
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
    this.setState({ listing: listing });
  },

  _listingChanged() {
    const listingId = this.props.params.listingId;
    const listing = ListingStore.find(listingId);
    this.setState({ listing: listing });
  },

  switchComponent(){
    if (this.state.checkOut) {
      this.setState({checkOut: false});
    } else {
      this.setState({checkOut: true});
    }
  },

  currentComponent(){
    if (this.state.checkOut) {
      return <ReviewForm listing={this.props.params.listingId} />;
    } else {
      return <div className="single-listing-show">
        <ListingDetail listing={this.state.listing} switchComponent={this.switchComponent}/>
        <Link className="back" to="/" >Back to Listings</Link>
      </div>;
    }
  },

  render(){
    return(
      this.currentComponent()
    );
  }
});

module.exports = ListingShow;
