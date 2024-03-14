import Logo from "../../Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {

  const navLink = "text-black text-sm font-medium hover:text-brightOrange";

  return (
    <header className="w-full h-auto flex p-2 justify-between items-center lg:p-4 lg:gap-24">
      <Logo />

      <nav className="hidden md:flex gap-6">
        <a href="#" className={navLink}>Inicio</a>
        <a href="#receitas" className={navLink}>Receitas</a>
        <a href="#sobrenos" className={navLink}>Sobre nós</a>
        <a href="#contato" className={navLink}>Contato</a>
      </nav>
      
      <SearchBar/>
    </header>
  )
}
