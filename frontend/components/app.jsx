const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');
const Modal = require('react-modal');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : 0,
    border                : 0
  }
};

const App = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false , isSignIn: false};
  },

  openModalRegister: function() {
    this.setState({modalIsOpen: true, isSignIn: false});
    ErrorActions.clearErrors();
  },

  openModalSignin: function() {
    this.setState({modalIsOpen: true, isSignIn: true});
    ErrorActions.clearErrors();
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
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
    this.context.router.push("/login");
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
    } else {
      return (
        <nav>
          <ul className="login-signup">
            <li className="nav-underline">Sell on Foodsy</li>
            <li>
              <Link to="/" className="nav-underline" activeClassName="current" onClick={this.openModalRegister}>
                Register
              </Link>

              </li>
            <li>
              <button className = "signin" type="button" onClick={this.openModalSignin}>
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      );
    }
  },

  formType () {
    if (this.state.isSignIn) {
      return <LoginForm closeModal={this.closeModal}/>;
    }
    return <SignupForm closeModal={this.closeModal}/>;
  },

  classTypeRegister () {
    if (this.state.isSignIn) {
      return "tab";
    }
    return "tab tab-selected first-tab";
  },

  classTypeSignin () {
    if (this.state.isSignIn) {
      return "tab tab-selected second-tab";
    }
    return "tab ";
  },

  registerToSignIn () {
    this.closeModal();
    this.openModalSignin();
  },

  signIntoRegister () {
    this.closeModal();
    this.openModalRegister();
  },


  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Foodsy</h1></Link>
          { this.greeting() }
          {this.props.children}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <ul ref="subtitle" className="modalTab">
              <li className="modalTabList">
                <button className={this.classTypeRegister()} type="button" onClick={this.signIntoRegister}>
                  Register
                </button>
              </li>
              <li className="modalTabList">
                <button className={this.classTypeSignin()} type="button" onClick={this.registerToSignIn}>
                  Sign In
                </button>
              </li>
            </ul>
            <div className="modalForm">
              {this.formType()}
            </div>
          </Modal>
        </header>
      </div>
    );
  }
});

module.exports = App;
