import {ON_REFRESH, OFF_REFRESH} from '../actions/types'

export default (state = false, action) => {
    switch (action.type) {
        case ON_REFRESH:
            return state = true;
        case OFF_REFRESH:
            return state = false;
        default:
            return state;
    }
}