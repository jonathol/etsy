const React = require('react');
const ListingForm = require('./listing_form');
const hashHistory = require('react-router').hashHistory;
const ReviewIndex = require('./review_index');

let leftTab = "details-tab left selected";
let middleTab = 'details-tab middle';
let rightTab = 'details-tab right';

const ListingDetail = React.createClass ({
  getInitialState(){
    this.resetTabs();
    return {currentTab: 'detail'};

  },

  resetTabs(){
    leftTab = "details-tab left selected";
    middleTab = 'details-tab right';
  },
  currentDetail(){
    if (this.state.currentTab === 'detail') {
      return this.props.listing.description;
    } else if (this.state.currentTab === 'review') {
      return <ReviewIndex listing={this.props.listing}/>;
    } else {
      return "Shipping and Policies";
    }
  },
  handleLeft(){
    leftTab = "details-tab left selected";
    middleTab = 'details-tab right';
    this.setState({currentTab: 'detail'});
    hashHistory.push(`/listing/${this.props.listing.id}`);
  },
  handleMiddle(){
    leftTab = "details-tab left";
    middleTab = 'details-tab right selected';
    this.setState({currentTab: 'review'});
    hashHistory.push(`/listing/${this.props.listing.id}`);
  },

  render(){

    return(
      <div className="listing-detail-container">
        <div className="listing-detail-top">
          <img
            src={this.props.listing.img_url}
            className="listing-detail-image"
          />
          <div className="listing-detail-overview">
            <h3 className="listing-detail-overview-name">
              {this.props.listing.name}
            </h3>
            <p className="listing-detail-overview-info">
              by {this.props.listing.user}
            </p>
            <h4 className="listing-detail-overview-title">
              ${this.props.listing.price}
            </h4>
            <div>
              <h4 className="listing-detail-overview-title">
                Ingredients&#58;
              </h4>
              <p className="listing-detail-overview-info">
                {this.props.listing.ingredients}
              </p>
            </div>
            <ListingForm switchComponent={this.props.switchComponent} listing={this.props.listing}/>
          </div>
        </div>
        <div className="listing-detail-bottom">
          <ul className="details-nav">
            <li className={leftTab} onClick={this.handleLeft}>
              Details
            </li>
            <li className={middleTab} onClick={this.handleMiddle}>
              Reviews
            </li>
          </ul>
          <div className="details-body">
            {this.currentDetail()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListingDetail;
