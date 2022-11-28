export type Location = {
    id: number,
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    url: string
}

export type weather = {
    location: {
        name: string,
        region: string,
        country: string,
        lat: number,
        lon: number,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: number,
        last_updated:string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    }
}

export interface Weather {
    loading: boolean;
    locations: Location[]
    weather: weather;
    locationFetch : (query: string) => void;
    weatherFetch : (query: string) => void;
}

export interface Store extends 
    Weather
    {} // you can extend the types used in store here and use it in create store funtion
