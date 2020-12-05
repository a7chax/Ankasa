import Axios from 'axios'
import {API_URL} from '../../../env';

export const getChat = (token, from, to) => async (dispatch) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await Axios.get(`${API_URL}/chat/${from}/${to}`, header);
  dispatch({type: 'GET_CHAT', payload: res.data.data});
};


export const getChatReceiver = (token, from ,to) => async (dispatch) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await Axios.get(`${API_URL}/chat/${from}/${to}`, header);
  dispatch({type: 'GET_CHAT_RECEIVER', payload: res.data.data});
}