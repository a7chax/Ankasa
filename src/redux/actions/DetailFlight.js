import axios from '../../helpers/axios';
import {ToastAndroid} from 'react-native';
import Axios from 'axios';
import {API_URI} from '../../../env.js';

const handleError = (error) => {
  console.log(error);
  if (error.response) {
    return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
  }
  return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const GetDetailFlight = (id = 5, callback) => (dispatch) => {
  axios
    .get(`/public/classes/${id}`)
    .then((res) => {
      callback(false, res);
      console.log(1);
      return dispatch({
        type: 'GET_DETAIL_FLIGHT',
        payload: res.data.data,
      });
    })
    .catch((err) => {
      callback(true, err);
      return handleError(err);
    });
};

// export const postTransfer = (data, token, callback) => async (dispatch) => {
//   try {
//     const header = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const res = await Axios.post(`${API_URI}/users/transaction`, data, header);
//     callback(res);
//   } catch (error) {
//     dispatch({type: 'FAILED_ADD_FLIGHT', payload: error});
//   }
// };

const postTransfer = (data, token, callback) => {
  axios
    .post('/users/transaction', data, {
      headers: {
        authorization: 'Bearer ' + token,
      },
    })
    .then((response) => {
      callback(false, response); // isError, response
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

export {GetDetailFlight, postTransfer};
