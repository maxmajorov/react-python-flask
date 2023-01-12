import axios from 'axios';
import { API_SERVER } from '../const';

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: API_SERVER,
    withCredentials: true,
});
