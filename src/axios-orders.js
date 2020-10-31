import axios from 'axios';

const instance  = axios.create({
    baseURL: 'https://react-my-burger-f6714.firebaseio.com/'
})

export default instance;
