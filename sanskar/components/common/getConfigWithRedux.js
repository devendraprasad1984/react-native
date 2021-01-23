import {fetchError, getConfig, setAppColor, setConfig, startPullConfig} from "../redux/actions/ConfigTypes";
import {Config} from "./Config";
import fetchPromise from "./fetchPromise";

export default function getConfigWithRedux(callback) {
    return (dispatch) => {
        // dispatch(startPullConfig());
        return fetchPromise(Config.configEndPoint).then(([response, json]) => {
            // console.log('pulling from api',response.status, json);
            if (response.status === 200) {
                dispatch(setConfig(json));
                callback('completed',json);
            } else {
                dispatch(fetchError());
                callback('error');
            }
        });
    }
}
