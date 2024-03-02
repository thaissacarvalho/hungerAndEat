import Image from 'next/image';
import WomanCooking from '../../img/woman-cooking.jpeg';

export default function AboutUs() {
    return (
        <section className="w-full p-6 flex flex-col gap-3 md:flex-row md:items-center md:p-16 md:gap-8">
            <div className='flex gap-20 flex-col'>
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl md:w-1/2">VOCÊ ESTÁ PROCURANDO UMA <span className="text-brightOrange text-3xl md:text-4xl">RECEITA NOVA?</span></h1>
                    <h2 className="text-sm text-oliveBrown font-medium">Esse é o lugar ideal para você achar o seu novo match de receita.</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className="font-medium">Somos um site que possuimos +1000 comidas mundiais para você fazer com os ingredientes e produtos que preferir.</p>

                    <p className="font-medium">Todos os dias uma receita nova é adicionada para nossos clientes cozinharem sempre alguma coisa diferente.</p>
                </div>
            </div>

            <div className="self-center">
                <Image src="https://smashboard.org/content/images/size/w1304/2022/03/photo5879483377374050613.jpg" alt="A woman cut onion" width={500} height={500} />
            </div>
        </section>
    )
}
