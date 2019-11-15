import { SUC_LOG, FAIL_LOG } from './type'
import axios from 'axios'

export const login = (payload) => {
    return (dispatch) => {
        console.log("REDUX<><><!!");
        axios({
            method: 'post',
            url : "http://34.87.107.88/user/login",
            data : payload
        })
        .then(({data}) => {
            dispatch(successLogin(data.token))
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