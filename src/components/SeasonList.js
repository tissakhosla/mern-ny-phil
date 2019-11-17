import React from 'react'
import SeasonItem from './SeasonItem'

const SeasonList = (props) => {
  let seasonArray = props.seasons.map(season => {
    let url = `http://localhost:8080/program/season/${season}`
    return (
    <button><a href={url}>{season}</a></button>
    )  
  })
  return <div>{seasonArray}</div>
}

export default SeasonList;