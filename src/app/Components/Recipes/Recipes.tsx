"use client"

import React from 'react';
import RecipeList from './RecipeList/RecipeList';

export default function Recipes() {
  return (
    <section className="w-full h-auto p-2 flex flex-col gap-8 items-center md:p-4">
      <div className='self-start'>
        <h1 className="text-lightOrange text-2xl font-bold">RECEITAS ALEATÓRIAS</h1>
        <h6 className="text-oliveBrown text-xs">As receitas são atualizadas conforme a página recarrega.</h6>
      </div>
      <RecipeList/>
    </section>
  )
}
