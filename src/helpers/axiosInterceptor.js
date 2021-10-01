import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config);
  const jwt = window.localStorage.getItem('jwt');

  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
}, (error) =>
// Do something with request error
  Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) =>
// Do something with response data
  response,
(error) =>
// Do something with response error
  Promise.reject(error));

export default axios;
