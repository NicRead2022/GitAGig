import React from 'react';
import Client from '../services/api'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateGig = ({selectedGig}) => {
const navigate = useNavigate()
const initialState = {venueName: "", location: "", gigType: ""}
const [formState, setFormState] = useState(initialState)
// let Id = bandleader.id
console.log(selectedGig)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    // let updatedGig = {...formState}
    await Client.put(`/api/gigs/${selectedGig[0].id}`, formState)
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
          <h3>Update Your Gig:</h3>
    <form onSubmit={handleSubmit}>
    <div className='new-gig-input-wrapper'>
          <label htmlFor='venueName'>Venue:</label>
          <input
             onChange={handleChange}
             placeholder={selectedGig[0].venueName}
             defaultValue={selectedGig[0].venueName}
             name="venueName"
             type="text"
             value={formState.venueName} 
          />
        </div>
    <div className='new-gig-input-wrapper'>
          <label htmlFor='date'>Date:</label>
          <input
             onChange={handleChange}
             placeholder={selectedGig[0].date}
             defaultValue={selectedGig[0].date}
             name="date"
             type="text"
             value={formState.date} 
             />
        </div>
    <div className='new-gig-input-wrapper'>
          <label htmlFor='time'>Time:</label>
          <input
             onChange={handleChange}
             placeholder={selectedGig[0].time}
             defaultValue="5"
             name="time"
             type="number"
             value={formState.time} 
             />
        </div>
        <div className='new-gig-input-wrapper'>
          <label htmlFor='location'>Location:</label>
          <input
             onChange={handleChange}
             placeholder={selectedGig[0].location}
             defaultValue={selectedGig[0].location}
             name="location"
             type="text"
             value={formState.location} 
             />
        </div>
        <div className='new-gig-input-wrapper'>
          <label htmlFor='gigType'>Gig Type:</label>
          <input
             onChange={handleChange}
             placeholder={selectedGig[0].gigType}
             defaultValue={selectedGig[0].gigType}
             name="gigType"
             type="text"
             value={formState.gigType} 
             />
        </div>
      <button type="submit">Update Gig</button>
    </form>
  </div>
  )}
  
  
  export default UpdateGig