import React from 'react';

function SearchResult(props) {
  const storeArray = ['Steam', 'GamersGate', 'GreenManGaming', 'Amazon', 'GameStop', 'Direct2Drive', 'GOG', 'Origin',
    'Get Games', 'Shiny Loot', 'Humble Store', 'Desura', 'Uplay', 'IndieGameStand', 'Fanatical', 'Gamesrocket',
    'Games Republic', 'SilaGames', 'Playfield', 'ImperialGames', 'WinGameStore', 'FunStockDigital',
    'GameBillet', 'Voidu', 'Epic Games Store', 'Razer Game Store', 'Gamesplanet', 'Gamesload', '2Game',
    'IndieGala', 'Blizzard Shop', 'AllYouPlay'];
  const currentStoreId = (props.searchResult.storeID) - 1;
  const currentStoreName = storeArray[currentStoreId];

  const urlId = props.searchResult.dealID;
  const purchaseURL = `https://www.cheapshark.com/redirect?dealID=${urlId}`;

  let starClassName = 'far fa-star';
  const faveArray = props.faves;

  for (let a = 0; a < faveArray.length; a++) {
    if (props.searchResult.dealID === faveArray[a].dealID) {
      starClassName = 'fas fa-star';
    }
  }

  return <div className="resultBox">
    <div className="imageHolder">
      <img className="gameImage" src={props.searchResult.thumb}></img>
    </div>
    <div>Title: {props.searchResult.title}</div>
    <div className="red">Current Price: ${props.searchResult.salePrice}</div>
    <div>Normal Price: ${props.searchResult.normalPrice}</div>
    <div className="avaialbeAt">Available at: {currentStoreName}</div>
    <a href={purchaseURL} target="_blank" rel="noreferrer" className="purchaseButton">Purchase</a>
    <div className="starHolder">
      <i className={starClassName} onClick={() => props.starClick(event)} gametitle={props.searchResult.title} currentprice={props.searchResult.salePrice} storeid={props.searchResult.storeID} dealid={props.searchResult.dealID} userid="1" gameimage={props.searchResult.thumb} gameid={props.searchResult.gameID} ></i>
    </div>
  </div>;
}

const ResultsList = props => {
  if (!props.results) {
    return <div>LOADING</div>;
  }
  return (
    <div className="resultsList">
      {
        props.results.map(results => {

          return <SearchResult key={results.dealID} searchResult={results} starClick={props.starClick} faves={props.faves} getFaves={props.getFaves}/>;

        })
      }
    </div>
  );
};

export default ResultsList;
