import { SAVE_PROFILE, CLEAR_PROFILE, DELETE_PROFILE } from '../actions/index'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return action.profile
    
    case CLEAR_PROFILE:
      return initialState
    
    case DELETE_PROFILE:
      return state.profile

    default:
      return state
  }
}

export default reducer
