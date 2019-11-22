import axios from 'axios';

const config = () => ({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('jwt')
  }
});

export default (url, data) => axios.post(process.env.REACT_APP_API_URL + url, data, config());
