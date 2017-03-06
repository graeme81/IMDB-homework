var React = require('react');

var Info = React.createClass({


  render:function(){
    return(
      <div className = "info">
        <h4>{this.props.title} {this.props.times}</h4>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = Info;