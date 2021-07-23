// import { response } from 'express';
import React from 'react';
import ResultsList from './resultsOutput';
// import { render } from 'react-dom';

export default class GameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', testSearch: 'street fighter', resultsArray: [], isLoading: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchReq() {
    fetch('https://www.cheapshark.com/api/1.0/games?title=' + this.state.searchTerm)
      .then(response => response.json())
      .then(data => this.setState({ resultsArray: data, isLoading: false }));
    // console.log("results array results", this.state.resultsArray);

  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line no-console
    console.log('Term entered:', this.state.searchTerm);
    this.fetchReq();
    event.preventDefault();
  }

  render() {
    // console.log("results array from render()", this.state.resultsArray)
    // console.log("props", this.props);

    return this.state.isLoading
      ? <div className="container">
        <h1>Frugal Frames</h1>
        <h2>Find deals on digital PC games!</h2>
        <div className="topOptions">
          <h3>Find: </h3>
          <h3>GAMES (SELECTED)</h3>
          <h3>STORES</h3>
        </div>
        <h1>Temp: On Game Search Page</h1>
        <a href="#">go back to home</a>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button>SEARCH</button>
        </form>
        <div>
          Loading...
        </div>
      </div>
      : <div className="container">
        <h1>Frugal Frames</h1>
        <h2>Find deals on digital PC games!</h2>
        <div className="topOptions">
          <h3>Find: </h3>
          <h3>GAMES (SELECTED)</h3>
          <h3>STORES</h3>
        </div>
        <h1>Temp: On Game Search Page</h1>
        <a href="#">go back to home</a>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button>SEARCH</button>
        </form>
        <div>
          <ResultsList results={this.state.resultsArray}></ResultsList>
        </div>
      </div>;

  }
}
