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

  createHandler(eo) {
    eo.preventDefault()
    eo.persist()

    const postMethod = {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(
        {
          programID: eo.target.form[0].value,
          season: eo.target.form[1].value,
          concerts: [
            {
              works: [ eo.target.form[2].value, eo.target.form[3].value ]
            }
          ]
        }
      )
    }

    fetch("http://localhost:8080/program", postMethod)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    console.log(eo)
  }

  deleteHandler(eo) {
    eo.preventDefault()
    let performanceId = prompt("Which ID should be deleted?")

    let deleteMethod = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    }
    fetch("http://localhost:8080/program/id/" + performanceId, deleteMethod)
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.composerArrays)
    // console.log(this.state.orchestras)
    return (
      <div>
        <div>
          <button onClick={this.deleteHandler}>DELETE</button>
        </div>
        <form>
          ProgramID: <input type="text" name="programID"></input>
          Season: <input type="text" name="season"></input>
          Work 1: <input type="text" name="work 1"></input>
          Work 2: <input type="text" name="work 2"></input>
          <input label="performance" value="CREATE" type="submit" onClick={this.createHandler}></input>
        </form>

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
