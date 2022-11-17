import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
    navigate(`/bandleader/${payload.id}`)
  }

  return (
    <div className="login-page">
      {/* <div><img className="front-pic" src="https://cathouse.co.uk/wp-content/uploads/2019/05/crowd-bw.jpg"></img></div> */}
      <div className="login-wrapper">
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label className="login-label"htmlFor="email">Email</label>
            <input className="login-inputs"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div >
            <label className="login-label" htmlFor="password">Password</label>
            <input className="login-inputs"
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
      <h5 className="register-musician-link">If you are a musician and want to add yourself to our database please<Link to="/register-musician">REGISTER HERE</Link></h5>
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