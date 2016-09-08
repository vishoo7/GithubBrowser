
import * as types from '../actions/types';

const initial_state = {  
  commits: []
};
export default function(state = initial_state, action) {
  switch (action.type) {
    case types.LOAD_COMMITS_SUCCESS:
      return Object.assign({}, state, { commits: action.commits });
    default:
      return state
  }
}
