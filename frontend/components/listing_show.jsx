const React = require('react');
const Link = require('react-router').Link;
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const ListingDetail = require('./listing_detail');
const ReviewForm = require('../components/review_form');
const Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : 0,
    border                : 0,
    height                : 600,
    overflow              : 'hidden',
    border                : '1px solid #ccc'
  }
};


const ListingShow = React.createClass ({
  getInitialState() {
    const listingId = this.props.params.listingId;
    const listing = ListingStore.find(listingId) || {} ;
    return { listing: listing, checkOut: false, modalIsOpen: false, bought: false };
  },
  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
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
      this.setState({checkOut: true, modalIsOpen: true});
    }
  },
  handleSubmit() {
    this.closeModal();
    this.setState({bought: true});

	},

  currentComponent(){
    if (this.state.checkOut) {
      return <div className="single-listing-show">
        <ListingDetail listing={this.state.listing} switchComponent={this.switchComponent}/>
        <Link className="back" to="/" >Back to Listings</Link>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Listing Show Modal" >
          <ul ref="subtitle" className="modalTab">

          </ul>
          <form onSubmit={this.handleSubmit} className="form-box">
            <h3>PRESSING "BUY" DOES NOTHING</h3>
            <div className="login-form">
              <label className="login-label"> Name:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br />
              <label className="login-label"> Address:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> City:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> State:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> Zip Code:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br/>
              <label className="login-label"> Card Number:
                <br/>
                <input type="text"
                  className="login-input" />
              </label>

              <br />
              <input className="login-submit" type="submit" value="Buy"/>
            </div>
          </form>

        </Modal>
      </div>;
    } else {
      return <div className="single-listing-show">
        <ListingDetail listing={this.state.listing} switchComponent={this.switchComponent}/>
        <Link className="back" to="/" >Back to Listings</Link>
      </div>;
    }
  },

  render(){
    var currView;
    if (this.state.bought){
      currView = <ReviewForm listing={this.props.params.listingId} />;
    } else {
      currView = this.currentComponent();
    }
    return(
      currView
    );
  }
});

module.exports = ListingShow;
