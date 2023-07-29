import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


import { Bebas_Neue } from 'next/font/google'
const BEBAS_NEUE_FONT = Bebas_Neue({ subsets: ['latin'], weight: '400'})
export const BEBAS_NEUE = BEBAS_NEUE_FONT.className

const manropeFont = Manrope({ subsets: ['latin'] })
const drukCyrFont = localFont({ src: '../fonts/DrukCyr-Medium.woff2' })
const drukCyrItalicFont = localFont({ src: '../fonts/DrukCyr-Medium-Italic.woff2' })
const drukCyrBoldItalicFont = localFont({ src: '../fonts/DrukCyr-Bold-Italic.woff2' })
const drukCyrBoldFont = localFont({ src: '../fonts/DrukCyr-Bold.woff2' })
const drukCyrHeavyFont = localFont({ src: '../fonts/DrukCyr-Heavy.woff2' })
export const manrope = manropeFont.className
export const drukCyr = drukCyrFont.className
export const drukCyrItalic = drukCyrItalicFont.className
export const drukCyrBoldItalic = drukCyrBoldItalicFont.className
export const drukCyrBold = drukCyrBoldFont.className
export const drukCyrHeavy = drukCyrHeavyFont.className


export default function App({ Component, pageProps }: AppProps) {
    useEffect(()=>{
        AOS.init()
    }, [])
    return (
            <main className={`${manrope} text-white`}>
                <Component {...pageProps} />
            </main>
    )
}
