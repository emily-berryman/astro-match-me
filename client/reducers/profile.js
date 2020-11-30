import { SAVE_PROFILE } from '../actions/index'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return action.profile
    default:
      return state
  }
}

export default reducer
