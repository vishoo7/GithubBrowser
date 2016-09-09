
import * as types from '../actions/types';

const initial_state = {  
  repos: []
};
export default function(state = initial_state , action) {
  switch (action.type) {
    case types.LOAD_SEARCH_LAYOUT:
      return Object.assign({}, state, {
        searchType: action.searchType,
        title: action.title
      });
    default:
      return state
  }
}
