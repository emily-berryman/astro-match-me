import request from 'superagent'

import { addProfileToDb } from '../apis/profiles'

export const GET_USERS = 'GET_USERS'
export const SET_LOADED = 'SET_LOADED'
export const SAVE_PROFILE = 'SAVE_PROFILE'

export const setLoaded = () => {
  return {
    type: SET_LOADED,
  }
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}


export function saveProfileToRedux (profile) {
  return {
    type: SAVE_PROFILE,
    profile
  }
}

export function fetchUsers () {
  return (dispatch) => {
    return request
    .get('/api/v1/profiles')
    .then(res => {
      dispatch(getUsers(res.body))
      dispatch(setLoaded())
      })
      .catch(err => console.log(err))
  }
}

export function addProfileToDbAndRedux (profile) {
  return (dispatch) => {
    return addProfileToDb(profile)
      .then(res => {
        dispatch(saveProfileToRedux(profile))
      })
      .catch(err => console.log(err))
  }
}
