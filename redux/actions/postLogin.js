import { SUC_LOG, FAIL_LOG, LOGOUT } from './type'
import axios from 'axios'


export const login = (payload) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url : "http://34.87.107.88/user/login",
            data : payload
        })
        .then(({data}) => {
            const {image, username, history} = data
            dispatch(successLogin({
                image, username, history, token: data.token
            }))
        })
        .catch(err => {
            console.log(err, '?????');
        })
    }
}

export const successLogin = (payload) => {
    console.log(payload, 'disiinii donggggg');
    return ({
        type: SUC_LOG, payload: payload
    })
}

export const logoutMe = () => {
    return({
        type: LOGOUT, payload: null
    })
}