import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunger and Eat",
  description: "Esse é o seu website para procurar receitas de diferentes lugares do mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-screen`}>
        <Header />
        {children}
        <Footer />
        <div className="w-full h-8 bg-brightOrange text-ghostWhite font-medium flex justify-center items-center">Desenvolvido por Thaissa Carvalho</div>
      </body>
    </html>
  );
}
