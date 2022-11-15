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
console.log(bandleader)

const getDetails = async () => {
  const response = await Client.get(`/api/bandleader/${Id}`) 
  setBandleaderDetails(response.data)
  console.log(response.data)
}

useEffect(() => {
  getDetails()
}, [])

let bandleaderGigs = []
let bandleaderInfo = {}

useEffect(() => {
  bandleaderInfo = bandleaderDetails[0]
  bandleaderDetails.forEach(element => {
    bandleaderGigs.push(element.Gigs) 
  });
}, [bandleaderDetails])

  return (
    <div className="bandleader-land">
      <div className="bandleader-info">
        <h2>Welcome {bandleader.name}</h2>
        <img src={bandleaderInfo.blImage}></img>
        <h5>Name: {bandleaderInfo.name}</h5>
        <h5>Bandname:{bandleaderInfo.band}</h5>
        <h5>Social Media: <a href={`https://${bandleaderInfo.socialMedia}`} target="_blank">{bandleaderDetails?.socialMedia}</a></h5>
          <div className="gig-list">
          <h4>Your Upcoming Gigs:</h4>
          </div>
        <Link to="/new-gig"><button>Create New Gig</button></Link>
      </div>
    </div>
  )
}

export default BandleaderHome