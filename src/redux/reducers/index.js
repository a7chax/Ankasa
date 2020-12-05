import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import DetailFlight from './DetailFlight';
import Destination from './Destination';
import DetailBooking from './DetailBooking';
import EditProfile from './EditProfile';
import Booking from './Booking'
import MyBooking from './MyBooking';
import Chat from './Chat';

const reducers = combineReducers({
  Auth,
  Profiles,
  DetailFlight,
  Destination,
  DetailBooking,
  EditProfile,
  Booking,
  MyBooking,
  Chat
});

export default reducers;
