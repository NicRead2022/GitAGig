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
            <img className="musician-img" alt="musician-img" src={musician.image}/>
            <h4 className="musician-name">{musician.name}</h4>
            <h5>-{musician.instrument}-</h5>
            <h6>${musician.rate}</h6>
            <p className="musician-info"><b>preferred genre:</b> {musician.genre}</p>
            <p><b>about:</b> {musician.about}</p>
            <p><b>socials:</b> {musician.socialMedia}</p>
            <button id={musician.id} onClick={handleClick} className='add-musician-btn' >Add Musician</button>
              </div>
        )))}
      </div>
  </div>
  )
}

export default Musicians