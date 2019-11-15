// import { SUC_PROFILE, FAIL_PROFILE } from './type'
// import axios from 'axios'

// export const login = (payload) => {
//     return (dispatch) => {
//         axios({
//             method: 'get',
//             url : "http://34.87.107.88/user/",
//             data : {
//                 token : payload
//             }
//         })
//         .then(({data}) => {
//             const {latitude, longitude, username, image, }
//             dispatch(successLogin(data.token))
//         })
//         .catch(err => {
//             console.log(err, '?????');
//         })
//     }
// }

// export const successLogin = (payload) => {
//     console.log(payload, 'disiinii donggggg');
//     return ({
//         type: SUC_LOG, payload: payload
//     })
// }