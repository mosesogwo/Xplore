import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import packagesReducer from './packagesReducer';

const rootReducer = combineReducers({
  username: usernameReducer,
  packages: packagesReducer
});

export default rootReducer;