import {createStore, combineReducers, applyMiddleware} from 'redux';
import configReducer from '../redux/reducers/ConfigReducers';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    appConfig: configReducer
})

const appStore=()=>createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
