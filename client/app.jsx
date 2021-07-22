import React from 'react';
import Home from './pages/home';
import GameSearch from './pages/gameSearch';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
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
      return <GameSearch />;
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
}
