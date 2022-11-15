import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'

export const GigCard = ({gigId}) => {
const [gigDetails, setGigDetails] = useState(null)
const [musiciansOnGig, setMusiciansOnGig] = useState(null)

  const getDetails = async () => {
    const response = await Client.get(`/api/gigs/${gigId}`) 
    setGigDetails(response.data)
    console.log(response.data)
    let data = response.data
  let gigMusicians = []
  data.forEach(element => {
    gigMusicians.push(element.Gigs) 
  });
  setMusiciansOnGig(gigMusicians)
  }

  useEffect(() => {
    getDetails()
  }, [])

  // key={gigDetails.id}

  return (
    <div>
          {gigDetails ? <div className="gig-card">
                    <h4 className="gig-list-title">{gigDetails?.venueName}: 1.3.22</h4>
                    <h5>{gigDetails?.location}</h5>
                    <h6 className="gig-list-details">{gigDetails?.gigType}</h6>
                    <ul className="musicians-on-gig">Musicians:</ul>
                    {musiciansOnGig.map((musicians, index) => {
                      // <li>{musicians.name}: {musicians.instrument}</li>
                    })}

                    <Link to="/musicians"><button>Add Musicians</button></Link></div> 
                : <h5>No Details Available</h5>}
    </div>
  )
}
