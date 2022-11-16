import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const SignIn = ({toggleAuthenticated, setBandleader, user}) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    console.log(payload)
    setFormValues({ email: '', password: '' })
    setBandleader(payload)
    toggleAuthenticated(true)
    navigate(`/bandleader`)
  }

  return (
    <div className="login-page">
      {/* <div><img className="front-pic" src="https://cathouse.co.uk/wp-content/uploads/2019/05/crowd-bw.jpg"></img></div> */}
      <div className="login-wrapper">
        <form className="col" onSubmit={handleSubmit}>
          <div className="login-inputs">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="login-inputs">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button className='login-btn' disabled={!formValues.email || !formValues.password}>
            Login
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default SignIn


// const Login = () => {



//   return (
//     <div className="login-form">
//       <h2 className="login-head">Please Login</h2>
//       <form onSubmit={submitLogin}>
//       <input 
//         id="username"
//         onChange={handleChange}>
//       </input>
//       <input 
//         id="password"
//         onChange={handleChange}>
//       </input>
//       </form>
//     </div>
//   )
// }

// export default Login