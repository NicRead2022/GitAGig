import React from 'react'
import {useParams} from 'react-router-dom'

const MusicianCard = (selectedMusician) => {
let {idx} = useParams()
console.log(selectedMusician)
  return(
    <div>{selectedMusician[idx]}</div>
  )
}

export default MusicianCard