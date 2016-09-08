
import * as types from '../actions/types';

const initial_state = {  
  repos: []
};
export default function(state = initial_state , action) {
  switch (action.type) {
    case types.LOAD_REPOSITORY_SUCCESS:
      return Object.assign({}, state, { repos: action.repos });
    default:
      return state
  }
}
