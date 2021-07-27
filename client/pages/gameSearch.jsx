import React from 'react';

export default class GameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchReq() {
    fetch('https://www.cheapshark.com/api/1.0/games?title=' + this.props.parentSearchTerm)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => this.props.parentChangeResultsArray(data));
    this.goToResults();

  }

  goToResults() {
    window.location.hash = 'gameSearchResults';
  }

  handleChange(event) {
    const currentSearchTerm = event.target.value;
    this.props.parentChangeSearchTerm(currentSearchTerm);
  }

  handleSubmit(event) {
    this.fetchReq();
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Frugal Frames</h1>
          <h2>Find deals on digital PC games!</h2>
        </div>

        <div className="topOptions">
          <h3 className="find">Find: </h3>
          <a className="topButton">GAMES</a>
          <a className="topButton">STORES</a>
        </div>
        <form onSubmit={this.handleSubmit} className= "gameSearchForm">
          <div>
            <input type="text" value={this.props.parentSearchTerm} onChange={this.handleChange}></input>
            <button>SEARCH</button>
          </div>

        </form>
        <div>

        </div>
      </div>
    );
  }
}
