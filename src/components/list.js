var React = require('react');
var Item = require('./item');

var List = React.createClass({
  getInitialState: function() {
    var activeMessageID;
    if(this.props.activateMessage && this.props.activateMessage.id) {
      activeMessageID = this.props.activateMessage.id;
    }

    return {
      activeMessageID: activeMessageID
    };
  },

  activateMessage: function(id) {
    this.props.activateMessage(id);
    this.setState({
      activeMessageID: id
    });
  },

  isActive: function(message) {
    return message.id === this.activateMessage.id;
  },

  render: function() {
    var isActive;
    var messages = this.props.messages.map(function(message) {
      isActive = this.state.activeMessageID === message.id;

      return (
        <Item key={ message.id } isActive={ isActive } onClick={ this.activateMessage } id={ message.id } subject={ message.subject } user={ message.user }/>
      );
    }.bind(this));

    return (
      <div className="messages">
        <ul className='list-group'>
          { messages }
        </ul>
      </div>
    );
  }
});

module.exports = List;
