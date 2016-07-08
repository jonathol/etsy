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

	render() {
		return (
      <div className="review-form-container">
        <h2 className="review-form-label">Thank you for your business!</h2>
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <div className="review-form">
            <div className="score-box">
              <label className="review-label">
                Your Rating:
                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    onClick={this.update("score")}
                  />
                  <div
                    className = "full"
                    htmlFor="star5"
                    title="Awesome - 5 stars"
                  ></div>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onClick={this.update("score")}
                  />
                  <div
                    className = "full"
                    htmlFor="star4"
                    title="Pretty good - 4 stars"
                  ></div>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onClick={this.update("score")}
                  />
                  <div
                    className = "full"
                    htmlFor="star3"
                    title="Meh - 3 stars"
                  ></div>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onClick={this.update("score")}
                  />
                  <div
                    className = "full"
                    htmlFor="star2"
                    title="Kinda bad - 2 stars"
                  ></div>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onClick={this.update("score")}
                  />
                  <div
                    className = "full"
                    htmlFor="star1"
                    title="Sucks big time - 1 star"
                  ></div>
                </fieldset>
              </label>
            </div>
            <div className="comment-box">
              <label className="login-label"> Comments: </label>
              <textarea
                cols='30'
                rows='10'
                value={this.state.comment}
                onChange={this.update("body")}>
              </textarea>
            </div>
            <input
              className="review-submit"
              type="submit"
              value="Submit Review"
            />
          </div>
        </form>
      </div>
		);
	}
});

module.exports = ReviewForm;
