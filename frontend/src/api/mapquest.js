import axios from 'axios';

export default axios.create({
  baseURL: `http://www.mapquestapi.com/geocoding/v1`
});