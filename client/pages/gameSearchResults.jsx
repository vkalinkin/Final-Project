import React from 'react';
import ResultsList from './resultsOutput';

function GameSearchResults(props) {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Frugal Frames</h1>
        <h2 className="title">Find deals on digital PC games!</h2>
      </div>

      <div className="topOptions">
        <h3 className="find">Find: </h3>
        <a href="#gameSearch" className="topButtonActive">GAMES</a>
        <a href="#myList" className="topButton">MY LIST</a>
      </div>
      <a href="#gameSearch" >Go back to Search</a>
      <div>
        <ResultsList results={props.parentResultsArray} starClick={props.starClick} faves={props.parentFaveIDs} getFaves={props.getFaves}></ResultsList>

      </div>
    </div>
  );
}

export default GameSearchResults;
