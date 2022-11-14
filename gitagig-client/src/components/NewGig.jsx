import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function NewGig() {

  const [name, setName] = useState("")

  const [location, setLocation] = useState("")

  // const [bandleaderId, setbandleaderId] = useState("")

  const handleNameChange = event => {
    setName(event.target.value);
  }
  const handleLocationChange = event => {
    setLocation(event.target.value);
  }
  // const handleBandleaderId = event => {
  //   setBandleaderId(event.target.value);
  // }

  const handleSubmit = event => {
    event.preventDefault();
    const post = {
      name: name,
      location: location,
      // bandleaderId: bandleaderId,
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
        <input type="text" name="name" onChange={handleNameChange} />
        <input type="text" name="location" onChange={handleLocationChange} />
        {/* <input type="text" name="bandleaderId" onChange={handleBandleaderId} /> */}
      </label>
      <button type="submit">Add Gig</button>
    </form>
  </div>
  )}







 
 

export default NewGig



// do i need to import <NewGig into Bandleader component?