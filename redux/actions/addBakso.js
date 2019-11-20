import { ADD_BOWL, RANK } from './type'
import axios from 'axios'
import db from '../../config/firebase'
console.disableYellowBox = true;

export const addBakso = (payload) => {
    return (dispatch) => {
        let arr = []
        for (let i=0; i<payload.num; i++){
           arr.push (axios({
                method: 'post',
                url : "http://35.185.180.235/transaction/",
                data : {
                    latitude : payload.latitude,
                    longitude : payload.longitude,
                },
                headers : {
                    token: payload.token
                }
            }))
           
        }
        return Promise.all(arr).then((data) => {
            dispatch(successAdd({
                latitude : payload.latitude,
                longitude : payload.longitude,
                num : payload.num
            }))
            let random = Math.floor(Math.random()* 1000000000000000000)
            db.collection('triggerRank').doc('basoRank').set({count: random})
        }

        )
    }
}

export const successAdd = (payload) => {
    return ({
        type: ADD_BOWL, payload: payload
    })
}
