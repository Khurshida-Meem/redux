import * as actionTypes from '../action-types';


export const buyMore = (number = 1) => {
    return {
        type: actionTypes.BUY_MORE,
        payload: number,
    }
}
