import { SUC_LOG, FAIL_LOG, LOGOUT } from './type'
import axios from 'axios'


export const login = (payload) => {
    return (dispatch) => {
        console.log("horeeeeeeee");
        axios({
            method: 'post',
            url : "http://34.87.107.88/user/login",
            data : payload
        })
        .then(async ({data}) => {
            console.log(data);
            const {image, username, history, _id} = data
            console.log(username, '<<<<<<<<<');
            let {penjualanBakso} = await axios({
                method: 'get',
                url: 'http://34.87.107.88/transaction',
                headers: {
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNlNGJjZTg2MTgzNjExNjVhMWNlODYiLCJ1c2VybmFtZSI6ImFkbWluQmFzbzEiLCJpc093bmVyIjp0cnVlLCJsYXRpdHVkZSI6MCwibG9uZ2l0dWRlIjowLCJoaXN0b3J5IjpbXSwiaW1hZ2UiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYm9zYmFrc28vMTU3MzgwMDkwOTcxM2FkbWluMDEuanBnIiwiaWF0IjoxNTczODk0NzIyfQ.Kz04w8nrKb4Q8yBOkLyObp48rIhPtNSKAQki-kl3pTU"
                }
            })
            let sold = 0
            penjualanBakso.forEach(el => {
               if( el.tukangBaksoId === _id ){
                   sold++
                }
            })
            dispatch(successLogin({
                image, username, history, token: data.token, _id, bowl: sold
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