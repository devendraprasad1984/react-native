import getFromAPI from "./getFromAPI";
import {Config} from "./Config";

export default function getConfigValues(callback, key) {
    const filterResponse = (data) => {
        if (key === '' || key===undefined) {
            callback(data);
        } else {
            let found = data.filter(x => x.key === key);
            callback(found);
        }
    }
    getFromAPI(Config.configEndPoint, (data) => {
        filterResponse(data);
    })
}

