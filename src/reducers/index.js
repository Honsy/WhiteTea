import { combineReducers } from 'redux'
import counter from './counter'
import {userReducer} from './userreducer'

export default combineReducers({
  counter,
  userReducer
})
