import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';

const reducers = combineReducers({
  Auth,
  Profiles,
});

export default reducers;
