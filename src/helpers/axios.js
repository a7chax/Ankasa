import axios from 'axios';
import {API_URI} from '../../env.js';

export default axios.create({baseURL: API_URI});
