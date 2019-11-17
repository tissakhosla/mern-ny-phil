import React, { Component } from 'react'
// import SeasonList from './components/SeasonList'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orchestras: ["A", "B", "C"],
      seasons: [1, 2, 3]
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:8080/")
  //     .then(res => res.json())
  //     .then(
  //       res => {
  //         this.setState({
  //           isLoaded: true,
  //           orchestras: res.map(performance => {
  //             return performance.orchestra
  //           }),
  //           seasons: res.map(performance => {
  //             return performance.season
  //           })
  //         })
  //       },
  //       err => {
  //         this.setState({
  //           isLoaded: true,
  //           error: "?"
  //         })
  //       }
  //     )
  // }
  render() {
    return (
      <div>
        <p>{this.state.orchestras}</p>
        <p>{this.state.seasons}</p>
      </div>
    )

  }
}

export default App;

// const { error, isLoaded, orchestras, seasons } = this.state;
// if (error) {
//   return <div>Error: {error.message}</div>;
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <div>
//       <p>{orchestras}</p>
//       <p>{seasons}</p>
//     </div>
//   );
// }