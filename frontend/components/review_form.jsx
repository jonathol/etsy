const React = require('react');
const hashHistory = require('react-router').hashHistory;

const SessionStore = require('../stores/session_store');

const ReviewActions = require('../actions/review_actions');
const ReviewStore = require('../stores/review_store');

const ReviewForm = React.createClass({
  getInitialState() {
    return {
      comment: "",
      score: "1"
    };
  },

	handleSubmit(e) {
    e.preventDefault();
		const formData = {
      user_id: SessionStore.currentUser().id,
      listing_id: this.props.listing,
			comment: this.state.comment,
			score: this.state.score
		};

    ReviewActions.createReview(formData);
    hashHistory.push("/");
	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  handleCart(e) {
    e.preventDefault();
    hashHistory.push("/cart");
  },

  handleListing(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

	render() {
		return (
      <div className="review-form-container">
        <h2 className="review-form-label">Thank you for your business!</h2>
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <div className="review-form">
            <div className="score-box">
              <h3 className="review-label"> Your Rating: </h3>
              <fieldset className="rating">
                <input
                  type="radio"
                  id="star5"
                  name="rating"
                  value="5"
                  onClick={this.update("score")}
                />
              <label
                  className = "full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                ></label>
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  onClick={this.update("score")}
                />
              <label
                  className = "full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                ></label>
                <input
                  type="radio"
                  id="star3"
                  name="rating"
                  value="3"
                  onClick={this.update("score")}
                />
              <label
                  className = "full"
                  htmlFor="star3"
                  title="Meh - 3 stars"
                ></label>
                <input
                  type="radio"
                  id="star2"
                  name="rating"
                  value="2"
                  onClick={this.update("score")}
                />
              <label
                  className = "full"
                  htmlFor="star2"
                  title="Not good - 2 stars"
                ></label>
                <input
                  type="radio"
                  id="star1"
                  name="rating"
                  value="1"
                  onClick={this.update("score")}
                />
              <label
                  className = "full"
                  htmlFor="star1"
                  title="Terrible - 1 star"
                ></label>
              </fieldset>
            </div>
            <div className="comment-box">
              <h3 className="review-label"> Comments: </h3>
              <textarea
                value={this.state.comment}
                onChange={this.update("comment")}
                placeholder='Leave a comment!'
                className="comment-textarea"
              >
              </textarea>
            </div>
            <div className="review-button-container" >
              <input
                className="review-button"
                type="submit"
                value="Submit Review"
              />
              <button onClick={this.handleCart} className="review-button">Return to Cart</button>
              <button onClick={this.handleListing} className="review-button">Return to Listings</button>
            </div>
          </div>
        </form>
      </div>
		);
	}
});

module.exports = ReviewForm;
