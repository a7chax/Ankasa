import axios from '../../helpers/axios';
import {ToastAndroid} from 'react-native';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const getDestination = (data, callback) => (dispatch) => {
  let {offset, limit} = data;
  offset = offset ? offset : 1;
  axios
    .get(`/public/destination?limit=${limit}&offset=${offset}`)
    .then((response) => {
      callback(false, response); // isError, response
      return dispatch({type: 'SETDESTINATION', payload: response.data.data});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

export {getDestination};
