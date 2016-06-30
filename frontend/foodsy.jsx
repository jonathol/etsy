const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const LoginForm = require('./components/login_form');
const SignupForm = require('./components/signup_form');

const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');



const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>      
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  Modal.setAppElement(root);
  ReactDOM.render(appRouter, root);
});
