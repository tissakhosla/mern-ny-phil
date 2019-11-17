import React, { Component } from 'react'

class SeasonItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orchestra: props.orchestra,
      season: props.season
    }
  }

  render() {
    console.log(this.state)
    return (
      <button text={this.state.season}></button>
    )
  }
}

export default SeasonItem;