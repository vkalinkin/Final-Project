import React from 'react';
import ResultsList from './resultsOutput';

function GameSearchResults(props) {
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
      <a href="#gameSearch" >Go back to Search</a>
      <div>
        <ResultsList results={props.parentResultsArray}></ResultsList>
      </div>
    </div>
  );
}

export default GameSearchResults;
