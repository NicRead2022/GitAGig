import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'



const Register = () => {
  const navigate = useNavigate()
  const initialState = { name: "", band: "", socialMedia: "", blImage: "", email: "", password:"", confirmPassword:"" }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formState.name,
      email: formState.email,
      password: formState.password,
      band: formState.band,
      socialMedia: formState.socialMedia,
      blImage: formState.blImage
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
      <form className='registrationInputContainer' onSubmit={handleSubmit}>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='name'>Name:</label>
          <input className='registration-inputs'
            onChange={handleChange}
            name="name"
            type="text"
            placeholder=' enter name here '
            value={formState.name} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='email'>Email:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="email"
             type="text"
             placeholder=' example@example.com '
             value={formState.email} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='band'>Band:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="band"
             type="text"
             value={formState.band} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='socialMedia'>Socials:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="socialMedia"
             type="text"
             value={formState.socialMedia}
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='blImage'>Image:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="blImage"
             type="text"
             value={formState.blImage} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='password'>Password:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="password"
             type="password"
             value={formState.password} required
          />
        </div>
        <div className='registrationInputWrapper'>
          <label className='registration-labels' htmlFor='confirmPassword'>Confirm Password:</label>
          <input className='registration-inputs'
             onChange={handleChange}
             name="confirmPassword"
             type="password"
             value={formState.confirmPassword} required
          />
        </div>
        <button className='registerButton'
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