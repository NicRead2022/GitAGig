import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function NewGig() {
const initialState = {name: "", location: "",}
const [formState, setFormState] = useState(initialState)


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await
    const post = {
      name: formState.name,
      location: formState.location,
    }
    console.log(post)
    axios.post(
      `http://localhost:3001/api/gig`, post)
      .then(res => {
        console.log(res);
        console.log(res.data);
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



// do i need to import <NewGig into Bandleader component?