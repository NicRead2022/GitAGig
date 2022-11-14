import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import BandleaderHome from './BandleaderHome'
import NewGig from './NewGig'
import Musicians  from './Musicians'
import Register from './Register'


const Main = ({toggleAuthenticated,authenticated, bandleader, setBandleader}) => {


  return (
    <div className="main">
      <Routes>
        <Route path="/" 
              element={<Login
                toggleAuthenticated={toggleAuthenticated} 
                authenticated={authenticated} 
                bandleader={bandleader}
                setBandleader={setBandleader}/>}>        
        </Route>
        <Route path="/bandleader"element={<BandleaderHome bandleader={bandleader} authenticated={authenticated}/>}> </Route>
        <Route path="/newgig"  element={<NewGig/>}> </Route>
        <Route path="/musicians" element={<Musicians/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>

  
    </div>
  )
}

export default Main