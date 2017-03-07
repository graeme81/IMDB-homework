var React = require('react');

var Info = React.createClass({


  render:function(){
    return(
      <div className = "info">
        <p>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = Info;