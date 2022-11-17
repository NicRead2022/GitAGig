import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterMusician = () => {
  const navigate = useNavigate()
  const initialState = { name: "", instrument: "", socialMedia: "", image: "", genre:"", about:"" }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://gitagig.herokuapp.com/api/musician/`, formState )
    setFormState(initialState);
    navigate('/')
    
  }
  // await axios.post({
  //   name: formState.name,
  //   email: formState.instrument,
  //   password: formState.socialMedia,
  //   band: formState.image,
  //   socialMedia: formState.genre,
  //   blImage: formState.about
  // });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value});
  }


  return (
    <div>
                <h3>Register Musician:</h3>
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
          <label htmlFor='instrument'>Instrument:</label>
          <input
             onChange={handleChange}
             name="instrument"
             type="text"
             value={formState.instrument} required
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
          <label htmlFor='image'>Image:</label>
          <input
             onChange={handleChange}
             name="image"
             type="text"
             value={formState.image} 
          />
        </div>
      <button type="submit">Create Musician</button>
    </form>
    </div>
    
  )
}

export default RegisterMusician