var React = require('react');
var List = require('./list');
var MessageArea = require('./messagearea');

// Seed data
var data = [
  {
    id: 1,
    subject: 'Hello Nukebox',
    body: 'Nukebox is an expiremental email inbox built using ReactJS',
    user: {
      name: 'Swaroop SM',
      avatar_url: 'http://robohash.org/swaroop-sm.png?size=50x50'
    }
  },
  {
    id: 2,
    subject: 'Leave Approved',
    body: 'Go ahead and take the leave on this Friday',
    user: {
      name: 'John Doe',
      avatar_url: 'http://robohash.org/john-doe.png?size=50x50'
    }
  }
];

var App = React.createClass({
  getInitialState: function() {
    return {
      messages: data,
      activeMessage: null
    };
  },

  activateMessage: function(id) {
    var message = data[id-1];

    this.setState({
      activeMessage: message
    })
  },

  render: function() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-4'>
            <List messages={ this.state.messages } activateMessage={ this.activateMessage } />
          </div>
          <div className='col-md-8'>
            <MessageArea message={ this.state.activeMessage } />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
