const React = require('react');
const Link = require('react-router').Link;

const SessionStore = require('../stores/session_store');

const ReviewActions = require('../actions/review_actions');
const ReviewStore = require('../stores/review_store');

const ReviewForm = React.createClass({
  getInitialState() {
    console.log("gis");
    return {
      comment: "",
      score: ""
    };
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
      user_id: SessionStore.currentUser(),
      listing_id: this.props.listing.id,
			comment: this.state.comment,
			score: this.state.score
		};

    ReviewActions.createReview(formData);
	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
      <div className="form-container">
        <h2 className="form-label">Thank you for your business!</h2>
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <div className="review-form">
            <label className="review-label"> Your Rating:
              <br/>
              1<input
                type="radio"
                value="1"
                checked
                onChange={this.update("score")}
              />
              2<input
                type="radio"
                value="2"
                onChange={this.update("score")}
              />
              3<input
                type="radio"
                value="3"
                onChange={this.update("score")}
              />
              4<input
                type="radio"
                value="4"
                onChange={this.update("score")}
              />
              5<input
                type="radio"
                value="5"
                onChange={this.update("score")}
              />
            </label>

            <br />
            <label className="login-label"> Comments:
              <br/>
              <textarea
                cols='30'
                rows='10'
                placeholder='Type something'
                value={this.state.comment}
                onChange={this.update("body")}>
              </textarea>
            </label>

            <br/>
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
