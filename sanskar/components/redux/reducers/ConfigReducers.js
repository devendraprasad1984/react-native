import {GET_APP_COLOR, GET_CONFIG, SET_APP_COLOR, SET_CONFIG} from '../actions/ConfigTypes';
import {configFilterByKey, Enum} from "../../common/Config";

const initConfigState = {
    configObject: []
    , appColor: 'navy'
}

function configReducer(state = initConfigState, action) {
    switch (action.type) {
        case GET_CONFIG || GET_APP_COLOR:
            return state
        case SET_CONFIG:
            let appColor = configFilterByKey(action.data, Enum.configKeys.appColor);
            return {
                ...state,
                configObject: action.data,
                appColor: appColor.value
            }
        default:
            return state;
    }
}

export default configReducer;
