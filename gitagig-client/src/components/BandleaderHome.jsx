import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'
import { GigCard } from './GigCard'

const BandleaderHome = ({bandleader, selectedGig, setSelectedGig}) => {
const navigate = useNavigate()
const [bandleaderDetails, setBandleaderDetails] = useState()
const [bandleaderGigs, setBandleaderGigs] = useState([])
const [deletedGig, toggleDeletedGig] = useState(false) 

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
  if (!bandGigs[0].id){
    return null
  } else
  setBandleaderGigs(bandGigs)
}

useEffect(() => {
  getDetails()
}, [deletedGig])



// useEffect(() => {

//   }, [bandleaderDetails])

  // const gigs =  bandleaderGigs.map((gig,index) => (
  //     <div className="gig-card" key={gig.id}>
  //       <h1>THIS IS A GIG</h1>
  //     <h4 className="gig-list-title">{gig.venueName}</h4>
  //     <div className="gig-list-details">{gig.gigType}</div>
  //     </div>
  // ))

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
          <Link to='/new-gig'><button className='add-gigbtn' role="button">Add Gig</button></Link>
          <h4>Your Upcoming Gigs:</h4>
            <div className="gigs-div">
                {!bandleaderGigs ? <h5>No Details Available</h5> :           
                bandleaderGigs.map((gig,index) => (
                  <div key={gig.id} className="gig-card-wrapper">
                    <GigCard key={gig.id} gigId={gig.id} selectedGig={selectedGig} setSelectedGig={setSelectedGig} deletedGig={deletedGig} toggleDeletedGig={toggleDeletedGig} setBandleaderGigs={setBandleaderGigs}/>
                  </div>
                 ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default BandleaderHome