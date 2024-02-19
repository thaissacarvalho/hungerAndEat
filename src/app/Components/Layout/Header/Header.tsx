import Logo from "../../Logo/Logo"
import { IoIosSearch } from "react-icons/io";


export default function Header() {

  const navLink = "text-black text-sm font-medium hover:text-brightOrange";
  const inputSearch = "bg-transparent border-solid border-2 border-brightOrange rounded-lg w-40 h-8 font-bold indent-2 lg:indent-7 text-xs hover:border-gray-500 focus:outline-none focus:border-blue-500 md:w-52 lg:w-80"

  return (
    <header className="bg-ghostWhite flex p-2 justify-around items-center lg:p-4 lg:gap-24 ">
      <Logo />

      <nav className="hidden md:flex gap-6">
        <a href="inicio" className={navLink}>Inicio</a>
        <a href="receitas" className={navLink}>Receitas</a>
      </nav>

      <form action="" className="">
        <input type="search" name="" id="" placeholder="Qual receita você está procurando?" className={inputSearch} />
        <svg className="hidden lg:block absolute right-[395px] top-[24px] h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </form>
    </header>
  )
}
