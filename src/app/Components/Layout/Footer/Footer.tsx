import Logo from "../../Logo/Logo"
import { IoSend } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {

    const inputNewslatter = "w-9/12 h-9 bg-transparent border-solid border-2 border-brightOrange rounded-l-md indent-2 text-sm focus:border-burntSienna focus:outline-none"
    const buttonNewslatter = "w-10 h-9 bg-brightOrange flex flex-row justify-center items-center rounded-r-md hover:bg-burntSienna"
    const titleFooter = "font-bold text-oliveBrown text-sm md:text-base"
    const socialMediaIcons = "hover:text-brightOrange text-2xl"

    return (
        <footer className="bg-ghostWhite p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 md:gap-14 lg:gap-8">
                <div className="flex flex-col gap-6">
                    <a href="#inicio">
                        <Logo />
                    </a>
                    <ul className="flex flex-col gap-3">
                        <p className={titleFooter}>Siga nos</p>
                        <div className="flex gap-8">
                            <li>
                                <a href="">
                                    <FaGithub className={socialMediaIcons}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaLinkedin className={socialMediaIcons}/>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="lg:col-span-2 flex gap-4 flex-col">
                    <h3 className={titleFooter}>Explore</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Inicio</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Receitas</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-2 flex gap-4 flex-col">
                    <h3 className={titleFooter}>Informações</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Sobre o projeto</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-brightOrange hover:font-bold text-base">Contate-nos</a>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-3 max-w-2xl">
                    <p className="text-base">Receba as últimas receitas postadas por nós.</p>
                    <form className="flex items-center h-12 rounded overflow-hidden">
                        <input type="email" placeholder="Digite seu email aqui"
                            className={inputNewslatter} />
                        <button type="button"
                            className={buttonNewslatter}>
                            <IoSend className="text-ghostWhite" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8">
                <p className='text-base'>© 2024
                    <a href="#" target='_blank' className="text-lightOrange hover:underline mx-1">Hunger and Eat</a>
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
