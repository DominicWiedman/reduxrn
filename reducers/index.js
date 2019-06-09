import {combineReducers} from 'redux'
import data from './fetchDataReducer'
import page from './pageReducer'
import refreshing from './refreshingReducer'

export default combineReducers({
    data,
    page,
    refreshing,
})