import { BUY_SOME } from "../action-types"

const initialState = {
    numOfProd: 10,
}

const buySomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_SOME: return {
            ...state,
            numOfProd: state.numOfProd - 1,
        }
        default: return state
    }
}

export default buySomeReducer;