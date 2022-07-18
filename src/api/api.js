import axios from 'axios';


//  create an instance of axios
export default axios.create({
    baseURL: ('http://51.15.206.248:8000')
});