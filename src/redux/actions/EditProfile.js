import axios from '../../helpers/axios';
import { ToastAndroid } from 'react-native';

const handleError = (error) => {
    console.log(error);
    if (error.response) {
        return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
    }
    return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};

const EditProfiles = (data, callback) => (dispatch) => {
    axios
        .patch('/users/edit', data)
        .then((response) => {
            callback(false, response);
            return dispatch({ type: 'PATCHPROFILE', payload: response.data.data });
        })
        .catch((error) => {
            callback(true, error);
            return handleError(error);
        });
};

export {EditProfiles}