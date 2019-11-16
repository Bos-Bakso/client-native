import { LOC } from './type'
import axios from 'axios'


export const updateLocation = (payload) => {
    return (dispatch) => {
        axios({
            method: 'patch',
            url : "http://34.87.107.88/user/",
            data : {
                latitude : payload.latitude,
                longitude : payload.longitude,
            },
            headers : {
                token: payload.token
            }
        })
        .then(({data}) => {
       
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