const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ListingIndexItem = require('./listing_index_item');

const People = React.createClass ({
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
    debugger
  },
  render (){
    const listings = this.state.listings;
    const listingKeys = Object.keys(listings);

    return(

      <div className="profile-container">
        <h2>{this.state.name}</h2>
        {
          reverseKeys.map( key => {
            return <ListingIndexItem
              key={listings[key].id}
              listing={listings[key]}
              />;
          })

        }
      </div>
    );



  }
});


module.exports = People;
