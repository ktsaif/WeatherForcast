import {request} from "./index";

const apiKey = '4882c5c745ed412db4c102806222811';

export const locationSearch = async (query:string) => request.post(`/search.json?key=${apiKey}&q=${query}`)

export const weatherForcast = async (query:string) => request.get(`/current.json?key=${apiKey}&q=${query}`)
