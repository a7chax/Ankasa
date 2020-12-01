import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import Destination from './Destination';
import DetailBooking from './DetailBooking';

const reducers = combineReducers({
  Auth,
  Profiles,
  Destination,
  DetailBooking,
});

export default reducers;
