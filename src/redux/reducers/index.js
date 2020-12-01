import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import Booking from './Booking'

const reducers = combineReducers({
  Auth,
  Profiles,
  Booking
});

export default reducers;
