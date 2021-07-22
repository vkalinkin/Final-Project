import React from 'react';
// import { render } from 'react-dom';

// export default function Home(props) {
//   return (
//     <div className="container">
//       <h1>Frugal Frames</h1>
//       <h2>Find deals on digital PC games!</h2>
//       <div className="topOptions">
//         <h3>Find: </h3>
//         <h3>GAMES</h3>
//         <h3>STORES</h3>
//       </div>
//     </div>
//   );
// render() {
//   return (<div className="container">
//     <h1>Frugal Frames</h1>
//     <h2>Find deals on digital PC games!</h2>
//     <div className="topOptions">
//       <h3>Find: </h3>
//       <h3>GAMES</h3>
//       <h3>STORES</h3>
//     </div>
//   </div>)
// }
// }

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <h1>Frugal Frames</h1>
        <h2>Find deals on digital PC games!</h2>
        <div className="topOptions">
          <h3>Find: </h3>
          <a href="#gameSearch"><h3>GAMES</h3></a>
          <h3>STORES</h3>
        </div>
        <h1>Temp: On Home Page</h1>
      </div>
    );
  }
}
