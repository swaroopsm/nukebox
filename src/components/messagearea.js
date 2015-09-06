var React = require('react');

var MessageArea = React.createClass({
  render: function() {
    if(this.props.message === null) {
      return (
        <div className="alert alert-warning">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          &nbsp;&nbsp;No conversation selected!
        </div>
      );
    }
    else {
      return (
        <div className=''>
          <div className=''>
            <h3>{ this.props.message.subject }</h3>
            <hr />
            From: <strong>{ this.props.message.user.name }</strong>
            <p>{ this.props.message.body }</p>
          </div>
        </div>
      )
    }
  }
});

module.exports = MessageArea;
