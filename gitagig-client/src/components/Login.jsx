import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const SignIn = ({toggleAuthenticated, setUser}) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/bandleader/:Id')
  }

  return (
    <div className="login-page">
      <div>LOGO OR TITLE</div>
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
          <button disabled={!formValues.email || !formValues.password}>
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