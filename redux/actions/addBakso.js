import { ADD_BOWL } from './type'
import axios from 'axios'
import SocketIOClient from 'socket.io-client'
const socket = SocketIOClient('http://34.87.107.88');

export const addBakso = (payload) => {
    return (dispatch) => {
        console.log("TRIGGER REDUX ,", payload);
        axios({
            method: 'post',
            url : "http://34.87.107.88/transaction/",
            data : {
                latitude : payload.latitude,
                longitude : payload.longitude,
            },
            headers : {
                token: payload.token
            }
        })
        .then(({data}) => {
            console.log("hereeeeee");
            dispatch(successAdd({
                latitude : payload.latitude,
                longitude : payload.longitude
            }))
            socket.emit('add', 'Hi server')

        })
        .catch(err => {
            console.log(err, '?????');
        })
    }
}

export const successAdd = (payload) => {
    return ({
        type: ADD_BOWL, payload: payload
    })
}

// export const logoutMe = () => {
//     return({
//         type: LOGOUT, payload: null
//     })
// }