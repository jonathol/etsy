const React = require('react');
const Autosuggest = require('react-autosuggest');
const ListingStore = require('../stores/listing_store');
const ListingActions = require('../actions/listing_actions');
const hashHistory = require('react-router').hashHistory;

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
      listings: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

  _handleChange(){
    let allListing = ListingStore.all();
    let listingKeys = Object.keys(allListing);
    let listings = [];

    listingKeys.map( key => {
      return listings.push({
        name: allListing[key].name,
        img_url: allListing[key].img_url,
        id: allListing[key].id
      });
    });
    this.setState({listings: listings});
  }

  componentDidMount(){
    this.storeListener = ListingStore.addListener(this._handleChange.bind(this));
    ListingActions.fetchAllListings();
  }

  componentWillUnmount(){
    this.storeListener.remove();
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.listings.filter(listing =>
      listing.name.toLowerCase().indexOf(inputValue) > -1
    );
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  handleClick(suggestion) {
    hashHistory.push(`/listing/${suggestion.id}`);  
  }

  renderSuggestion(suggestion) {
    return (
      <div onClick={this.handleClick.bind(this,suggestion)} className="suggestion">
        <img className="suggestion-img" src={suggestion.img_url} />
        <div className="suggestion-name" >{suggestion.name}</div>
      </div>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest suggestions={suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={this.getSuggestionValue}
                   renderSuggestion={this.renderSuggestion.bind(this)}
                   inputProps={inputProps} />
    );
  }
}

module.exports = Search;
