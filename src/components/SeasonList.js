import React from 'react'
import SeasonItem from './SeasonItem'

const SeasonList = (props) => {
  let seasonArray = props.seasons.map(season => {
    let url = `http://localhost:8080/program/season/${season}`
    return (
    <a href={url}><button>{season}</button></a>
    )  
  })

  return <div>{seasonArray}</div>
}

export default SeasonList;