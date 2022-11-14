import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
// import axios from 'axios'



const Register = () => {
  const navigate = useNavigate()
  const initialState = { name: "", band: "", socials: "", image: "", email: "", password:"", confirmPassword:"" }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formState.name,
      email: formState.email,
      password: formState.password
    });
    setFormState(initialState);
    navigate('/')

  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value});
  }


  return (
    <div className='registrationForm'>
      <h1 className='registrationFormTitle'>Register</h1>
      <form className='registrationForm' onSubmit={handleSubmit}>
        <div className='registrationInputWrapper'>
          <label htmlFor='name'>Name:</label>
          <input 
            onChange={handleChange}
            name="name"
            type="text"
            placeholder=' enter name here '
            value={formState.name} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='email'>Email:</label>
          <input
             onChange={handleChange}
             name="email"
             type="text"
             placeholder=' example@example.com '
             value={formState.email} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='band'>Band:</label>
          <input
             onChange={handleChange}
             name="band"
             type="text"
             value={formState.band} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='socials'>socials:</label>
          <input
             onChange={handleChange}
             name="socials"
             type="text"
             value={formState.socials}
            //  this should be locations for multiple different URLs? 
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='image'>image:</label>
          <input
             onChange={handleChange}
             name="image"
             type="text"
             value={formState.image} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='password'>Password:</label>
          <input
             onChange={handleChange}
             name="password"
             type="password"
             value={formState.password} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
             onChange={handleChange}
             name="confirmPassword"
             type="password"
             value={formState.confirmPassword} required
          />
        </div>
        <button
          disabled={
            !formState.email ||
            (!formState.password &&
              formState.confirmPassword === formState.password)
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register