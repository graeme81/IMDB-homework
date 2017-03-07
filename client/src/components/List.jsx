var React = require('react');
var Info = require('./Info.jsx');

var List = React.createClass({

  propTypes:{
    movies: React.PropTypes.node.isRequired
  },

  render: function(){

    var movieNodes = this.props.movies.map(function(movie, index){
      return(
          <Info key = {index}>{movie.title}  <i>{movie.times}</i></Info>
        )
    });

    return(
        <div className = "movie-list">
          { movieNodes }
        </div> 
      )
    }
});

module.exports = List;