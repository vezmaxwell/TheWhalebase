import React, { useState } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'

const Login = () => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

// Functions

  // const history = useHistory()

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      console.log('formdata', formData)
    } catch (error) {
      console.log('ERROR', error)
      console.log('formDATA ERROR', formData)
    }
  }

  return (
    <div className="form-page">

      <div className="form-container center fade-in">
        
        <h1 className="form-header">Login to your account</h1>


        <form onSubmit={handleSubmit} className="form">
          
          <div className="formfield">
            <label htmlFor="email">Email</label>
            <input onInput={handleChange} type="email" name="email" id="email" value={formData.email} placeholder="Enter your email" />
          </div>
{/* 
          <div className="formfield">
            <label htmlFor="username">Username</label>
            <input onInput={handleChange} type="text" name="username" id="username" value={formData.username} placeholder="Choose your username" />
          </div> */}

          <div className="formfield">
            <label htmlFor="password">Password</label>
            <input onInput={handleChange} type="password" name="password" id="password" value={formData.password} placeholder="Choose a password" />
          </div>

          {/* <div className="formfield">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input onInput={handleChange} type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} placeholder="Confirm your password" />
          </div> */}

          <div className="formfield">
            <button className="form-button">Login</button>
          </div>

        </form>
      </div>

    </div>
  )

}

export default Login