import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});
