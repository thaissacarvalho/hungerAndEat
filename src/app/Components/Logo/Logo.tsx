import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-libreBaskerville',
});

export default function Logo() {
  return (
    <p className={`${libreBaskerville.variable} text-brightOrange text-base font-medium font-sans`}>Hunger and Eat</p>
  )
}
