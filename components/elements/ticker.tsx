import Image from "next/image";
import Marquee from "react-fast-marquee";
import black_x from '../../public/img/ticker/black.svg'
import green_x from '../../public/img/ticker/green.svg'
import { BEBAS_NEUE } from "@/pages/_app";

export default function Ticker({ green } : { green?: boolean }){
    return(
        <div className="relative">
            <Marquee autoFill direction={green ? 'right' : 'left'}>
                <div className={`${BEBAS_NEUE} ${green ? 'bg-_green text-_blue' : 'bg-_blue'} mx-[-1px] uppercase flex xs:text-[30px]`}>
                    <div className="px-[9px] flex flex-col justify-center">
                        <Image src={green ? black_x : green_x} alt="X" className="w-auto h-[12px] xs:h-[17px]"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="block px-[9px] -mb-[3px]">SYNDICATe</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}