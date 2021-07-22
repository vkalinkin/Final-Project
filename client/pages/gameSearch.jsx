import React from 'react';
// import { render } from 'react-dom';

export default class GameSearch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <h1>Frugal Frames</h1>
        <h2>Find deals on digital PC games!</h2>
        <div className="topOptions">
          <h3>Find: </h3>
          <h3>GAMES (SELECTED)</h3>
          <h3>STORES</h3>
        </div>
        <h1>Temp: On Game Search Page</h1>
        <a href="#">go back to home</a>
      </div>
    );
  }
}
