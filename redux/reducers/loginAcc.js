import { SUC_LOG, FAIL_LOG } from '../actions/type'

const initialState = {
    isLoading: true,
    isLogin: false,
    message: null,
    token: null,
}


export default function login(state = initialState, action) {
    switch (action.type) {
        case SUC_LOG : 
        console.log(action.payload , '<<<<<<<<<');
        return {
            ...state,
            token: action.payload,
            isLogin: true,
            isLoading: false
        }
        default:
            return state
    }
}