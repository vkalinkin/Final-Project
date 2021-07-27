import React from 'react';
import Home from './pages/home';
import GameSearch from './pages/gameSearch';
import GameSearchResults from './pages/gameSearchResults';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSearchTerm = this.changeSearchTerm.bind(this);
    this.changeResultsArray = this.changeResultsArray.bind(this);
    this.state = {
      route: parseRoute(window.location.hash),
      searchTerm: '',
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
      return <GameSearch parentSearchTerm = {this.state.searchTerm} parentResultsArray = {this.state.resultsArray} parentIsLoading = {this.state.isLoading} parentChangeResultsArray = {this.changeResultsArray} parentChangeSearchTerm = {this.changeSearchTerm} />;
    }
    if (route.path === 'gameSearchResults') {
      return <GameSearchResults parentSearchTerm={this.state.searchTerm} parentResultsArray={this.state.resultsArray} parentIsLoading={this.state.isLoading} parentChangeResultsArray={this.changeResultsArray} parentChangeSearchTerm={this.changeSearchTerm} />;
    }
    // return <NotFound />;
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
}
