import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import { Bebas_Neue } from 'next/font/google'
const manropeFont = Manrope({ subsets: ['latin'] })
const BEBAS_NEUE_FONT = Bebas_Neue({ subsets: ['latin'], weight: '400'})
export const BEBAS_NEUE = BEBAS_NEUE_FONT.className
export const MANROPE = manropeFont.className


export default function App({ Component, pageProps }: AppProps) {
    useEffect(()=>{
        AOS.init()
    }, [])
    
    return (
            <main className={`${MANROPE} text-white`}>
                <Component {...pageProps} />
            </main>
    )
}
