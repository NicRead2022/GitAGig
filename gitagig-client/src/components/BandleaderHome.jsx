import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'

import React from 'react'

const BandleaderHome = ({bandleader}) => {
const navigate = useNavigate()
// const initialState = {}
const [bandleaderDetails, setBandleaderDetails] = useState()
let Id  = bandleader.id
console.log(Id)

const getDetails = async () => {
  const response = await Client.get(`/api/bandleader/${Id}`) 
  setBandleaderDetails(response.data[0])
  console.log(response.data[0])
}

useEffect(() => {
  getDetails()
}, [])

  return (
    <div className="bandleader-land">
      <div className="bandleader-info">
        <h2>Welcome {bandleaderDetails?.name}</h2>
        <img src={bandleaderDetails?.blImage}></img>
        <h5>Name</h5>
        <h5>Bandname:</h5>
        <h5>Social Media</h5>
          <div className="gig-list">
          <h4>Your Upcoming Gigs:</h4>
          </div>
        <Link to="/new-gig"><button> Create New Gig</button></Link>
      </div>
    </div>
  )
}

export default BandleaderHome