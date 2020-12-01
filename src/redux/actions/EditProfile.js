import axios from '../../helpers/axios';
import { ToastAndroid } from 'react-native';
import Axios from 'axios'
import {API_URI} from '../../../env.js'

const handleError = (error) => {
    console.log(error);
    if (error.response) {
        return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
    }
    return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

export const editProfile = (data, token) => async dispatch => {
    try{
        const header = { headers: {
                'Authorization': `Bearer ${token}`,
            }}
        const res = await Axios.patch(`${API_URI}/users/edit`,data, header)
    }catch(error){
        dispatch({type : 'FAILED_EDIT_USER', payload : error})
    }
}

