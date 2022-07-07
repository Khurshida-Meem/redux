import axios from 'axios';


const API = axios.create({
   baseURL: `https://your-highway-travel.herokuapp.com/`
});


export const getPlacesDetails = (instanceName) => {
    API.post("places", { instance: instanceName });
}