import React, { useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'

const Nav = () => {

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }


  return (
    <div className="navbar-container home-fade-in">
      <div className="navbar-content">

        <Link to='/'><h1 className="thewhalebase-header">The Whalebase</h1></Link>
          
        <ul className="page-links">

        <Link to='/whales'>
            <li className="navlinks">Whales</li>
        </Link>

        <Link to='/blog'>
            <li className="navlinks">Blog</li>
        </Link>

        { 
          !userIsAuthenticated() ?
          <>
            <Link to='/auth/register'>
              <li className="navlinks">Sign Up</li>
            </Link>

            <Link to='/auth/login'>
              <li className="navlinks">Login</li>
            </Link>

          </>
          :
          <>
            <Link to='/post'>
              <li className="navlinks">Post</li>
            </Link>
            
            <li onClick={handleLogout} className="navlinks logout">Logout</li>
            
          </>
        }




        </ul>
      </div>

    </div>
  )
}

export default Nav