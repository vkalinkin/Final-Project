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
  return <div className="resultBox">
    <div className="imageHolder">
      <img className="gameImage" src={props.searchResult.gameImage}></img>
    </div>
    <div>Title: {props.searchResult.gameTitle}</div>
    <div>Current Price: ${props.searchResult.currentPrice}</div>
    <div className="avaialbeAt">Avaialbe at: {currentStoreName}</div>
    <a href={purchaseURL} target="_blank" rel="noreferrer" className="purchaseButton">Purchase</a>
  </div>;
}

const FaveList = ({ results }) => {
  if (!results) {
    return <div>LOADING</div>;
  }
  return (
    <div className="resultsList">
      {
        results.map(results => {
          return <SearchResult key={results.dealID} searchResult={results} />;
        })
      }
    </div>
  );
};

export default FaveList;
