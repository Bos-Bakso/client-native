import {GET_SERVICE, DEL_SERVICE} from '../actions/type'

const initState = {
    tasks :  null,
    isLoading: true,
    message : null
}

export default function serviceTask(state = initState,  action){
    switch (action.type) {
        case GET_SERVICE:
            return {
                ...state,
                tasks : action.payload.tasks,
                isLoading : false,
                message:  null
            }
        case DEL_SERVICE:
            return {
                ...state, 
                tasks : action.payload.tasks,
                isLoading : false,
                message:  null
            }
        default:
           return {
               ...state
           }
    }
}