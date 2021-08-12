/* eslint-disable node/handle-callback-err */
import React from 'react';
import FaveList from './faveOutput';

export default class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    fetch('/api/list')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(list => this.setState({ list: list }))
      .catch(error => {
        this.goToErrorPageMyList();

      });
  }

  goToErrorPageMyList() {
    window.location.hash = 'errorPageMyList';
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">Frugal Frames</h1>
          <h2 className="title">Find deals on digital PC games!</h2>
        </div>
        <div className="topOptions">
          <h3 className="find">Find: </h3>
          <a href="#gameSearch" className="topButton">GAMES</a>
          <a href="#myList" className="topButtonActive">MY LIST</a>
        </div>
        <div>
          <FaveList results={this.state.list} starClick={this.starClick}></FaveList>

        </div>

      </div>
    );
  }
}
