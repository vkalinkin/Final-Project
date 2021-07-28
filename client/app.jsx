import React from 'react';
import Home from './pages/home';
import GameSearch from './pages/gameSearch';
import GameSearchResults from './pages/gameSearchResults';
import MyList from './pages/myList';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSearchTerm = this.changeSearchTerm.bind(this);
    this.changeResultsArray = this.changeResultsArray.bind(this);
    this.changePriceFloor = this.changePriceFloor.bind(this);
    this.changePriceCeiling = this.changePriceCeiling.bind(this);

    this.state = {
      route: parseRoute(window.location.hash),
      searchTerm: '',
      priceFloor: '0',
      priceCeiling: '60',
      resultsArray: [],
      isLoading: true
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);

      this.setState({ route: route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'gameSearch') {
      return <GameSearch parentSearchTerm={this.state.searchTerm} parentResultsArray={this.state.resultsArray} parentIsLoading={this.state.isLoading} parentChangeResultsArray={this.changeResultsArray}
      parentChangeSearchTerm={this.changeSearchTerm} parentPriceFloor={this.state.priceFloor} parentChangePriceFloor={this.changePriceFloor} parentPriceCeiling={this.state.priceCeiling}
        parentChangePriceCeiling={this.changePriceCeiling}/>;
    }
    if (route.path === 'gameSearchResults') {
      return <GameSearchResults parentSearchTerm={this.state.searchTerm} parentResultsArray={this.state.resultsArray} parentIsLoading={this.state.isLoading}
        parentChangeResultsArray={this.changeResultsArray} parentChangeSearchTerm={this.changeSearchTerm} parentPriceFloor={this.state.priceFloor}
        parentChangePriceFloor={this.changePriceFloor} parentPriceCeiling={this.state.priceCeiling} parentChangePriceCeiling={this.changePriceCeiling}/>;
    }
    if (route.path === 'myList') {
      return <MyList></MyList>;
    }
  }

  render() {
    return (
      <>
        { this.renderPage()}
      </>
    );
  }

  changeSearchTerm(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
  }

  changeResultsArray(newResultsArray) {
    this.setState({ resultsArray: newResultsArray, isLoading: false });
  }

  changePriceFloor(newPriceFloor) {
    this.setState({ priceFloor: newPriceFloor });
  }

  changePriceCeiling(newPriceCeiling) {
    this.setState({ priceCeiling: newPriceCeiling });
  }

}
