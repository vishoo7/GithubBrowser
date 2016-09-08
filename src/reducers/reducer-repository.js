import { FETCH_REPOSITORY } from '../actions/index'
const initial_state = {  
  repos: []
};
export default function(state = initial_state , action) {
  switch (action.type) {
    case FETCH_REPOSITORY:
      return Object.assign({}, state, { repos: action.repos });
    default:
      return state
  }
}
