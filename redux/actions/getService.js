import axios from 'axios'
import {GET_SERVICE, DEL_SERVICE} from './type'

export const service =  (payload) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://35.185.180.235/service',
            headers: {
                token : payload.token
            }
        })
        .then(({data})=> {
            let result = data.service.filter(function(el){
                return !el.solve
            })
            let payloads = {
                tasks : result
            }
            console.log(data);
            dispatch(successGet(payloads))
       
        })
        .catch(err => {
            console.log(err);
        })  
    }
}

export const deleteService = (payload) => {
    return (dispatch) => {
        axios({
            method: 'patch',
            url: `http://35.185.180.235/service/${payload.id}`,
            headers: {
                token : payload.token
            }
        }).then(({data})=> {
           console.log("delete")
           dispatch(service(payload))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const successGet = (payload) => {
    console.log("hereeeee, HEREEEEE");
    return({
        type: GET_SERVICE, payload: payload
    })
}
