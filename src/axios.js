import axios from "axios"

const instance = axios.create({
    baseURL:"https://tic-tok-back.herokuapp.com/",
});

export default instance