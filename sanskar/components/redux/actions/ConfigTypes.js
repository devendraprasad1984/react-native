export const SET_CONFIG = 'SET_CONFIG';
export const GET_CONFIG = 'GET_CONFIG';
export const GET_APP_COLOR='GET_APP_COLOR';

export const getConfig = () => {
    return {
        type: GET_CONFIG
    }
}

export const setConfig = (config) => {
    return {
        type: SET_CONFIG
        , data: config
    }
}
export const getAppColor = () => {
    return {
        type: GET_APP_COLOR
    }
}

export const fetchError=()=> {
    return {
        type: "FETCH_ERROR"
    }
}
