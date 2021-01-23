import {GET_APP_COLOR, GET_CONFIG, SET_CONFIG} from '../actions/ConfigTypes';
import {Enum} from "../../common/Config";

const initConfigState = {
    config: []
    , color: '#5361cd'
}

function configReducer(state = initConfigState, action) {
    switch (action.type) {
        case GET_CONFIG || GET_APP_COLOR:
            return state
        case SET_CONFIG:
            let color = action.data[Enum.configKeys.appColor];
            return {
                ...state,
                config: action.data,
                color: color
            }
        default:
            return state;
    }
}

export default configReducer;
