import axios from '../../helpers/axios';
import AxiosBase from 'axios';
import {ToastAndroid} from 'react-native';
import {API_URL} from '../../../env';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const GetProfile = (id, callback) => (dispatch) => {
  AxiosBase.get(`${API_URL}/profiles/${id}`)
    .then((response) => {
      callback(false, response); // isError, response
      return dispatch({type: 'GETPROFILES', payload: response.data.data});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

// const AuthRegister = (data, callback) => {
//   axios
//     .post('/auth/register', data)
//     .then((response) => {
//       callback(false, response); // isError, response
//     })
//     .catch((error) => {
//       callback(true, error); // isError, response
//       return handleError(error);
//     });
// };

export {GetProfile};
