import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9090/commondata',
  headers: {
    'Content-Type': 'application/json',
  },
});
