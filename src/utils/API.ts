import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
  },
});

export default API; 
