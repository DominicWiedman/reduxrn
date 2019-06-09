import {NEW_PAGE, FIRST_PAGE} from './types'

export const newPage = () => {
    return {
        type: NEW_PAGE
    }
};

export const firstPage = ()=> {
    return {
        type: FIRST_PAGE
    }
}