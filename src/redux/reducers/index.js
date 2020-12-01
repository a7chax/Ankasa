import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import Destination from './Destination';

const reducers = combineReducers({
  Auth,
  Profiles,
  Destination,
});

export default reducers;
