import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({authenticated, user, handleLogOut}) => {

  return (
    <div className={authenticated ? "nav-div" : "loggedOutNavDiv"}>
      <h1>-HIRED-</h1>
      <h6 className={authenticated ? "logged-in-color" : "logged-out-color"}>{authenticated ? <Link onClick={handleLogOut}to="/">LogOut</Link> : <Link to="/">Login</Link>} | <Link to="/register">Register</Link> | {authenticated ? <Link to={`/bandleader/${user.id}`}>Home</Link> : <Link to='/'>Home</Link>}</h6>
      <h3> </h3>
    </div>
  )
}

export default Header