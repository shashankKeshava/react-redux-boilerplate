import { combineReducers } from 'redux';
import { AppDuc } from '../container/App/duc';

// Assembling/Combining all Reducers
export default combineReducers({
    [AppDuc.store]: AppDuc.reducer,
});
