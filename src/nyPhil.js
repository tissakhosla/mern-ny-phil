import React, { Component } from 'react'
import TestComponent from './components/TestComponent'

class Phil extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      NYPobj: {}
    }
    this.getData = this.getData.bind(this)
  }

  getData() {
    fetch("http://localhost:8080/")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          NYPobj: res
        })
      })
  }
  componentDidMount(){
    this.getData()
  }

  render() {
    return <TestComponent {... this.state} />
  }
}

export default Phil;