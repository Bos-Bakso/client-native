import {RANK} from './type'
import axios from 'axios'

export const getRank =(_id) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://35.185.180.235/rank'
        }).then(({data})=> {
            console.log(data.rank, '//////////////////////////');
            let totalBowl = 0
            let totalMoney = ""
            let myRank = 0
            let datas = data.rank.rank
            datas.forEach((el, i) => {
                if (el._id === _id) {
                  totalBowl = el.totalBakso
                  totalMoney = "Rp " + (el.totalBakso * 15000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                  myRank = i + 1
                }
              })

            dispatch(successGetRank({
                rank : data.rank.rank,
                totalBowl: totalBowl,
                totalMoney : totalMoney,
                myRank: myRank
            }))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const successGetRank = (payload) => {
    return {
        type: RANK, payload: payload
    }
}