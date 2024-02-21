import { FaBowlFood, FaBookOpen } from "react-icons/fa6";

export default function Start() {

    const divIconStart = "rounded-full bg-lightOrange w-8 h-8 md:w-12 md:w-12 lg:w-16 lg:h-16 flex justify-center items-center"
    const iconStart = "text-md md:text-lg lg:text-2xl text-ghostWhite"
    const titleStart = "text-lightOrange text-base md:text-xl font-bold"
    const subtitleStart = "font-bold text-xs"

    return (
        <section className="w-full bg-cover bg-center h-full p-2 flex flex-col gap-8 lg:p-4">
            <h1 className="text-2xl lg:text-4xl font-bold w-64 lg:w-80">ENCONTRE A <span className="text-brightOrange">MELHOR RECEITA</span> PARA A SUA FOME!</h1>

            <button className="w-36 h-10 rounded-full text-white text-sm bg-lightOrange hover:bg-brightOrange hover:font-bold">
                <a href="">Receitas</a>
            </button>

            <div className="flex gap-16">
                <div>
                    <div className={divIconStart}>
                        <FaBookOpen className={iconStart}/>
                    </div>
                    <h1 className={titleStart}>Mais 100+</h1>
                    <h5 className={subtitleStart}>Várias receitas ao redor do mundo</h5>
                </div>

                <div>
                    <div className={divIconStart}>
                        <FaBowlFood className={iconStart}/>
                    </div>
                    <h1 className={titleStart}>Comidas típicas</h1>
                    <h5 className={subtitleStart}>Melhore as suas habilidades culinárias</h5>
                </div>
            </div>
        </section>
    )
}
