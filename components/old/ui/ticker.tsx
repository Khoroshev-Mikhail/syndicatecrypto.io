import Image from "next/image";
import Marquee from "react-fast-marquee";
import wolf from '../../../public/images/wolf-ticker.png'
import { drukCyrBold } from "@/pages/_app";

export default function Ticker({ green } : { green?: boolean }){
    return(
        //Отрицательный марджин используется потому что у родительского блока есть padding
        <div className={`${green ? 'rotate-[-2deg]' : 'rotate-[2deg]'} relative mx-[-20px] md:mx-[-40px] lg:mx-[-60px] xl:mx-[-80px] 2xl:mx-[-200px]`}>
            <Marquee autoFill direction={green ? 'left' : 'right'}>
                <div className={`${drukCyrBold} ${green ? 'bg-my_green text-my_blue' : 'bg-my_blue'} mx-[-1px] uppercase flex h-[32px] text-[22px] sm:text-[30px] sm:h-[56px]`}>
                    <div className="px-[9px] flex flex-col justify-center">
                        <Image src={wolf} alt="KING WOLF" className="w-auto h-[26px] sm:h-[41px]"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="px-[9px]">King wolf</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}