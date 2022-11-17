import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import BandleaderHome from './BandleaderHome'
import NewGig from './NewGig'
import Musicians  from './Musicians'
import Register from './Register'
import UpdateGig from './UpdateGig'
import RegisterMusician from './RegisterMusician'

const Main = ({toggleAuthenticated,authenticated, bandleader, setBandleader, checkToken}) => {
  const [selectedGig, setSelectedGig] = useState(null)

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
        <Route path="/bandleader/:id"element={<BandleaderHome selectedGig={selectedGig} setSelectedGig={setSelectedGig} bandleader={bandleader} checkToken={checkToken}authenticated={authenticated}/>}> </Route>
        <Route path="/new-gig"  element={<NewGig bandleader={bandleader}/>}> </Route>
        <Route path="/update-gig"  element={<UpdateGig bandleader={bandleader}selectedGig={selectedGig}/>}> </Route>
        <Route path="/musicians" element={<Musicians bandleader={bandleader} selectedGig={selectedGig}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/register-musician" element={<RegisterMusician/>}></Route>
      </Routes>

  
    </div>
  )
}

export default Main