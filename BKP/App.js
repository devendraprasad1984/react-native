import React from 'react'
import MainNav from './components/MainNav'
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import configReducer from "./components/redux/reducers/ConfigReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    config: configReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default function App() {
    return <Provider store={store}>
        <MainNav />
    </Provider>
}
