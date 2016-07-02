const React = require('react');

const ListingDetail = React.createClass ({
  render(){
    return(
      <div className="listing-detail-container">
        <div className="listing-detail-top">
          <img src={this.props.listing.img_url} className="listing-detail-image"/>
          <div className="listing-detail-overview">
            <h3 className="listing-detail-overview-name">{this.props.listing.name}</h3>
            <form>
              TempForm
            </form>
            <div>
              <h4>Overview</h4>
              <h5>Nutrition</h5>
              <p>{this.props.listing.nutrition}</p>
              <h5>Ingredients</h5>
              <p>{this.props.listing.ingredients}</p>
            </div>
          </div>
        </div>
        <div className="listing-detail-bottom">
          <p>
            {this.props.listing.description}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ListingDetail;
