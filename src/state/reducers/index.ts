import { combineReducers } from 'redux'
import { bookReducer } from './bookReducer'

const reducers = combineReducers({
    account: bookReducer
})

export default reducers