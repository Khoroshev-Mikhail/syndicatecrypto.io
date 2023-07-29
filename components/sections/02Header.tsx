import { BEBAS_NEUE } from "@/pages/_app";
import Ticker from "../elements/ticker";
import Image from "next/image";
import xxx from '../../public/img/02Header/xxx.svg'
import main from '../../public/img/02Header/main.webp'
import main_mobile from '../../public/img/02Header/main_mobile.webp'
import round from '../../public/img/02Header/round.png'
import coins_left from '../../public/img/02Header/coins_left.png'
import coins_right from '../../public/img/02Header/coins_right.png'
import grid from '../../public/img/02Header/grid.png'
import tg from '../../public/img/01Nav/tg.svg'
import twitter from '../../public/img/01Nav/twitter.svg'
import burger from '../../public/img/01Nav/burger.svg'
import burger_mobile from '../../public/img/01Nav/burger_mobile.svg'

export default function Header(){
    return(
        <section className="_section relative flex flex-col bg-[url('/img/02Header/smoke_mobile.png')] md:bg-[url('/img/02Header/smoke.png')] bg-no-repeat bg-bottom bg-cover">
            {/* <Image src={main} alt="SYNDYCATE" className="absolute w-full"/> */}
            <div className="_wrapper w-full">
                <div className="flex justify-between my-4 md:my-8 xl:my-10">
                    <div className="hidden md:flex gap-x-1 ">
                        <Image src={twitter} alt="Twitter" className="block"/>
                        <Image src={tg} alt="Telegram" className="block"/>
                    </div>

                    <h1 className={`${BEBAS_NEUE} text-_blue md:text-white block uppercase
                        text-[26px] xs:text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:[40px]
                    `}>
                        SYNDICATE DEFI HUNTERS
                    </h1>

                    <div className="flex flex-col justify-center pb-1">
                        <Image src={burger} alt="Menu" className="hidden md:block"/>
                        <Image src={burger_mobile} alt="Menu" className="block md:hidden"/>
                    </div>
                </div>
            </div>


            <div className="w-full mx-auto relative">
                <Image src={main} alt="SYNDYCATE" className="hidden md:block xl:-mt-36 sm:-mt-20 xl:-mb-56 w-full"/>
                <Image src={main_mobile} alt="SYNDYCATE" className="block pt-24 -mb-6 xs:-mb-10 sm:-mb-20 md:hidden w-full"/>

                <div className="absolute w-full flex justify-center bottom-0">
                    
                </div>
                <div className="_wrapper !pr-2 absolute top-10">
                    <h2 className={`${BEBAS_NEUE} _h`}>
                        BE PART <br className="md:hidden"/>
                        <span className="italic">OF</span> <span className="text-_green">SYNDICATE</span>
                    </h2>
                </div>
                <div className="_wrapper absolute w-full flex-col justify-center bottom-[7%] xs:bottom-[7%] sm:bottom-[5.5%] md:bottom-[40%]">
                    <Image src={xxx} alt="x X x" className="mx-auto w-10 xs:w-12 sm:w-14 md:w-auto"/>
                    <button className="block mt-4 mx-auto order-5 uppercase bg-_green w-full md:w-[235px] _button text-black">
                        BUY <span className="md:hidden">NOW</span>
                    </button>
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

            <div className="w-full relative z-50">
                <Ticker />
            </div>

        </section>
    )
}