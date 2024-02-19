import Logo from "../../Logo/Logo"
import { IoIosSearch } from "react-icons/io";

export default function Header() {

  const navLink = "text-black text-sm font-medium hover:text-brightOrange";
  const inputSearch = "bg-transparent border-solid border-2 border-brightOrange w-40 h-8 rounded-l-lg indent-2 text-xs focus:outline-none focus:border-burntSienna md:w-52 lg:w-80"
  const buttonSearch = "bg-brightOrange rounded-r-lg flex justify-center items-center w-10 hover:bg-burntSienna"

  return (
    <header className="w-full h-auto bg-ghostWhite flex p-2 justify-around items-center lg:p-4 lg:gap-24">
      <Logo />

      <nav className="hidden md:flex gap-6">
        <a href="inicio" className={navLink}>Inicio</a>
        <a href="receitas" className={navLink}>Receitas</a>
      </nav>

      <div className="flex">
        <input type="search" placeholder="Procure as receitas, ingredientes ou produtos..." className={inputSearch}/>
        <button className={buttonSearch}>
          <IoIosSearch className="text-white"/>
        </button>
      </div>
    </header>
  )
}
