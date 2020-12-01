import {combineReducers} from 'redux';
import Auth from './Auth';
import Profiles from './Profiles';
import DetailFlight from './DetailFlight';
import Destination from './Destination';
import DetailBooking from './DetailBooking';
import EditProfile from './EditProfile';

const reducers = combineReducers({
  Auth,
  Profiles,
  DetailFlight,
  Destination,
  DetailBooking,
  EditProfile,
});

export default reducers;
