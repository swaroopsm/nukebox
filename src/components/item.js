var React = require('react');

var Item = React.createClass({
  activateMessage: function() {
    this.props.onClick(this.props.id);
  },

  render: function() {
    var className = 'list-group-item',
        activeClass = this.props.isActive ? 'active' : '';

    className += ' ' + activeClass;

    return (
      <li className={ className } onClick={ this.activateMessage }>
        <img src={ this.props.user.avatar_url } className='img-circle pull-left' />
        <h5>{ this.props.subject }</h5>
        <p>
          <small>{ this.props.user.name }</small>
        </p>
      </li>
    );
  }
});

module.exports = Item;
