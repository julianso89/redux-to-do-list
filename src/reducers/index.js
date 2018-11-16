import { combineReducers } from 'redux';
import listReducer from './list_reducers';

const rootReducer = combineReducers({
    list: listReducer       
});

export default rootReducer;

