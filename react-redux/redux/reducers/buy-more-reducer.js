import { BUY_MORE } from "../action-types"

const initialState = {
    numOfMore: 5,
}

const buyMoreReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_MORE: return {
            ...state,
            numOfMore: state.numOfMore - action.payload,
        }
        default: return state
    }
}

export default buyMoreReducer;