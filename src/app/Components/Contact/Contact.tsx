import React from 'react'

export default function Contact() {
  return (
    <section className='p-8 flex flex-col gap-8 md:p-16 md:flex-row md:flex-wrap'>
        <h1 className='text-2xl font-bold text-brightOrange md:gap-6'>Talvez você tenha alguma sugestão que possa me encaminhar...</h1>
        <h5 className='text-sm text-oliveBrown font-medium'>Não seja timido, pode me mandar mensagem que o responderei o mais rápido possivel.</h5>

        <form action="w-[300px] md:w-[500px] md:flex">
            <textarea name="" id="" placeholder='Escreva o que deseja me dizer e não se esqueça de adicionar uma forma que eu possa te retornar.'
             className='w-full h-[100px] border-solid border-2 border-burntSienna text-sm p-2 placeholder:text-xs resize-none md:w-[500px]'></textarea>
        </form>
    </section>
  )
}
