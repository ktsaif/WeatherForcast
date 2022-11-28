
import { StateCreator } from 'zustand'
import { Weather } from "../../interfaces";
import { locationSearch, weatherForcast } from "../../api/services";
import { navigate } from "../../routes/rootNavigation";

export const createWeatherSlice: StateCreator<Weather> = (set) => ({
    loading: false,
    locations:[],
    weather:{
        location: {
            name: "",
            region: "",
            country: "",
            lat: 0,
            lon: 0,
            tz_id: "",
            localtime_epoch: 0,
            localtime: ""
        },
        current: {
            last_updated_epoch: 0,
            last_updated:"",
            temp_c: 0,
            temp_f: 0,
            is_day: 0,
            condition: {
                text: "",
                icon: "",
                code: 0
            },
            wind_mph: 0,
            wind_kph: 0,
            wind_degree: 0,
            wind_dir: "",
            pressure_mb: 0,
            pressure_in: 0,
            precip_mm: 0,
            precip_in: 0,
            humidity: 0,
            cloud: 0,
            feelslike_c: 0,
            feelslike_f: 0,
            vis_km: 0,
            vis_miles: 0,
            uv: 0,
            gust_mph: 0,
            gust_kph: 0
        }
    },
    locationFetch: async (query: string) => {
        set(() => ({ loading: true }));
        try {
            const response = await locationSearch(query)
            if(response.status === 200){
                set(
                    (state) => {return { locations: [state.locations, ...response.data], loading: false }},
                    false,
                    "locationSearch/Success" // a name (type) for action 
                );
            }else{
                set(
                    (state) => {return {loading: false }},
                    false,
                    "locationSearch/failed"
                );
            }
            
        } catch (err) {
            set(() => ({ loading: false }));
        }
    },
    weatherFetch: async (query: string) => {
        set(() => ({ loading: true }));
        try {
            const response = await weatherForcast(query)
            if(response.status === 200){
                set(
                    
                    (state) => {return { weather: response.data, loading: false }},
                    false,
                    "weatherSearch/Success" // a name (type) for action 
                );
            }else{
                set(
                    (state) => {return {loading: false }},
                    false,
                    "weatherSearch/failed"
                );
            }
        } catch (err) {
            set(() => ({ loading: false }));
            console.warn('err');
        }
    }
})

