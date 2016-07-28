const React = require('react');
const PurchaseActions = require('../actions/purchase_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;
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

const ListingForm = React.createClass ({
  getInitialState() {
    return {
			quantity: 1,
      modalIsOpen: false,
      isSignIn: false,
      checkOut: false,
      buy: false
    };
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

  closeWithPurchase: function() {
    let data = {
      cart_id: SessionStore.currentUser().id,
      listing_id: this.props.listing.id,
      quantity: this.state.quantity
    };
    PurchaseActions.createPurchase(data);
    this.setState({modalIsOpen: false});
    if(this.state.buy){
      this.props.switchComponent();
    }    
  },

  formType () {
    if (this.state.isSignIn) {
      return <LoginForm buy={this.state.buy} closeModal={this.closeWithPurchase}/>;
    }
    return <SignupForm buy={this.state.buy} closeModal={this.closeWithPurchase}/>;
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

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  handleAdd(e){
    e.preventDefault;
    this.setState({buy: false});
    let data = {
      cart_id: SessionStore.currentUser().id,
      listing_id: this.props.listing.id,
      quantity: this.state.quantity
    };
    if (SessionStore.isUserLoggedIn() === true) {
      PurchaseActions.createPurchase(data);
      hashHistory.push("/cart");
    } else {
      this.openModalSignin();
    }
  },
  _handleSubmit(e){
    e.preventDefault();
    this.setState({buy: true});
    if (SessionStore.isUserLoggedIn() === true) {
      this.props.switchComponent();
    } else {
      this.openModalSignin();
    }
  },

  componentDidMount() {
    this.sessionListener= SessionStore.addListener(this.forceUpdate.bind(this));
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },

  render(){
    return(
      <form className="listing-form" onSubmit={this._handleSubmit}>
        <label className="listing-form-label">Quantity:
          <br/>
          <input
            className='listing-form-input'
            type="number"
            name="quantity"
            min="1"
            defaultValue="1"
            onChange={this.update("quantity")}
          />
        </label>
        <br/>
        <div className="listing-button-container">
          <button type='button' className='listing-form-button' onClick={this.handleAdd}>
            Add to cart
          </button>
          <input
            type="submit"
            className='listing-form-button'
            value="Buy"
            />
        </div>
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
      </form>
    );
  }

});

module.exports = ListingForm;
