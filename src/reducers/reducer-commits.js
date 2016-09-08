import { FETCH_COMMITS } from '../actions/index'

export default function(state = [] , action) {
  switch (action.type) {
    case FETCH_COMMITS:
      return Object.assign({}, state, { commits: action.commits });
    default:
      return state
  }
}
