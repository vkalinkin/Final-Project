import React from 'react';

export default class MyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myList: []
    };
  }

  componentDidMount() {
    this.testDB();
  }

  testDB() {
    fetch('/api/list')
      .then(res => res.json())
      .then(list => {
        this.setState({ myList: list });
        // console.log('List:', list);
      });
  }

  render() {
    // console.log("this.state", this.state);

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
