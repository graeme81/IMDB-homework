var React = require('react');
var List = require('./List.jsx');

var sampleData = [
  {id:1, title: "Sausage Party", times: "showtimes"},
  {id:2, title: "Cafe Society", times: "showtimes"},
  {id:3, title: "Morgan", times: "showtimes"},
  {id:4, title: "The 9th Life of Louis Drax", times: "showtimes"},
  {id:5, title: "Naam Hai Akia", times: "showtimes"},
  {id:6, title: "Equity", times: "showtimes"},
  {id:7, title: "Things to Come", times: "showtimes"},
];
var Container = React.createClass({

  getInitialState: function(){
    return{data:sampleData}
  },

  render: function(){
    return(
      <div className="container">
      <h1>UK Opening This Week</h1>
      <List movies = {this.state.data} />
      <h5>See more opening this week >> </h5>
      <button type ="button">Awesome Button</button>
      </div>
      );
  }
});

module.exports = Container;