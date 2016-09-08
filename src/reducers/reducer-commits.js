
import * as types from '../actions/types';

export default function(state = [] , action) {
  switch (action.type) {
    case types.FETCH_COMMITS:
      return Object.assign({}, state, { commits: action.commits });
    default:
      return state
  }
}
