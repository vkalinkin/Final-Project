import React from 'react';
import FaveList from './faveOutput';

export default class MyList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleStarClick = this.handleStarClick.bind(this);

    this.state = {
      list: []
    };
  }

  // handleStarClick() {
  //   console.log('target', event.target.getAttribute(gameTitle));
  // };

  componentDidMount() {
    this.testDB();
  }

  testDB() {
    fetch('/api/list')
      .then(res => res.json())
      .then(list => {
        this.setState({ list: list });
        // console.log('List:', list);
      });
  }

  render() {
    // console.log("this.state", this.state);

    // const { list } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>Frugal Frames</h1>
          <h2>Find deals on digital PC games!</h2>
        </div>
        <div className="topOptions">
          <h3 className="find">Find: </h3>
          <a href="#gameSearch" className="topButton">GAMES</a>
          <a href="#myList" className="topButton">MY LIST</a>
        </div>
        <div>
          <FaveList results={this.state.list} starClick={this.starClick}></FaveList>

        </div>

      </div>
    );
  }
}
