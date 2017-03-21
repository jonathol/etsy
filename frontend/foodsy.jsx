const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const Profile = require('./components/profile');

const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const ListingIndex = require('./components/listing_index');
const ListingShow = require('./components/listing_show');

const CartIndex = require('./components/cart_index');

const ReviewForm = require('./components/review_form');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ ListingIndex } />
      <Route path="/listing/:listingId" component={ ListingShow }/>
      <Route path="/profile" component={ Profile } />
      <Route path="/cart" component={ CartIndex } />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/');
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
