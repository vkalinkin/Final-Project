import React from 'react';

export default class Home extends React.Component {

  // testDB() {
  //   fetch('/api/list')
  //     .then(res => res.json())
  //     .then(todos => {
  //       console.log('List:', list);
  //     })
  // }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Frugal Frames</h1>
          <h2>Find deals on digital PC games!</h2>
        </div>
        <div className="topOptions">
          <h3 className="find">Find: </h3>
          <a href="#gameSearch" className="topButton">GAMES</a>
          <a className="topButton">STORES</a>
        </div>
      </div>
    );
  }
}
