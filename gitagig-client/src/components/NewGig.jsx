import React from 'react';
import Client from '../services/api'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewGig = ({bandleader}) => {
const navigate = useNavigate()
const initialState = {venueName: "", location: "", gigType: ""}
const [formState, setFormState] = useState(initialState)
// let Id = bandleader.id
console.log(bandleader.id)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    let newGigWithId = {...formState, bandleaderId: bandleader.id }
    await Client.post(`/api/gigs`, newGigWithId)
      .then((res) => {
        console.log(res);
        setFormState(initialState)
        navigate('/bandleader')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
          <h3>Post New Gig:</h3>
    <form onSubmit={handleSubmit}>
    <div className='new-gig-input-wrapper'>
          <label htmlFor='venueName'>Venue:</label>
          <input
             onChange={handleChange}
             name="venueName"
             type="text"
             value={formState.venueName} required
          />
        </div>
        <div className='new-gig-input-wrapper'>
          <label htmlFor='location'>Location:</label>
          <input
             onChange={handleChange}
             name="location"
             type="text"
             value={formState.location} required
          />
        </div>
        <div className='new-gig-input-wrapper'>
          <label htmlFor='gigType'>Gig Type:</label>
          <input
             onChange={handleChange}
             name="gigType"
             type="text"
             value={formState.gigType} required
          />
        </div>
      <button className='add-gig-info-btn' type="submit">Add Gig</button>
    </form>
  </div>
  )}


export default NewGig

