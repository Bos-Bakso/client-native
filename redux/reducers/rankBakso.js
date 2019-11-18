import {RANK} from '../actions/type'

const initialState = {
    isLoading : true,
    ranks : null,
    totalBowl: null,
    totalMoney : null,
    myRank: null
}

export default function rankBakso(state = initialState, action){
    switch (action.type) {
        case RANK:
            return {
                ...state,
                isLoading: false,
                ranks : action.payload.rank,
                totalBowl: action.payload.totalBowl,
                totalMoney : action.payload.totalMoney,
                myRank: action.payload.myRank
            }
    
        default:
            return state
    }
}