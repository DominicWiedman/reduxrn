import {FETCHED_DATA, FAILED_DATA} from './types'

export const getData = (page) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({type: FETCHED_DATA, payload: success});
        return success
    }

    function onError(error) {
        dispatch({type: FAILED_DATA, error})
    }

    try {
        const URL = `https://webapi.500px.com/discovery/fresh?rpp=10&feature=fresh&image_size%5B%5D=3&image_size%5B%5D=36&page=${page}`;
        const res = await fetch(URL, {method: 'GET'});
        const success = await res.json();
        return onSuccess(success);
    } catch (e) {
        return onError(e)
    }
}