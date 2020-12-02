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

const GetProfile = (token, callback) => (dispatch) => {
  AxiosBase.get(`${API_URI}/users/detail`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      callback(false, response); // isError, response
      return dispatch({type: 'GETPROFILES', payload: response.data.data});
    })
    .catch((error) => {
      callback(true, error); // isError, response
      return handleError(error);
    });
};

const UploadPhoto = (data, token) => async dispatch => {
  try {
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
    const res = await Axios.patch(`${API_URI}/users/photo`, data, header)
  } catch (error) {
    dispatch({ type: 'UPLOADPHOTO', payload: error })
  }
}


export {GetProfile, UploadPhoto};
