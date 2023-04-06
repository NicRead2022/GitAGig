import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const SignIn = ({ toggleAuthenticated, setBandleader, user }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ email: '', password: '' })
    setBandleader(payload)
    toggleAuthenticated(true)
    navigate(`/bandleader/${payload.id}`)
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label className="login-label" htmlFor="email">
              Email
            </label>
            <input
              className="login-inputs"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              className="login-inputs"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="login-btn"
            disabled={!formValues.email || !formValues.password}
          >
            Login
          </button>
        </form>
        <div className="admin">
          <h4>
            <i>please login with:</i>
          </h4>
          <h5>
            admin@admin.com <br />
            admin
          </h5>
        </div>
      </div>
      <h6 className="register-musician-text">
        If you are a musician and want to add yourself to our database please
      </h6>
      <h6>
        <Link to="/register-musician">CLICK HERE TO GET ON THE LIST</Link>
      </h6>
    </div>
  )
}

export default SignIn
