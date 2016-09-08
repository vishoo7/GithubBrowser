import { combineReducers } from 'redux'
import CommitsReducer from './reducer-commits'
import RepositoryReducer from './reducer-repository'

const rootReducer = combineReducers({
  repository: RepositoryReducer,
  commits: CommitsReducer
})

export default rootReducer
