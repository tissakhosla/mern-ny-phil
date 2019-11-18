import React from 'react'

const ConductorList = (props) => {
  let conductorArray = []

  props.conductorArrays.map(condArray => {
    for (var i = 0; i < condArray.length; i++) {
      conductorArray.push(condArray[i])
    }
  })

  conductorArray = conductorArray.filter((item, index) => {
    return conductorArray.indexOf(item) === index
  })
  
  for(var i = 0; i < conductorArray.length; i++){
    if(conductorArray[i] === undefined){
      conductorArray[i] = "None"
    }
  }

  conductorArray = conductorArray.map(conductor => {
    let url = `http://localhost:8080/program/conductor/${conductor}`
    return (
      <a href={url}><button>{conductor}</button></a>
    )
  })

  // console.dir(orchestraArray)
  return <div>{conductorArray}</div>

}

export default ConductorList;
// [[a,b,c,d],[e,f,g,h],[j,k,l,m]]
