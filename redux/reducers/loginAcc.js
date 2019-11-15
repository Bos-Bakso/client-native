import { SUC_LOG, FAIL_LOG, LOGOUT } from '../actions/type'

const initialState = {
    isLoading: true,
    isLogin: false,
    message: null,
    token: null,
    image : null,
    username: null,
    history: null
}


export default function login(state = initialState, action) {
    switch (action.type) {
        case SUC_LOG : 
        console.log(action.payload , '<<<<<<<<<');
        return {
            ...state,
            token: action.payload.token,
            isLogin: true,
            isLoading: false,
            image : action.payload.image,
            username: action.payload.username,
            history: action.payload.history
        }
        case LOGOUT :
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                message: null,
                token: null,
                image : null,
                username: null,
                history: null
            }
        default:
            return state
    }
}