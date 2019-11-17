import React, { Component } from 'react'
import OrchestraList from './components/OrchestraList'
import SeasonList from './components/SeasonList'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orchestras: [],
      seasons: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            orchestras: res.map(performance => {
              return performance.orchestra
            }),
            seasons: res.map(performance => {
              return performance.season
            })
          })
        },
        err => {
          this.setState({
            isLoaded: true,
            error: "?"
          })
        }
      )
  }

  render() {
    return (
      <div>
        <h2>Orchestras</h2>
        <OrchestraList {...this.state} />
        <h2>Seasons</h2>
        <SeasonList {...this.state} />
      </div>
    )

  }
}

export default App;
