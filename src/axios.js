import axios from "axios";


/**base requests to de movies database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;