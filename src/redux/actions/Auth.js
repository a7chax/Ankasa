import Axios from 'axios'
import {API_URI} from '../../../env.js'


export const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

export const AuthRegisterRequest = () => {
    return {
        type : 'REGISTER_REQUEST'
    }
}

export const AuthRegisterSuccess = (data) => {
    return {
        type : 'REGISTER_SUCCESS',
        payload : data
    }
}

export const AuthRegisterFailed = (error) => {
    return {
        type : 'REGISTER_FAILED',
        payload : error
    }
}

export const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}

export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}