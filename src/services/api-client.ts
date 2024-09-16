import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e82882148e944102b94abd0a96ee1e24'
    }
})

