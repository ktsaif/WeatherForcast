import create from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createWeatherSlice } from './WeatherSlice/WeatherSlice';

import { Store} from '../interfaces';

const persistOptions = {
    name: 'bound-store',
    getStorage: () =>  AsyncStorage,
    partialize: (state) => ({
       
        //add key name with state if you need to persist it.
    }) 
}

const devtoolOptions = {
    enabled:true, //If you wish to disable devtools (on production for instance). set false
    name:"MyStore",
    anonymousActionType:"Zustand/devtools" //practise to action name with each and every set actions
}

const store = (...a) => ({
    ...createWeatherSlice(...a),
})

export const useBoundStore = create<Store>()(
    devtools(persist(store, persistOptions), devtoolOptions)
)
