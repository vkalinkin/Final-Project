import React from 'react';

export default class GameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriceFloorChange = this.handlePriceFloorChange.bind(this);
  }

  fetchReq() {
    // fetch('https://www.cheapshark.com/api/1.0/games?title=' + this.props.parentSearchTerm + '&lowerPrice=' + this.props.parentPriceFloor)
    fetch('https://www.cheapshark.com/api/1.0/deals?title=' + this.props.parentSearchTerm + '&lowerPrice=' + this.props.parentPriceFloor)
      .then(response => {
        if (response.ok) {
          // console.log('response in fetchReq:', response);
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
    // console.log('props at handleEvent', props);
    const currentSearchTerm = event.target.value;
    this.props.parentChangeSearchTerm(currentSearchTerm);
  }

  handlePriceFloorChange(event) {
    // console.log('props at handlePriceFloorChange', props);
    const currentPriceFloor = event.target.value;
    // console.log('currentPriceFloor', currentPriceFloor);

    //  this.props.parentChangePriceFloor(currentPriceFloor);
    this.props.parentChangePriceFloor(currentPriceFloor);
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
            <label htmlFor="nameSearchBox">Name:</label>
            <input type="text" id="nameSearchBox" value={this.props.parentSearchTerm} onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="priceFloorBox">Minimum Price:</label>
            <input type="text" id="priceFloorBox" value={this.props.parentPriceFloor} onChange={this.handlePriceFloorChange}></input>
          </div>

          <button>SEARCH</button>
        </form>
        <div>

        </div>
      </div>
    );
  }
}
