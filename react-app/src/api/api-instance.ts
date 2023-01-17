import axios from 'axios';
import { API_SERVER } from '../const';

export const instance = axios.create({
    baseURL: API_SERVER,
    // withCredentials: false,
});
