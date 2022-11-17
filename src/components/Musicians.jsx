import React from 'react'
import Client from '../services/api'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Main from './Main';


const Musicians = ({selectedGig, bandleader}) => {
  const navigate = useNavigate()
  const initialState = {name: "", socialMedia: "", genre: "", about:"", image:""}
  const [formState, setFormState] = useState(initialState)
  const [musicians,setMusicians] = useState([])
  // let Id = gig.id
  // let { id } = useParams()

  const getMusicians = async () => {
    const res = await axios.get(`https://gitagig.herokuapp.com/api/musician`)
    setMusicians(res.data)
  }


  useEffect(() => {
    getMusicians()
  }, [])

const handleClick = async(e) => {
  let musicianId= e.target.id
  let addedGig = {gigId: selectedGig}
  await axios.put(`https://gitagig.herokuapp.com/api/musician/${musicianId}`, addedGig )
  navigate (`/bandleader/${bandleader.id}`)
}


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();  
  //   let newMusicianWithId = {...formState}
  //   await Client.post(`http://localhost:3001/api/musician`, newMusicianWithId)
  //     .then((res) => {
  //       console.log(res);
  //       setFormState(initialState)
  //       navigate('/bandleader')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }


// make axios call to get musicians



  return (
    <div>
      <div className='getMusicians'>
        {musicians && (musicians.map(musician => (
          <div className='musicians' key={musician.id}>
            <h5>Musician: {musician.name}</h5>
            <h5>Genre: {musician.genre}</h5>
            <h5>About: {musician.about}</h5>
            <h5>Instrument: {musician.instrument}</h5>
            <h5>Image: {musician.image}</h5>
            <h5>Socials: {musician.socialMedia}</h5>
            <button id={musician.id} onClick={handleClick} className='add-musician-btn' >Add Musician</button>
              </div>
        )))}
      </div>
          {/* <h3>Register Musician:</h3>
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
    </form> */}
  </div>
  )
}

export default Musicians