import { combineReducers } from 'redux'

import asshole from './asshole'
import auth from './auth'
import profile from './profile'
import users from './users'

export default combineReducers({
  asshole, 
  auth,
  profile,
  users
})
