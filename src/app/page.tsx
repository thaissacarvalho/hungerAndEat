import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';

export default function Home() {
  return (
    <main className="w-full">
      <Hero/>
      <Recipes/>
      <AboutUs/>
      <Contact/>
    </main>
  );
}
