import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'

export const GigCard = ({gigId, selectedGig, setSelectedGig, deletedGig, toggleDeletedGig, setBandleaderGigs}) => {
  let navigate = useNavigate()
const [gigDetails, setGigDetails] = useState(null)
const [musiciansOnGig, setMusiciansOnGig] = useState(null)
const [deletedMusician, toggleDeletedMusician] = useState(true)

  const getDetails = async () => {
    const response = await Client.get(`/api/gigs/${gigId}`) 
    setGigDetails(response.data)
    console.log(response.data)
    let data = response.data
  let gigMusicians = []
  data.forEach(element => {
    gigMusicians.push(element.Musicians) 
  });
  if (!gigMusicians[0].id){
    return null
  } else
  setMusiciansOnGig(gigMusicians)
  }

  const deleteGig = async () => {
    await Client.delete(`/api/gigs/${gigId}`)
    setBandleaderGigs(null)
    toggleDeletedGig(!deletedGig)
  }

  useEffect(() => {
    getDetails()
  }, [deletedMusician])

const handleClick = (e) => {
  setSelectedGig(e.target.id)
  navigate('/musicians')
}

const handleUpdateClick = (e) => {
  console.log(gigDetails)
  setSelectedGig(gigDetails)
  navigate('/update-gig')
}

const handleDeleteMusician = async(e) => {
  let musicianId= e.target.id
  let deletedGig = {gigId: null}
  await axios.put(`http://localhost:3001/api/musician/${musicianId}`, deletedGig )
  setMusiciansOnGig(null)
  toggleDeletedMusician(!deletedMusician)
}


  // key={gigDetails.id}
console.log(musiciansOnGig)
  return (
    <div>
          {gigDetails ? <div className="gig-card">
                    <h5 className="gig-list-title">{gigDetails[0].venueName}: 1.3.22</h5>
                    <h6>{gigDetails[0].location}</h6>
                    <h6 className="gig-list-details">{gigDetails[0].gigType}</h6>
                      <button className="gigDelete" onClick={() => {deleteGig(gigId)}}>Delete Gig</button>
                      <button className="updateGig" onClick={handleUpdateClick}>Update Gig</button>
                    <ul className="musicians-on-gig">Musicians:
                    {!musiciansOnGig ? undefined : musiciansOnGig.map((musicians, idx) => (
                      <li>{musicians.name}: {musicians.genre}<button id={musicians.id} onClick={handleDeleteMusician}>Delete Musician</button></li>
                      
                    ))}
                    </ul>
                    <button id={gigId} onClick={handleClick} className='gigcard-add-musician-btn' >Add Musicians</button></div> 
                : <h5>No Details Available</h5>}
    </div>
  )
}
