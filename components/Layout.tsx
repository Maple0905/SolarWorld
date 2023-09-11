import { Inter } from 'next/font/google'
import {PropsWithChildren} from "react";
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children  }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Get a Free Quote</title>
      </Head>
      <main className={`min-h-screen w-full flex flex-col items-center ${inter.className}`}>
        <Header></Header>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </main>
    </>
  )
}
