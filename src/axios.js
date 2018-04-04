import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://floating-tundra-28142.herokuapp.com'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;