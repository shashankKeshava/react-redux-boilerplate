import {
    combineReducers
} from 'redux'
import App from '../container/App/duc'

// Assembling/Combining all Reducers
export default combineReducers({
    [App.store]: App.reducer
})