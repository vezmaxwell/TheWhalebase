import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const [ errors, setErrors ] = useState({
    password: { message: '' }
  })

  const [ triggerError, setTrigger ] = useState(false)

// Functions

  const history = useHistory()

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

      history.push('/')

      console.log('formdata', formData)
    } catch (error) {
      console.log('ERROR', error)
      console.log('formDATA ERROR', formData)
      setTrigger(true)
      if (error.response.errors) setErrors(error.response.errors)
      console.log('error response errors', error.response.errors)
      console.log(triggerError)
    }
  }

  return (
    <div className="form-page">

      <div className="form-container login-form-container center fade-in">

        <h1 className="form-header">Login to your account</h1>


        <form onSubmit={handleSubmit} className="login-form form">
          
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
            <input onInput={handleChange} type="password" name="password" id="password" value={formData.password} placeholder="Enter your password" />
          
            {
            triggerError ?  
              errors.password && <p className="errors">Email and password combination incorrect</p>
              :
              <p></p>
            }
          
          </div>

          <div className="formfield">
            <button className="form-button">Login</button>
          </div>

        </form>
      </div>

    </div>
  )

}

export default Login