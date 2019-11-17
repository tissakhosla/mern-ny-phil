import React from 'react'
import SeasonItem from './SeasonItem'

const SeasonList = (props) => {

  return (
    <div>
      <p>{props.orchestras}</p>
      <p>{props.seasons}</p>
    </div>
  )

}

export default SeasonList;