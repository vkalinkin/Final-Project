import React from 'react';

function SearchResult(props) {
  return <div>
    <img src={props.searchResult.thumb}></img>
    <div>Title: {props.searchResult.external}</div>
    <div>{props.searchResult.internalName}</div>
    <div>Cheapest price: {props.searchResult.cheapest}</div>
    <div>https://www.cheapshark.com/redirect?dealID={props.searchResult.cheapestDealID}</div>
    <div>---------</div>
  </div>;
}

function ResultsList(props) {
  // console.log("props in resultsOutput", props);
  return (
    <ul>
      {
        props.results.map(results => {
          return <SearchResult key={results.external} searchResult={results} />;
        })
      }
    </ul>
  );
}

export default ResultsList;
