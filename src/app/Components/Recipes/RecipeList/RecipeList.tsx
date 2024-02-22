import React, { useEffect, useState } from 'react';
import { getRandomRecipes, Recipe } from '../../../services/getRandomServices';
import Image from 'next/image';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const randomRecipes = await getRandomRecipes();
      setRecipes(randomRecipes);
    }
    fetchRecipes();
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Image src={recipe.image} alt={recipe.title} width={250} height={250} />
            <h1>{recipe.title}</h1>
            <a href={recipe.spoonacularSourceUrl}>Ver receita completa.</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
