import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'

export const GigCard = ({gigId, selectedGig, setSelectedGig}) => {
  let navigate = useNavigate()
const [gigDetails, setGigDetails] = useState(null)
const [musiciansOnGig, setMusiciansOnGig] = useState(null)

  const getDetails = async () => {
    const response = await Client.get(`/api/gigs/${gigId}`) 
    setGigDetails(response.data)
    console.log(response.data)
    let data = response.data
  let gigMusicians = []
  data.forEach(element => {
    gigMusicians.push(element.Musicians) 
  });
  setMusiciansOnGig(gigMusicians)
  }

  useEffect(() => {
    getDetails()
  }, [])

const handleClick = (e) => {
  setSelectedGig(e.target.id)
  navigate('/musicians')
}


  // key={gigDetails.id}
console.log(musiciansOnGig)
  return (
    <div>
          {gigDetails ? <div className="gig-card">
                    <h5 className="gig-list-title">{gigDetails[0].venueName}: 1.3.22</h5>
                    <h6>{gigDetails[0].location}</h6>
                    <h6 className="gig-list-details">{gigDetails[0].gigType}</h6>
                    <ul className="musicians-on-gig">Musicians:
                    {musiciansOnGig.map((musicians, idx) => (
                      <li>{musicians.name}: {musicians.genre}</li>
                      
                    ))}
                    </ul>
                    <button id={gigId} onClick={handleClick}>Add Musicians</button></div> 
                : <h5>No Details Available</h5>}
    </div>
  )
}
