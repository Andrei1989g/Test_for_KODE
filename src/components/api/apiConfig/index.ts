import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    headers: {
        'X-Api-Key': '0ffac3b1-152b-46c3-9df9-b8e6a7685699'
    }
})