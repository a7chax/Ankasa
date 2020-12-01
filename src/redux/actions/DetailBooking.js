import {ToastAndroid} from 'react-native';
import {API_URI} from '../../../env';
import AxiosBase from 'axios';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const getDetailBooking = (id, token, callback) => (dispatch) => {
  console.log(id, token);
  console.log('id, token');
  AxiosBase.get(`${API_URI}/users/transactions/1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.data.data);
      console.log('response');
      callback(false, response); // isError, response
      return dispatch({type: 'GETDETAILBOOKING', payload: response.data.data});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

export {getDetailBooking};
