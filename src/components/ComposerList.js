import React from 'react'

const ComposerList = (props) => {
  let composerArray = []

  props.composerArrays.map(compArray => {
    for (var i = 0; i < compArray.length; i++) {
      composerArray.push(compArray[i])
    }
  })

  composerArray = composerArray.filter((item, index) => {
    return composerArray.indexOf(item) === index
  })

  composerArray = composerArray.map(composer => {
    let url = `http://localhost:8080/program/composer/${composer}`
    return (
      <a href={url}><button>{composer}</button></a>
    )
  })

  // console.dir(orchestraArray)
  return <div>{composerArray}</div>

}

export default ComposerList;
// [[a,b,c,d],[e,f,g,h],[j,k,l,m]]
