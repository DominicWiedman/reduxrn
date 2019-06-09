import {FETCHED_DATA, FAILED_DATA} from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCHED_DATA:
            return [...state, ...action.payload.photos];
        case FAILED_DATA:
            return [...state];
        default:
            return state;
    }
}