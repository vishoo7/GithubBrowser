import { combineReducers } from 'redux'
import CommitsReducer from './reducer-commits'
import RepositoryReducer from './reducer-repository'

const rootReducer = combineReducers({
  commits: CommitsReducer,
  repository: CommitsReducer
})

export default rootReducer
