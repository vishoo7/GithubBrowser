import { FETCH_REPOSITORY } from '../actions/index'

export default function(state = [] , action) {
  switch (action.type) {
    case FETCH_REPOSITORY:
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}
