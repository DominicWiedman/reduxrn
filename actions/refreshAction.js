import {ON_REFRESH, OFF_REFRESH} from './types'

export const refreshOn = () => {
    return {
        type: ON_REFRESH
    }
};

export const refreshOff = ()=> {
    return {
        type: OFF_REFRESH
    }
}