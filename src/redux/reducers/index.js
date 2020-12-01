import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import Booking from './Booking'
import Destination from './Destination';
import DetailBooking from './DetailBooking';


const reducers = combineReducers({
  Auth,
  Profiles,
  Booking,
  Destination,
  DetailBooking,
});

export default reducers;
