import Logo from "../../Logo/Logo"

export default function Footer() {

    const inputNewslatter = "bg-transparent border-solid border-2 border-brightOrange rounded-md w-40 h-8 indent-3 text-sm font-bold hover:border-gray-500 focus:outline-none focus:border-blue-500 md:w-52 lg:w-80"

    return (
        <footer className="bg-ghostWhite flex">
            <Logo/>

            <div>
                <p>Receba nossas noticias.</p>

                <form action="">
                    <label htmlFor=""></label>
                    <input type="email" name="" id="" placeholder="Digite o seu email" className={inputNewslatter}/>
                    <button>Enviar</button>
                </form>
            </div>

            <div>
                <div>
                    <h2>Eat and Drink</h2>
                    <ul>
                        <p>Contate-nos:</p>
                        <li>(21) 3131-3131</li>
                        <li>eatanddrink@ficticio.com</li>
                    </ul>
                </div>

                <div>
                    <p>Informação</p>
                    <ul>
                        <li>Sobre nós</li>
                        <li>Receitas</li>
                    </ul>
                </div>


              <div>
                <p>Redes Sociais</p>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
              </div>
            </div>

            <div>Desenvolvido por Thaissa Carvalho</div>
        </footer>
    )
}
