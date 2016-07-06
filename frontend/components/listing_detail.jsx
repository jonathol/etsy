const React = require('react');
const ListingForm = require('./listing_form');
const hashHistory = require('react-router').hashHistory;

let leftTab = "details-tab left selected";
let middleTab = 'details-tab middle';
let rightTab = 'details-tab right';

const ListingDetail = React.createClass ({
  getInitialState(){
    return {currentTab: 'detail'};
  },
  componentDidMount(){
    this.resetTabs();
  },
  resetTabs(){
    leftTab = "details-tab left selected";
    middleTab = 'details-tab middle';
    rightTab = 'details-tab right';
  },
  currentDetail(){
    if (this.state.currentTab === 'detail') {
      return this.props.listing.description;
    } else if (this.state.currentTab === 'review') {
      return "Reviews";
    } else {
      return "Shipping and Policies";
    }
  },
  handleLeft(){
    leftTab = "details-tab left selected";
    middleTab = 'details-tab middle';
    rightTab = 'details-tab right';
    this.setState({currentTab: 'detail'});
    hashHistory.push(`/listing/${this.props.listing.id}`);
  },
  handleMiddle(){
    leftTab = "details-tab left";
    middleTab = 'details-tab middle selected';
    rightTab = 'details-tab right';
    this.setState({currentTab: 'review'});
    hashHistory.push(`/listing/${this.props.listing.id}`);
  },
  handleRight(){
    leftTab = "details-tab left";
    middleTab = 'details-tab middle';
    rightTab = 'details-tab right selected';
    this.setState({currentTab: 'shipping'});
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
            <h4 className="listing-detail-overview-title">
              ${this.props.listing.price}
            </h4>
            <div>
              <h4 className="listing-detail-overview-title">
                Ingredients
              </h4>
              <p className="listing-detail-overview-info">
                {this.props.listing.ingredients}
              </p>
            </div>
            <ListingForm listing={this.props.listing}/>
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
            <li className={rightTab} onClick={this.handleRight}>
              Shipping and Policies
            </li>
          </ul>
          <p className="details-body">
            {this.currentDetail()}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ListingDetail;
