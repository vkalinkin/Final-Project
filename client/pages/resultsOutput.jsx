import React from 'react';

function SearchResult(props) {
  const urlId = props.searchResult.cheapestDealID;
  const purchaseURL = `https://www.cheapshark.com/redirect?dealID=${urlId}`;
  return <div className="resultBox">
    <div className="imageHolder">
      <img className="gameImage" src={props.searchResult.thumb}></img>
    </div>
    <div>Title: {props.searchResult.external}</div>
    <div>Current Best Price: ${props.searchResult.cheapest}</div>
    <a href={purchaseURL} target="_blank" rel="noreferrer">Purchase</a>
  </div>;
}

const ResultsList = ({ results }) => {
  // console.log('results', results);
  if (!results) {
    return <div>LOADING</div>;
  }
  return (
    <div className="resultsList">
      {
        results.map(results => {
          return <SearchResult key={results.external} searchResult={results} />;
        })
      }
    </div>
  );

};

export default ResultsList;
