import { TRANS } from './type'
import axios from 'axios'


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
            console.log("RESDUUUUUUIIIIIIXXxx");
            console.log(data);
        })
        .catch(err => {
            console.log(err, '?????');
        })
    }
}

export const successAdd = (payload) => {
    console.log(payload, 'disiinii donggggg');
    return ({
        type: TRANS, payload: payload
    })
}

// export const logoutMe = () => {
//     return({
//         type: LOGOUT, payload: null
//     })
// }