import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes';

export default function Home() {
  return (
    <main className="w-full">
      <Hero/>
      <Recipes/>
    </main>
  );
}
