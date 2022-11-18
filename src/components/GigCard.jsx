import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  await axios.put(`https://gitagig.herokuapp.com/api/musician/${musicianId}`, deletedGig )
  setMusiciansOnGig(null)
  toggleDeletedMusician(!deletedMusician)
}


console.log(musiciansOnGig)
  return (
    <div>
          {gigDetails ? <div className="gig-card">
                    <h4 className="gig-list-title">{gigDetails[0].venueName}</h4>
                    <p className="gig-list-type"><b>{gigDetails[0].date}</b> @ {gigDetails[0].time}pm</p>
                    <p className="gig-list-location"><b>located at:</b> {gigDetails[0].location}</p>
                    <p className="gig-list-type"><b>type of gig:</b> {gigDetails[0].gigType}</p>
                      <button className="gigDelete" onClick={() => {deleteGig(gigId)}}>Delete Gig</button>
                      <button className="updategig" onClick={handleUpdateClick}>Update Gig</button>
                    <ul className="musicians-on-gig">
                    <h4>Musicians:</h4>
                    {!musiciansOnGig ? <h6>No Musicians On Gig</h6> : musiciansOnGig.map((musicians, idx) => (
                      <p key="musicians.id" className="hired-musician"><b>{musicians.name}</b> <br></br>-{musicians.instrument}-<br></br><button className="delete-musician" id={musicians.id} onClick={handleDeleteMusician}>Delete Musician</button></p>
                      
                    ))}
                    </ul>
                    <button id={gigId} onClick={handleClick} className='gigcard-add-musician-btn' >Add Musicians</button></div> 
                : <h5>No Details Available</h5>}
    </div>
  )
}
