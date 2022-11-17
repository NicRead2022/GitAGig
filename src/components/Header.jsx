import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'

const Header = ({authenticated, user, handleLogOut}) => {
  // const [isClicked, setIsClicked] = useState(false)

  // const handleToggle = () => {
  //   setIsClicked(!isClicked)
  // }

  return (
    <div className={authenticated ? "nav-div" : "loggedOutNavDiv"}>
      <h1>-HIRED-</h1>
      <h6>{authenticated ? <Link onClick={handleLogOut}to="/">LogOut</Link> : <Link to="/">Login</Link>} | <Link to="/register">Register</Link></h6>
      <h3> </h3>
    </div>
  )
}

export default Header