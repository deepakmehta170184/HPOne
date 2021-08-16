import axios from "axios";
const API_KEY = "975f1adb";
const API_ENDPOINT = "http://www.omdbapi.com/";

const Api = {
  get: (data) => axios.post(`${API_ENDPOINT}?apikey=${API_KEY}&s=${data}`),
};

export default Api;
