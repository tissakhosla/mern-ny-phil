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
    let newData = prompt("Please paste text for insertion!")

    const postMethod = {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: newData
    }

    fetch("http://localhost:8080/program", postMethod)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    console.log(eo)
  }

  updateHandler(eo) {
    eo.preventDefault()
    eo.persist()
    console.log(eo)
    let performanceId = eo.target.form[1].value
    let newData = prompt("Editing " + performanceId + " Paste updated version here.")

    let updateMethod = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: newData
    }

    fetch("http://localhost:8080/program/id/" + performanceId, updateMethod)
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
    return (
      <div>
        <h2>CRUD with the New York Philharmonic</h2>
        <div>
          <button onClick={this.createHandler}>CREATE</button><br></br>
          <a href={"http://localhost:8080/program/"}><button>READ all</button></a><br></br>
          <form>
            <button onClick={this.updateHandler}>UPDATE by id</button>
            <input type="text"></input>
          </form>
          <button onClick={this.deleteHandler}>DELETE</button><br></br>
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
