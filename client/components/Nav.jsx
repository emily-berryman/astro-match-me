import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import { logOut } from '../actions/auth'
import { clearProfileFromRedux } from '../actions'

const logOutUser = (dispatch) => {
  logOff()
  dispatch(logOut())
  dispatch(clearProfileFromRedux())
}

const Nav = (props) => {
  return (
    <>
      <IfAuthenticated>
        <Link to='/home'>Home</Link>
        <Link to='/' onClick={() => logOutUser(props.dispatch)}>Log off</Link>
        
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='/sign-in'>Sign in</Link>
        <Link to='/register'>Register</Link>
      </IfNotAuthenticated>

    </>
  )
}

export default connect()(Nav)
