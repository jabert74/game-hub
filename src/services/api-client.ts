import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '58b480d1917646f98ab9801cb1a15f0c'
    }
});