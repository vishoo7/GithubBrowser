import { combineReducers } from 'redux'
import CommitsReducer from './reducer-commits'
import RepositoryReducer from './reducer-repository'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  repository: RepositoryReducer,
  commits: CommitsReducer,
  form: formReducer
})

export default rootReducer
