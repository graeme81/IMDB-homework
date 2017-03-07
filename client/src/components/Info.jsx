var React = require('react');

var Info = React.createClass({

  propTypes:{
    children: React.PropTypes.node.isRequired
  },

  render:function(){
    return(
      <div className = "info">
        <p>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = Info;