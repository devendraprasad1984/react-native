import getFromAPI from "./getFromAPI";
import {Config} from "./Config";

export default function getConfigValues(callback,key){
    getFromAPI(Config.configEndPoint,(data)=>{
        if(key===''){
            callback(data);
        }else{
            let found=data.filter(x=>x.key===key);
            callback(found);
        }
    })
}
