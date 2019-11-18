import React, { Component } from 'react'
import OrchestraList from './components/OrchestraList'
import SeasonList from './components/SeasonList'
import ComposerList from './components/ComposerList'
import ConductorList from './components/ConductorList'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,

      orchestras: [],
      seasons: [],
      composerArrays: [],
      conductorArrays: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            orchestras: res.map(performance => { return performance.orchestra }),
            seasons: res.map(performance => { return performance.season }),
            composerArrays: res.map(performance => { return performance.works.map(work => { return work.composer }) }),
            conductorArrays: res.map(performance => { return performance.works.map(work => { return work.conductor }) })
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

  clickHandler() {
    let performanceId = prompt("Which ID should be deleted?")

    fetch("http://localhost:8080/program/id/" + performanceId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
      .then( res => res.text())
      .then( res => console.log(res))

    // fetch('https://example.com/delete-item/', {
    //   method: 'DELETE',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({ id: '5bdcdfa40f0a326f858feae0' })
    // })
    //   .then(res => res.text()) // OR res.json()
    //   .then(res => console.log(res))


  }

  render() {
    console.log(this.state.composerArrays)
    // console.log(this.state.orchestras)
    return (
      <div>
        <div>
          <button onClick={this.clickHandler}>DELETE</button>
        </div>
        <h2>Orchestras</h2>
        <OrchestraList {...this.state} />
        <h2>Seasons</h2>
        <SeasonList {...this.state} />
        <h2>Composers</h2>
        <ComposerList {...this.state} />
        <h2>Conductors</h2>
        <ConductorList {...this.state} />
      </div>
    )
  }
}

export default App;
