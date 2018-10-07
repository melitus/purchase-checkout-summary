import * as actionTypes from '../actions/types';

const initialState = {
    collapse: false,
    value: ""
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PROMO_CODE:
        return{
            ...state,
           value: action.payload
        };
        default:
        return state;
    }
}

export default reducer;