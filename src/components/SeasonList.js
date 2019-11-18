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
    if(!season) {
      return <a href={url}><button>0000 to 99</button></a>
    } else return <a href={url}><button>{season}</button></a>  
  })

  // console.dir(seasonArray)
  return <div>{seasonArray}</div>
}

export default SeasonList;