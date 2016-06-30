const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignupForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
			hasError: false
    };
  },

  componentDidMount() {
		// ErrorStore.clearErrors();
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
			this.props.closeModal();
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    SessionActions.signUp(formData);

	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");

    if (!errors[field]) {
			return;
		}

    const messages = errors[field].map( (errorMsg, i) => {
      return <li className="errorRegister" key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-box">

				<div className="login-form">
					<label className="login-label"> Username:
						<br/>
	          { this.fieldErrors("username") }
						<input type="text"
	            value={this.state.username}
	            onChange={this.update("username")}
							className="login-input" />
					</label>

	        <br />
					<label className="login-label"> Password:
						<br />
	          { this.fieldErrors("password") }
	          <input type="password"
	            value={this.state.password}
	            onChange={this.update("password")}
							className="login-input" />
					</label>

	        <br />
					<input className="login-submit" type="submit" value="Register"/>
				</div>
			</form>
		);
	}
});

module.exports = SignupForm;
