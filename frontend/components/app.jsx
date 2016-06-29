const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },
  _handleClick(){
    this.context.router.push("/signup");
  },
  greeting() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">
            Hi, {SessionStore.currentUser().username}!
          </h2>
    			<input
            className="header-button"
            type="submit" value="logout"
            onClick={ this._handleLogOut }
          />
    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <ul className="login-signup">
          <li>Sell on Foodsy</li>
          <li><Link to="/signup" activeClassName="current">Register</Link></li>
          <li>
            <button type="button" onClick={this._handleClick}>
              Sign In
            </button>
          </li>
        </ul>
      );
    }
  },

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Foodsy</h1></Link>
          { this.greeting() }
          {this.props.children}
        </header>
      </div>
    );
  }
});

module.exports = App;
