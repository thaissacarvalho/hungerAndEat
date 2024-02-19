import axios, { AxiosResponse } from 'axios';

const apiKey = 

const baseURL = "https://api.spoonacular.com/recipes"

interface Recipe {
    id: number,
    title: string,
    image: string,
}