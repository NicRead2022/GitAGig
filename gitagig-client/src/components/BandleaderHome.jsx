import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import React from 'react'

const BandleaderHome = ({bandleader}) => {
const navigate = useNavigate()
// const initialState = {}
const [bandleaderDetails, setBandleaderDetails] = useState()
let Id  = bandleader.id
console.log(Id)

const getDetails = async () => {
  const response = await axios.get(`http://localhost:3001/api/bandleader/${Id}`) 
  setBandleaderDetails(response.data)
}

useEffect(() => {
  getDetails()
})

  return (
    <div className="bandleader-land">
      <div className="bandleader-info">
        <h2>Welcome {bandleaderDetails?.name}</h2>
        <img src={bandleaderDetails?.image}></img>
        <h5>Name</h5>
        <h5>Bandname:</h5>
        <h5>Social Media</h5>
          <div className="gig-list">
          <h4>Your Upcoming Gigs:</h4>
          </div>
        <button onClick={navigate('/newgig')}>Create New Gig</button>
      </div>
    </div>
  )
}

export default BandleaderHome