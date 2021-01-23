import {fetchError, setConfig} from "../redux/actions/ConfigTypes";
import {Config} from "./Config";
import fetchPromise from "./fetchPromise";

const filterResponse = (data, cb) => {
    let xconf = {}
    for (let x in data) {
        let ob = data[x]
        xconf[ob.key] = ob.value
    }
    cb(xconf)
}
export default function getConfigWithRedux() {
    return (dispatch) => fetchPromise(Config.configEndPoint).then(([response, json]) => {
        if (response.status === 200) {
            filterResponse(json, (data) => {
                dispatch(setConfig(data));
            })
        } else {
            dispatch(fetchError());
        }
    });
}
