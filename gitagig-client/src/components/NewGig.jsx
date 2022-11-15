import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewGig() {
const navigate = useNavigate()
const initialState = {name: "", location: "",}
const [formState, setFormState] = useState(initialState)


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    let post = await axios.post(
      `http://localhost:3001/api/gig`, formState)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFormState(initialState)
        navigate('/bandleader/:Id')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>NewGig
    <form onSubmit={handleSubmit}>
      <label>
        Post Gig:
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="location" onChange={handleChange} />
      </label>
      <button type="submit">Add Gig</button>
    </form>
  </div>
  )}


export default NewGig