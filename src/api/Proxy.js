import axios from 'axios';


//  create an instance of axios
export default axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});