import React from 'react'

const OrchestraList = (props) => {

  let performanceArray = props.orchestras.map(orchestra => {
    return orchestra
  })

  performanceArray = performanceArray.filter((item, index) => {
    return performanceArray.indexOf(item) === index
  })

  let orchestraArray = performanceArray.map(orchestra => {
    let url = `http://localhost:8080/program/orchestra/${orchestra}`
    return (
    <a href={url}><button>{orchestra}</button></a>
    )  
  })

  // console.dir(orchestraArray)
  return <div>{orchestraArray}</div>
}

export default OrchestraList;