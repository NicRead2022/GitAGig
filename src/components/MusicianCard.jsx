import React from 'react'
import {useParams} from 'react-router-dom'

const MusicianCard = (selectedMusician) => {
let {idx} = useParams()

  return (
    <div>{selectedMusician[idx].name}</div>
  )
}

export default MusicianCard