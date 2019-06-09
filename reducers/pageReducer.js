import {NEW_PAGE, FIRST_PAGE} from '../actions/types'

export default (state= 1, action) => {
    switch (action.type) {
        case NEW_PAGE:
            return state + 1;
        case FIRST_PAGE:
            return 10;
        default:
            return state;

    }
}