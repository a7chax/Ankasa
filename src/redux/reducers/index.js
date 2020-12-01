import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import Booking from './Booking'
import Destination from './Destination';
import DetailBooking from './DetailBooking';
import MyBooking from './MyBooking';


const reducers = combineReducers({
  Auth,
  Profiles,
  Booking,
  Destination,
  DetailBooking,
  MyBooking
});

export default reducers;
