import axios from 'axios';
import API from "../../utils/API";

interface Recipe {
  id: number;
  title: string;
  image: string,
  spoonacularSourceUrl: string,
}

export async function getRandomRecipes(): Promise<Recipe[]> {
  try {
    const response = await API.get('/random', {
      params: {
        number: 5,
        apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
      },
    });

    const recipes: Recipe[] = response.data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      spoonacularSourceUrl: recipe.spoonacularSourceUrl,
    }));

    return recipes;

  } catch (error) {
    console.error('Erro ', error);
    return [];
  }
}