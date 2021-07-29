import React from 'react';

function SearchResult(props) {
  // console.log('props on Search Results', props);
  const storeArray = ['Steam', 'GamersGate', 'GreenManGaming', 'Amazon', 'GameStop', 'Direct2Drive', 'GOG', 'Origin',
    'Get Games', 'Shiny Loot', 'Humble Store', 'Desura', 'Uplay', 'IndieGameStand', 'Fanatical', 'Gamesrocket',
    'Games Republic', 'SilaGames', 'Playfield', 'ImperialGames', 'WinGameStore', 'FunStockDigital',
    'GameBillet', 'Voidu', 'Epic Games Store', 'Razer Game Store', 'Gamesplanet', 'Gamesload', '2Game',
    'IndieGala', 'Blizzard Shop', 'AllYouPlay'];
  const currentStoreId = (props.searchResult.storeID) - 1;
  const currentStoreName = storeArray[currentStoreId];

  const urlId = props.searchResult.dealID;
  const purchaseURL = `https://www.cheapshark.com/redirect?dealID=${urlId}`;

  // console.log('props', props);

  return <div className="resultBox">
    <div className="imageHolder">
      <img className="gameImage" src={props.searchResult.thumb}></img>
    </div>
    <div>Title: {props.searchResult.title}</div>
    <div>Current Price: ${props.searchResult.salePrice}</div>
    <div>Normal Price: ${props.searchResult.normalPrice}</div>
    {/* <div>Avaialbe at: {props.searchResult.storeID}</div> */}
    <div>Avaialbe at: {currentStoreName}</div>

    <a href={purchaseURL} target="_blank" rel="noreferrer">Purchase</a>
    <div>
      <i className="fas fa-star" onClick={() => props.starClick(event)} gametitle={props.searchResult.title} currentprice={props.searchResult.salePrice} storeid={props.searchResult.storeID} dealid={props.searchResult.dealID} userid="1" gameimage={props.searchResult.thumb} gameid={props.searchResult.gameID} ></i>
    </div>
  </div>;
}

// const ResultsList = (results) => {
const ResultsList = props => {

  // function ResultsList(props, results){
  // console.log('RESULTS', props);
  // console.log('props in ResultList', props);
  // console.log(parentHandleClick);

  if (!props.results) {
    return <div>LOADING</div>;
  }
  return (
    <div className="resultsList">
      {
        // results.map(results => {
        props.results.map(results => {

          // console.log('props in ResultList 2', props);

          // return <SearchResult key={results.dealID} searchResult={results} starClick={props.starClick}/>;
          // return <SearchResult key={props.results.dealID} searchResult={results} starClick={props.starClick} />;
          return <SearchResult key={results.dealID} searchResult={results} starClick={props.starClick} />;

        })
      }
    </div>
  );
};

export default ResultsList;
