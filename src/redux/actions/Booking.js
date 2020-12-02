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

export const GetCity = (callback) => async (dispatch) => {
  try {
    const res = await Axios.get(`${API_URI}/public/city`);
    dispatch({type: 'GET_CITY', payload: res.data.data});
    callback(res.data.data);
  } catch (error) {
    console.log(error);
    callback(error.response.data);
  }
};

export const getSearchFlight = (type, id, callback) => async (dispatch) => {
  const res = await Axios.get(
    `${API_URI}/public/classes?type=${type}&id_destination=${id}`,
  );
  // console.log('data transfer redux',res.data)
  dispatch({type: 'GET_FLIGHT_RESULT', payload: res.data.data});
  callback(res);
};
