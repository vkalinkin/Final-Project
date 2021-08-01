import React from 'react';

export default class Home extends React.Component {

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
          <a href="#myList" className="topButton">MY LIST</a>
        </div>
      </div>
    );
  }
}
