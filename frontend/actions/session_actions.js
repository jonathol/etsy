const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {

  signUp(formData){
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  editUser(formData){
    SessionApiUtil.editUser(
      formData,
      SessionActions.editCurrentUser
    );
  },

  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logInGuest(){
    SessionApiUtil.logIn(
      {username: "Guest", password:"123456"},
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/");
  },

  editCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.EDIT,
      currentUser: currentUser
    });
  }

};

module.exports = SessionActions;
