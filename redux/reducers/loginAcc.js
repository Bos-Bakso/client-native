import { SUC_LOG, FAIL_LOG, LOGOUT, ADD_BOWL } from '../actions/type'

const initialState = {
    isLoading: true,
    isLogin: false,
    message: null,
    token: null,
    image : null,
    username: null,
    history: null,
    _id : null,
    bowl: null,
    role: null
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
            history: action.payload.history,
            _id: action.payload._id,
            bowl: action.payload.bowl,
            role: action.payload.role
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
                history: null,
                _id: null,
                bowl: null,
                role: null
            }
        case ADD_BOWL :
            return {
                ...state,
                bowl: state.bowl +1
            }
        default:
            return state
    }
}