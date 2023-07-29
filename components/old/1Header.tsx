import { drukCyrBold, drukCyrBoldItalic } from "@/pages/_app";
import Buynow from "./ui/buynow";
import bigwolf from '../../public/images/big-wolf.png'
import bigwolf_mobile from '../../public/images/big-wolf-mobile.png'
import Image from "next/image";
import { useState } from "react";
import Social from "./ui/social";
import cross from "../../public/images/cross.svg"
import burger from "../../public/images/burger.svg"
import { drukCyr } from "@/pages/_app";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <div className="relative h-screen sm:h-auto min-h-[600px] mb-[70px]">

            {/* background-eclipse */}
            <div className="absolute z-20 sm:hidden h-full min-h-screen bottom-0 right-0 w-full xs:max-w-[450px] bg-[url('/images/top-grid.png')] bg-no-repeat bg-bottom bg-contain"></div>
            <div className="absolute z-10 hidden sm:block h-full min-h-screen top-0 w-[75%] bg-[url('/images/eclipse-header-left.svg')] sm:bg-[url('/images/eclipse-header-left-big.svg')] bg-no-repeat bg-left-top bg-contain"></div>
            <div className="absolute z-10 sm:hidden h-full min-h-screen top-0 w-[75%] bg-[url('/images/eclipse-header-left-mobile.svg')] sm:bg-[url('/images/eclipse-header-left-big.svg')] bg-no-repeat bg-left-top bg-contain"></div>
            <div className="absolute z-10 sm:hidden h-full min-h-screen top-0 right-0 w-[50%] bg-[url('/images/eclipse-header-right.svg')] bg-no-repeat bg-right-bottom bg-contain"></div>
            {/* background-eclipse */}

            {/* Выдвижное меню */}
            <div className={`${isHidden ? 'hidden' : 'block'} absolute z-40 top-0 left-0 w-full px-[20px] h-screen min-h-[650px] bg-my_blue rounded-b-2xl md:min-h-[680px] lg:min-h-[780px]`}>
                <menu className={`${drukCyr} text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] text-white`}>
                    <li className="flex justify-end py-[13px] sm:py-[26px] md:py-[39px] lg:pr-[100px] xl:pr-[200px]">
                        <Image className="cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    </li>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#tokenomics">TOKENOMICS</a></li>
                    <li><a href="#roadmap">ROADMAP</a></li>
                    <li><a href="#contacts">CONTACTS</a></li>
                    <li className="pt-[60px] xl:pt-[100px]">
                        <Social green/>
                    </li>
                    <li className=" absolute w-full left-0 bottom-[20px] px-[20px]">
                        <Buynow /> {/* Если нужна прыгающая кнопка - просто добави в классы animate-bounce */}
                    </li>
                </menu>
            </div>
            {/* Выдвижное меню */}

            {/* Верхняя панель навигации */}
            <div className="relative z-30 flex w-full justify-between px-[20px] py-[13px] sm:justify-end sm:py-[26px] md:py-[39px] lg:pr-[100px] xl:pr-[200px]">  
                <div className="sm:hidden">
                    <Social />
                </div>
                <div className="flex flex-col justify-center sm:ml-[50px]">
                    <Image className="cursor-pointer w-[39px] h-[17px] sm:w-[67px] sm:h-[21px]" src={ burger } alt="menu-toggle" onClick={ ()=>setIsHidden(false) }/>
                </div> 
            </div>
            {/* Верхняя панель навигации */}

            {/* Заголовки и волк */}
            <header className="h-full mt-[20px] sm:mt-0 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">
                <h1 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} relative z-20 text-my_blue uppercase leading-[80%] text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px]`}>
                    King wolf:
                </h1>
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} relative z-20 uppercase leading-[80%] text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px]`}>
                    Be <span className={`${drukCyrBoldItalic} pl-[3px] xl:pl-[5px]`}>Part </span>of<br />
                    the <span className="text-my_green">wolf<br /></span>
                    pack
                </h2>
                <p data-aos="fade-right" data-aos-duration="1500" className="absolute z-20 left-0 bottom-[100px] text-[16px] w-full leading-[22px] pl-[20px] mt-[20px] sm:pl-[0] sm:mt-[40px] sm:relative sm:bottom-[0] sm:max-w-[50%] md:max-w-[40%] md:text-[20px]">
                    Shiba inu had an affair<br className="xs:hidden" /> with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins
                </p>
                <div className="">
                    <Image priority src={bigwolf_mobile} alt="King wolf" className="absolute z-0 right-0 top-[100px] w-full xs:max-w-[400px] sm:hidden" />
                    <Image src={bigwolf} alt="King wolf" className="absolute z-0 top-0 right-0 w-[50%] max-w-[700px] hidden sm:inline-flex" loading="lazy"/> 
                </div>
                <div className="absolute z-20 left-0 w-full px-[20px] bottom-[20px] sm:relative sm:px-0 sm:mt-[20px] sm:bottom-[0]">
                    <Buynow green />
                </div>
            </header>
            {/* Заголовки и волк */}

        </div>
    )
}