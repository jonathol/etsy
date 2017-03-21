const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ListingIndexItem = require('./listing_index_item');

const Profile = React.createClass ({
  getInitialState (){
    return {
      name: "",
      listings : []
    };
  },
  componentDidMount (){
    let current = SessionStore.currentUser();
    let name;
    if (current.firstname) {
      name = current.firstname + " " + current.lastname;
    } else if (typeof current === 'undefined') {
      name = "";
    } else {
      name = current.username;
    }
    this.setState({
      name: name,
      listings : current.listings
    });

  },
  render (){
    const listings = this.state.listings;
    const listingKeys = Object.keys(listings);
    var view;


    if (listings.length > 0) {
      view =
        listingKeys.map( key => {
          return <ListingIndexItem
            key={listings[key].id}
            listing={listings[key]}
            />;
        })
      ;
    } else {
      view =  <div className="profile-empty-listing">No Listings</div>;
    }


    return(

      <div className="profile-container">
        <h2 className="listing-title">{this.state.name}&#39;s Listings</h2>
        <div className="listing-index-container">
          {
            view
          }
          <div className="filler-div">&nbsp;</div>
          <div className="filler-div">&nbsp;</div>
          <div className="filler-div">&nbsp;</div>
          <div className="filler-div">&nbsp;</div>
          <div className="filler-div">&nbsp;</div>
          <div className="filler-div">&nbsp;</div>
        </div>
      </div>
    );



  }
});


module.exports = Profile;
