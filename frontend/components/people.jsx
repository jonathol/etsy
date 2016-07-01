const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const People = React.createClass ({
  render (){
    return(
      <div>Information About Current User</div>
    );
  }
});


module.exports = People;
