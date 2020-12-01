import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import DetailFlight from './DetailFlight';

const reducers = combineReducers({
  Auth,
  Profiles,
  DetailFlight,
});

export default reducers;
