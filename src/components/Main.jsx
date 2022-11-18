import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import BandleaderHome from './BandleaderHome'
import NewGig from './NewGig'
import Musicians  from './Musicians'
import Register from './Register'
import UpdateGig from './UpdateGig'
import RegisterMusician from './RegisterMusician'
import MusicianCard from './MusicianCard'

const Main = ({toggleAuthenticated,authenticated, bandleader, setBandleader, checkToken}) => {
  const [selectedGig, setSelectedGig] = useState(null)
  const [selectedMusician, setSelectedMusician] = useState(null)

  return (
    <div className={authenticated ? "loggedInMain" : "loggedOutMain"}>
      <Routes>
        <Route path="/" 
              element={<Login
                toggleAuthenticated={toggleAuthenticated} 
                authenticated={authenticated} 
                bandleader={bandleader}
                setBandleader={setBandleader}/>}>        
        </Route>
        <Route path="/bandleader/:id"element={<BandleaderHome selectedMusician={selectedMusician} setSelectedMusician={setSelectedMusician} selectedGig={selectedGig} setSelectedGig={setSelectedGig} bandleader={bandleader} checkToken={checkToken}authenticated={authenticated}/>}> </Route>
        <Route path="/new-gig"  element={<NewGig bandleader={bandleader}/>}> </Route>
        <Route path="/update-gig"  element={<UpdateGig bandleader={bandleader}selectedGig={selectedGig}/>}> </Route>
        <Route path="/musicians" element={<Musicians bandleader={bandleader} selectedGig={selectedGig}/>}></Route>
        <Route path="/register" element={<Register authenticated={authenticated}/>}></Route>
        <Route path="/register-musician" element={<RegisterMusician/>}></Route>
        <Route path="/musician/:id" element={<MusicianCard selectedMusician={selectedMusician} setSelectedMusician={setSelectedMusician}/>}></Route>
      </Routes>

  
    </div>
  )
}

export default Main