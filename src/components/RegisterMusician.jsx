import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterMusician = () => {
  const navigate = useNavigate()
  const initialState = { name: "", instrument: "", socialMedia: "", image: "", genre: "", about: "" }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://hired-serverside.herokuapp.com/api/musician/`, formState)
    setFormState(initialState);
    navigate('/')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }


  return (
    <div className="registrationForm">
      <h4 className="register-title">Add Yourself To Our List:</h4>
      <form className="registrationInputContainer" onSubmit={handleSubmit}>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='name'>Name:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="name"
            type="text"
            value={formState.name} required
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='instrument'>Instrument:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="instrument"
            type="text"
            value={formState.instrument} required
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='socialMedia'>Socials:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="socialMedia"
            type="text"
            value={formState.socialMedia}
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='genre'>Genre:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="genre"
            type="text"
            value={formState.genre}
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='about'>About:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="about"
            type="text"
            value={formState.about}
          />
        </div>
        <div className='new-musician-input-wrapper'>
          <label className="registration-labels" htmlFor='image'>Image:</label>
          <input className="registration-inputs"
            onChange={handleChange}
            name="image"
            type="text"
            value={formState.image}
          />
        </div>
        <button className="registerButton" type="submit">Create Musician</button>
      </form>
    </div>

  )
}

export default RegisterMusician