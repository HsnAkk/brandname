import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from '../actions/types';

const initialState = {
    loading: false,
    cards: [],
    error: ''
}


export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUEST :
            return {
                ...state,
                loading: true
            }
        case DATA_SUCCESS :
            return {
                loading: false,
                cards: action.payload,
                error: ''
            }
        case DATA_FAIL :
            return {
                loading: false,
                cards: [],
                error: action.payload
            }
        default:
            return state;
    }
}