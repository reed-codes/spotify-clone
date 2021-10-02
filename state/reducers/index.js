import { combineReducers } from 'redux'
import playerReducer from  './playerReducer'

const reducers = combineReducers({
      player : playerReducer 
})


export default reducers