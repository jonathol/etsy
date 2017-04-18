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
    border                : 0,
    height                : 480
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
    window.scrollTo(0, 0);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _handleLogOut(){
    SessionActions.logOut();
  },
  _handleClick() {
    this.context.router.push({
      pathname: "/profile",
      query: { id: SessionStore.currentUser().id}
    });
  },

  nav() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<nav>
    			<ul className="login-signup">
            <li>
              <Link to="/" activeClassName="current" >
                <img className="nav-image1" src="https://res.cloudinary.com/jonathol/image/upload/e_colorize,co_rgb:ffffff/v1467312108/Home01-128_pklsw6.png"/>
              </Link>
            </li>
            <li>
              <Link to="/cart" activeClassName="current" >
                <img className="nav-image-cart" src="https://res.cloudinary.com/jonathol/image/upload/c_scale,w_32,e_colorize,co_rgb:ffffff/v1467751801/28468-200_aqate1.png"/>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <img className="nav-image4" src={SessionStore.currentUser().img_url} />
                <ul className="dropdown-content">
                  <li onClick={ this._handleClick }>
                    Profile
                  </li>
                  <li onClick={ this._handleLogOut }>
                    Logout
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
      <div className="app-container">
        <div className="header-container">
          <header>
            <Link to="/" className="header-link"><h1>Foodsy</h1></Link>
            <Search />
            { this.nav() }
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Login Modal" >

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
        <footer className="footer-container">
          <a href="https://github.com/jonathol/etsy" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/jonathon-lin-52005a71/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          <a href="http://www.jonathonlin.com/" target="_blank"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></a>
        </footer>
      </div>
    );
  }
});

module.exports = App;
