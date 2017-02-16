const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const CartActions = require('../actions/cart_actions');
const CartStore = require('../stores/cart_store');
const Modal = require('react-modal');

const SignupForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
			firstname: "",
			lastname: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
		this.cartListener = CartStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
		this.cartListener.remove();
  },

	redirectIfLoggedIn() {
		if (SessionStore.isUserLoggedIn()) {
			if(this.props.buy) {
				this.props.closeModal();
			} else {
				this.props.closeModal();
				this.context.router.push("/cart");
			}
		}
	},

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password,
			firstname: this.state.firstname,
			lastname: this.state.lastname
		};

    SessionActions.signUp(formData, CartActions.createCart);


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
					<h3>First and last names are public, but optional.</h3>
					<label className="login-label"> First Name:
						<br/>
						<input type="text"
	            value={this.state.firstname}
	            onChange={this.update("firstname")}
							className="login-input" />
					</label>

					<br />
					<label className="login-label"> Last Name:
						<br/>
						<input type="text"
	            value={this.state.lastname}
	            onChange={this.update("lastname")}
							className="login-input" />
					</label>

					<br/>
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
