import React from 'react'
import { useParams } from 'react-router-dom'

const MusicianCard = ({ selectedMusician }) => {
  let { idx } = useParams()
  return (
    <div className="musician-card-container">
      <h3>{selectedMusician[idx].name}</h3>
      <img className="musician-img" src={selectedMusician[idx].image} />
      <h5>-{selectedMusician[idx].instrument}-</h5>
      <div>
        <h6>genre: </h6> {selectedMusician[idx].genre}
        <br />
        <br />
        <h6>about this musician:</h6> {selectedMusician[idx].about}
        <br />
        <br />
        <h6>find this musician at: </h6>
        {selectedMusician[idx].socialMedia}
      </div>
    </div>
  )
}

export default MusicianCard
