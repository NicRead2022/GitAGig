import React from 'react'
import {useParams} from 'react-router-dom'

const MusicianCard = ({selectedMusician}) => {
let {idx} = useParams()
  return(
    <div className="musician-card-container">
      <h3>{selectedMusician[idx].name}</h3>
      <img className="musician-img" src={selectedMusician[idx].image}/>
      <h5>-{selectedMusician[idx].instrument}-</h5>
      <p>
      <b>usually plays: </b> {selectedMusician[idx].genre}<br/><br/>
      <b>about this musician:</b> {selectedMusician[idx].about}<br/><br/>
      <b>find this musician at: </b>{selectedMusician[idx].socialMedia}</p>
    </div>
  )
}

export default MusicianCard