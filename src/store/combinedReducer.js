import {
    combineReducers
} from 'redux'
import App from '../container/App/duc'

export default combineReducers({
    [App.store]: App.reducer
})