import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'

const BandleaderHome = ({bandleader}) => {
const navigate = useNavigate()
const [bandleaderDetails, setBandleaderDetails] = useState()
const [bandleaderGigs, setBandleaderGigs] = useState([])
let Id  = bandleader?.id
let result 


const getDetails = async () => {
  const response = await Client.get(`/api/bandleader/${Id}`) 
  console.log(response.data)
  setBandleaderDetails(response.data[0])
  let data = response.data
  let bandGigs = []
  data.forEach(element => {
    bandGigs.push(element.Gigs) 
  });
  setBandleaderGigs(bandGigs)
}

useEffect(() => {
  getDetails()
}, [])

// let bandleaderInfo = {}

// useEffect(() => {
//   bandleaderGigs ? console.log('this is weird')
//   : console.log('right?')
//   //   bandleaderGigs.map((gig,index) => {
//   //   <div className="gig-card" key={gig.id}>
//   //     <h1>THIS IS A GIG</h1>
//   //   <h4 className="gig-list-title">{gig.venueName}</h4>
//   //   <div className="gig-list-details">{gig.gigType}</div>
//   //   </div>
//   // })) 
//   console.log(bandleaderGigs)
//   }, [bandleaderDetails])

  const gigs =  bandleaderGigs.map((gig,index) => (
      <div className="gig-card" key={gig.id}>
        <h1>THIS IS A GIG</h1>
      <h4 className="gig-list-title">{gig.venueName}</h4>
      <div className="gig-list-details">{gig.gigType}</div>
      </div>
  ))

console.log(bandleaderGigs)

  return (
    <div className="bandleader-land">
      <div className="bandleader-info">
        <h2>Welcome {bandleaderDetails?.name}</h2>
        <img src={bandleaderDetails?.blImage}></img>
        <h5>Name: {bandleaderDetails?.name}</h5>
        <h5>Bandname:{bandleaderDetails?.band}</h5>
        <h5>Social Media: <a href={`https://${bandleaderDetails?.socialMedia}`} target="_blank">{bandleaderDetails?.socialMedia}</a></h5>
          <div className="gig-list">
          <h4>Your Upcoming Gigs:</h4>
          <div className="gigs-div">
            {/* <h3>{bandleaderGigs[0]?.id}</h3> */}
                {bandleaderGigs.map((gig,index) => (
                  <div className="gig-card" key={gig.id}>
                  <h1>THIS IS A GIG</h1>
                <h4 className="gig-list-title">{gig.venueName}</h4>
                <div className="gig-list-details">{gig.gigType}</div>
          </div>
  ))}
          </div>
           <Link to="/new-gig"><button>Create New Gig</button></Link>
          </div>
    </div>
    </div>
  )
}

export default BandleaderHome