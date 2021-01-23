import AsyncStorage from '@react-native-community/async-storage';
import {Enum} from "./Config";

export const Local = {
    set: (data, cb) => AsyncStorage.setItem(Enum.asyncKeys.mainkey, JSON.stringify(data)).then(val => cb(val))
    , get: (k, cb) => {
        try {
            AsyncStorage.getItem(k).then(val => {
                if (val !== null) cb(JSON.parse(val)); else cb(false);
            })
        } catch (err) {
            cb(false);
        }
    }
    , remove: async (k, cb) => {
        try {
            await AsyncStorage.removeItem(k);
            cb(true);
        } catch (err) {
            cb(false);
        }
    }
}

export const getFromLocalMain = (cb) => {
    Local.get(Enum.asyncKeys.mainkey, val => cb(val));
}
export const getFromLocalByKey = (key, cb) => {
    Local.get(key, val => cb(val));
}

