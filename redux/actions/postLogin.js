import { SUC_LOG, FAIL_LOG, LOGOUT, EMPTY_INPUT } from './type'
import axios from 'axios'


export const login = (payload) => {
    return (dispatch) => {
        if (payload.username && payload.password) {
            axios({
                method: 'post',
                url: "http://35.185.180.235/user/login",
                data: payload
            })
                .then(async ({ data }) => {
                    const { image, username, history, _id, role } = data
                    let sold = 0
                    if (role === "baso") {
                        let { data } = await axios({
                            method: 'get',
                            url: 'http://35.185.180.235/transaction',
                            headers: {
                                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNlNGJjZTg2MTgzNjExNjVhMWNlODYiLCJ1c2VybmFtZSI6ImFkbWluQmFzbzEiLCJpc093bmVyIjp0cnVlLCJsYXRpdHVkZSI6MCwibG9uZ2l0dWRlIjowLCJoaXN0b3J5IjpbXSwiaW1hZ2UiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYm9zYmFrc28vMTU3MzgwMDkwOTcxM2FkbWluMDEuanBnIiwiaWF0IjoxNTczODk0NzIyfQ.Kz04w8nrKb4Q8yBOkLyObp48rIhPtNSKAQki-kl3pTU"
                            }
                        })
                        const penjualanBakso = data.penjualanBakso
                        penjualanBakso.forEach(el => {
                            if (el.tukangBaksoId === _id) {
                                sold++
                            }
                        })
                    }
                    dispatch(successLogin({
                        image, username, history, token: data.token, _id, bowl: sold, role
                    }))
                })
                .catch(err => {
                    dispatch(failLogin())
                })
        } else if (!payload.password || !payload.username){
            dispatch(emptyInput())
        }
    }
}

export const successLogin = (payload) => {
    return ({
        type: SUC_LOG, payload: payload
    })
}


export const failLogin = () => {
    return ({
        type: FAIL_LOG, payload: null
    })
}

export const emptyInput = () => {
    return ({
        type: EMPTY_INPUT, payload: null
    })
}

export const logoutMe = () => {
    return ({
        type: LOGOUT, payload: null
    })
}