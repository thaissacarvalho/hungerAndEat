'use client'

import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import API from '@/utils/API';
import Image from 'next/image';

interface RecipeList {
  id: number,
  title: string,
  image: string,
  sourceUrl: string,
}

export default function SearchBar() {

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<RecipeList[]>([]);

  const inputSearch = "bg-transparent border-solid border-2 border-brightOrange w-40 h-8 rounded-l-lg indent-2 text-xs focus:outline-none focus:border-burntSienna md:w-52 lg:w-72";
  const buttonSearch = "bg-brightOrange rounded-r-lg flex justify-center items-center w-10 hover:bg-burntSienna";

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    try {
      const response = await API.get('/complexSearch', {
        params: {
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
          query: value,
          number: 3
        }
      });
      setSuggestions(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar sugestões:', error);
    }
  };

  return (
    <div className='relative'>
      <form className="flex">
        <input type="search"
          placeholder="Procure as receitas, ingredientes ou produtos..."
          className={inputSearch}
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit" className={buttonSearch}>
          <IoIosSearch className="text-white" />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className='absolute z-50 flex flex-col gap-2 bg-white w-full'>
          {suggestions.map((recipe) => (
            <li key={recipe.id} className='border-black border-b-2 border-solid flex justify-around gap-4 p-2'>
              <div className='flex flex-col gap-8'>
                <h3 className='text-sm text-lightOrange'>{recipe.title}</h3>
                <a href={recipe.sourceUrl} target='_blank' rel='nonpeferrer' className='text-xs hover:text-burntSienna hover:font-medium cursor-pointer'>Ver receita</a>
              </div>
              <Image src={recipe.image} alt={recipe.title} width={70} height={70} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
