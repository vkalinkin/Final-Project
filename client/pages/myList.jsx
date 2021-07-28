import React from 'react';

export default class MyList extends React.Component {
  // constructor(props) {
  //   super(props);
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
          <a href="#myList" className="topButton">MY LIST</a>
        </div>
      </div>
    );
  }
}
