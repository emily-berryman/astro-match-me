import React from 'react'
import { Link } from 'react-router-dom'

// import { logOff } from 'authenticare/client'

// import { IfAuthenticated, IfNotAuthenticated } from './Auth'

// const NavGroup = styled.nav`
//   float: right;
// `

// const NavLink = styled(Link)`
//   margin-right: 30px;
// `

export default function Nav () {
  return (
    <>

    <Link to = '/register'>Register</Link>
      
        {/* <NavLink to='/'>Home</NavLink>
        <IfAuthenticated>
          <NavLink to='#' onClick={logOff}>Log off</NavLink>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/signin'>Sign in</NavLink>
        </IfNotAuthenticated>
      */}
     
    </>
  )
}