import { BEBAS_NEUE } from "@/pages/_app";
import Ticker from "../elements/ticker";
import Image from "next/image";
import xxx from '../../public/img/02Header/xxx.svg'
import main from '../../public/img/02Header/main.webp'
import main_mobile from '../../public/img/02Header/main_mobile.webp'
import burger from '../../public/img/02Header/burger.svg'
import cross from '../../public/img/02Header/cross.svg'
import { useState } from "react";
import Social from "../elements/Social";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <section id="02Header" className="_section relative flex flex-col bg-[url('/img/02Header/smoke_mobile.webp')] md:bg-[url('/img/02Header/smoke.webp')] bg-no-repeat bg-bottom bg-cover">

            <div className="_wrapper w-full">
                <div className="flex justify-between my-4 md:my-8 xl:my-10">
                    <div className="hidden md:block">
                        <Social />
                    </div>

                    <h1 className={`${BEBAS_NEUE} text-_blue md:text-white block uppercase
                        _text-26-40
                    `}>
                        SYNDICATE DEFI HUNTERS
                    </h1>

                    <div className="flex flex-col justify-center pb-1 relative z-40" onClick={()=> setIsHidden(false) }>
                        <Image src={burger} alt="Menu" className="w-[39px] md:w-auto"/>
                    </div>
                </div>
            </div>

            {/* Выдвижное меню */}
            <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full min-h-screen bg-_blue rounded-b-2xl `}>
                <menu className={`${BEBAS_NEUE} _wrapper text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] text-white`}>
                    <li className="flex justify-end py-[13px] sm:py-[26px] md:py-[39px]">
                        <Image className="cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    </li>
                    <li className="flex justify-end w-full" onClick={()=> setIsHidden(true) }><a href="#02Header">HOME</a></li>
                    <li className="flex justify-end w-full"><a href="#03Mission">MISSION</a></li>
                    <li className="flex justify-end w-full"><a href="#04Tokenomics">TOKENOMICS</a></li>
                    <li className="flex justify-end w-full"><a href="#05Partners">PARTNERS</a></li>
                    <li className="flex justify-end w-full"><a href="#06Roadmap">ROADMAP</a></li>
                    <li className="flex justify-end w-full"><a href="#07Feedback">CONTACTS</a></li>
                    <li className="flex justify-end w-full"><a href="https://wp.syndicatecrypto.io">WHITE PAPER</a></li>
                    <li className="flex justify-end w-full py-[60px] xl:py-[100px] ">
                        <Social white/>
                    </li>
                </menu>
            </div>
            {/* Выдвижное меню */}

            <div className="w-full mx-auto relative">
                <Image src={main} alt="SYNDYCATE" className="hidden md:block md:-mt-[7%] -mt-[10%] -mb-[14%] w-full"/>
                <Image src={main_mobile} alt="SYNDYCATE" className="block md:hidden pt-24 -mb-6 xs:-mb-10 sm:-mb-20  w-full"/>

                <div className="_wrapper w-full !max-w-none !pr-2 absolute top-10 left-0 md:text-center">
                    <h2 data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} _h relative`}>
                        <span>BE PART <br className="md:hidden"/>
                        <span className="italic">OF</span> <span className="text-_green">SYNDICATE</span>
                        </span>
                        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500" className="absolute top-0 right-0 flex justify-end w-full md:hidden">
                            <Social />
                        </div>
                    </h2>
                </div>
                <div className="absolute bottom-[16%] xs:bottom-[15%] sm:bottom-[12%] md:top-0 md:bottom-auto w-full flex justify-center">
                    <Image src={xxx} alt="x X x" className="mx-auto w-10 xs:w-12 sm:w-14 md:р"/>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1500" className="_wrapper !max-w-none absolute w-full flex-col justify-center bottom-[7%] xs:bottom-[7%] sm:bottom-[5.5%] md:bottom-[10%] lg:bottom-[14%]">
                    <a href="https://www.pinksale.finance/launchpad/0x83DAE91150b550cbFAaecf9682535811d085521b?chain=ETH" className="block text-center mt-4 mx-auto order-5 uppercase bg-_green w-full md:w-[235px] _button text-black">
                        Pink Sale
                    </a>
                </div>
            </div>

            {/* <div className="w-full grow bg-[url('/img/02Header/main.webp')] bg-center bg-cover">
                <div className="_wrapper grow w-full flex flex-col justify-between relative">
                <div className="flex flex-col justify-between relative z-50">
                    <Image src={xxx} alt="x X x" className="w-10 md:w-autoz-50 mx-auto order-4 md:order-1 pb-4 md:pb-5 "/>

                    <h2 className={`${BEBAS_NEUE} _h  order-3 `}>
                        BE PART <span className="italic">OF</span>&nbsp;&nbsp; <span className="text-_green">SYNDICATE</span>
                    </h2>

                    <button className="relative z-50 block mx-auto order-5 uppercase bg-_green w-full xs:w-[235px] py-3.5 md:py-7 rounded-lg md:rounded-[20px]">
                        BUY
                    </button>
                </div>
                </div>
            </div> */}

            <div className="w-full relative z-40">
                <Ticker />
            </div>

        </section>
    )
}