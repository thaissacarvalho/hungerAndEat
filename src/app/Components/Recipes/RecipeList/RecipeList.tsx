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
      <ul className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:flex-wrap">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="w-[260px] h-auto bg-taupeGray p-2 flex flex-col gap-2 lg:last:self-start">
            <Image src={recipe.image} alt={recipe.title} width={250} height={250} className=""/>
            <h1 className='self-start text-oliveBrown font-bold text-base'>{recipe.title}</h1>
            <a href={recipe.spoonacularSourceUrl} target='_blank' rel='nonpeferrer' className='text-burntSienna font-bold text-md self-end hover:text-lightOrange'>SAIBA MAIS</a>
          </li>
        ))}
      </ul>
  );
};

export default RecipeList;
