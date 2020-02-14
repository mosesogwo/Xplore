import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import packagesReducer from './packagesReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  username: usernameReducer,
  packages: packagesReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;