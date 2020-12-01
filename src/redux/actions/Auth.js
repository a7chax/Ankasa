import axios from '../../helpers/axios';
import {ToastAndroid} from 'react-native';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const AuthLogin = (data, callback) => (dispatch) => {
  axios
    .post('/auth/login', data)
    .then((response) => {
      callback(false, response); // isError, response
      return dispatch({type: 'AUTHLOGIN', payload: response.data.data.token});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

const AuthRegister = (data, callback) => {
  axios
    .post('/auth/register', data)
    .then((response) => {
      callback(false, response); // isError, response
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

export {AuthLogin, AuthRegister};
