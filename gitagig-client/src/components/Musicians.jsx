import React from 'react'
import Client from '../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Musicians = ({gig}) => {
  const navigate = useNavigate()
  const initialState = {name: "", socialMedia: "", genre: "", about:"", image:""}
  const [formState, setFormState] = useState(initialState)
  let Id = gig.id

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    let newMusicianWithId = {...formState, gigId: Id }
    await Client.post(`/api/musician`, newMusicianWithId)
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
          <h3>Add Musician:</h3>
    <form onSubmit={handleSubmit}>
    <div className='new-musician-input-wrapper'>
          <label htmlFor='name'>Name:</label>
          <input
             onChange={handleChange}
             name="name"
             type="text"
             value={formState.name} required
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label htmlFor='socialMedia'>Socials:</label>
          <input
             onChange={handleChange}
             name="socialMedia"
             type="text"
             value={formState.socialMedia} 
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label htmlFor='genre'>Genre:</label>
          <input
             onChange={handleChange}
             name="genre"
             type="text"
             value={formState.genre} 
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label htmlFor='about'>About:</label>
          <input
             onChange={handleChange}
             name="about"
             type="text"
             value={formState.about} 
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label htmlFor='image'>About:</label>
          <input
             onChange={handleChange}
             name="image"
             type="text"
             value={formState.image} 
          />
        </div>
      <button type="submit">Add Musician</button>
    </form>
  </div>
  )
}

export default Musicians