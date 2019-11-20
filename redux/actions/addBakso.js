import { ADD_BOWL, RANK } from './type'
import axios from 'axios'
import db from '../../config/firebase'


export const addBakso = (payload) => {
    return (dispatch) => {
        for (let i=0; i<payload.num; i++){
            axios({
                method: 'post',
                url : "http://35.185.180.235/transaction/",
                data : {
                    latitude : payload.latitude,
                    longitude : payload.longitude,
                },
                headers : {
                    token: payload.token
                }
            })
            .then(({data}) => {
                console.log(i);
            })
            .catch(err => {
                console.log(err, '?????');
            })

        }
        console.log("hereeeeee");
        dispatch(successAdd({
            latitude : payload.latitude,
            longitude : payload.longitude
        }))
        let random = Math.floor(Math.random()* 1000000000000000000)
        db.collection('triggerRank').doc('basoRank').set({count: random})
    }
}

export const successAdd = (payload) => {
    return ({
        type: ADD_BOWL, payload: payload
    })
}

// export const triggerRank = () => {

//     // socket.on('test', (data) => { 
//     //     console.log(data , 'SOCCKKKKETTT');
//     //     return ({
//     //         type : RANK, payload: data.rank
//     //     })
//     //     // setData(data.rank)
   
//     //   })
// }