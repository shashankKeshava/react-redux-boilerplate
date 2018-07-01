import { combineReducers } from 'redux';
import { AppDuc } from '../container/app/duc';

// Assembling/Combining all Reducers
export default combineReducers({
    [AppDuc.store]: AppDuc.reducer,
});
