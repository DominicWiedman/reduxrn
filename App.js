import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers'
import {Provider} from "react-redux";
import Main from './components/main'


export const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}