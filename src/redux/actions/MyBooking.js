import axios from '../../helpers/axios';
import AxiosBase from 'axios';
import {ToastAndroid} from 'react-native';
import {API_URI, API_URL} from '../../../env';
import {Header} from 'react-native/Libraries/NewAppScreen';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const GetMyBooking = (token, callback) => (dispatch) => {
  AxiosBase.get(`${API_URI}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      callback(false, response); // isError, response
      return dispatch({type: 'GETMYBOOKING', payload: response.data.data});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};



export {GetMyBooking};
