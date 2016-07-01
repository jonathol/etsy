const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const People = React.createClass ({
  getInitialState (){
    return {current: ""};
  },
  componentDidMount (){
    let current = SessionStore.currentUser();
    let name;
    if (current.firstname) {
      name = current.firstname + " " + current.lastname;
    } else if (typeof current === 'undefined') {
      name = "";
    } else {
      name = current.username;
    }
    this.setState({current: name});
  },
  render (){

    return(
      <div>Information About {this.state.current}</div>
    );
  }
});


module.exports = People;
