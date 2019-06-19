import axios from 'axios';

export default axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:5002'
});

console.log(process.env.API_BASE_URL);