import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {


  const location = useLocation()

  useEffect(() => {

  }, [location.pathname])

  return (
    <div className="navbar-container home-fade-in">
      
      {/* <div className="thewhalebase-container">
        <h1 className="thewhalebase-header fade-in">The WhaleBase</h1>
      </div> */}

      

      <div className="navbar-content">

        
        
        <Link to='/'><h1 className="thewhalebase-header">The Whalebase</h1></Link>

            

          
        <ul className="page-links">

          <Link to='/auth/login'>
            <li className="navlinks">Login</li>
          </Link>
          
          <Link to='/auth/register'>
            <li className="navlinks">Sign Up</li>
          </Link>

          <Link to='/whales'>
            <li className="navlinks">Whales</li>
          </Link>

          <Link to='/blog'>
            <li className="navlinks">Blog</li>
          </Link>

        </ul>
      </div>

    </div>
  )
}

export default Nav