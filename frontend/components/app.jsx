const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');
const Modal = require('react-modal');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const Search = require('./search');



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
    this.sessionListener= SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _handleLogOut(){
    SessionActions.logOut();
  },
  _handleClick() {
    this.context.router.push("/people");
  },

  _logInGuest() {
    SessionActions.logInGuest();
  },


  nav() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<nav>
    			<ul className="login-signup">
            <li>
              <Link to="/" activeClassName="current" >
                <img className="nav-image1" src="https://res.cloudinary.com/jonathol/image/upload/v1467312108/Home01-128_pklsw6.png"/>
              </Link>
            </li>
            <li>
              <Link to="/" activeClassName="current" >
                <img className="nav-image2" src="https://res.cloudinary.com/jonathol/image/upload/v1467316881/icon-ios7-heart-128_hbcd4b.png"/>
              </Link>
            </li>
            <li>
              <Link to="/" activeClassName="current" >
                <img className="nav-image3" src="https://res.cloudinary.com/jonathol/image/upload/v1467317268/shop-5_n2tsoz.png"/>
              </Link>
            </li>
            <li>
              <Link to="/cart" activeClassName="current" >
                <img className="nav-image-cart" src="https://res.cloudinary.com/jonathol/image/upload/c_scale,w_32/v1467751801/28468-200_aqate1.png"/>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <img className="nav-image4" src={SessionStore.currentUser().img_url} />
                <ul className="dropdown-content">
                  <li onClick={ this._handleClick }>
                    <button type="button">
                      Profile
                    </button>
                  </li>
                  <li onClick={ this._handleLogOut }>
                    <input
                      type="submit" value="Logout"
                    />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
      </nav>
    	);
    } else {
      return (
        <nav>
          <ul className="login-signup">
            <li className="nav-underline">Sell on Foodsy</li>
            <li>
              <button className="nav-underline" type="button" onClick={this.openModalRegister}>
                Register
              </button>
            </li>
            <li>
              <button className="nav-underline" type="button" onClick={this._logInGuest}>
                Guest
              </button>
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
        <div className="header-container">
          <header>
            <Link to="/" className="header-link"><h1>Foodsy</h1></Link>
            <Search />
            { this.nav() }
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
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
