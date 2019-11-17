import React from 'react'

const SeasonList = (props) => {

  let performanceArray = props.seasons.map(season => {
    return season
  })

  performanceArray = performanceArray.filter((item, index) => {
    return performanceArray.indexOf(item) === index
  })

  let seasonArray = performanceArray.map(season => {
    let url = `http://localhost:8080/program/season/${season}`
    return (
    <a href={url}><button>{season}</button></a>
    )  
  })

  console.dir(seasonArray)
  return <div>{seasonArray}</div>
}

export default SeasonList;