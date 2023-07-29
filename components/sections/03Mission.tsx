import { BEBAS_NEUE } from "@/pages/_app";
import Image from "next/image";
import coins from '../../public/img/03Mission/coins.svg'
import smoke from '../../public/img/03Mission/smoke.png'

export default function Mission(){
    return(
        <section className="_section pt-[50px] xs:pt-[60px] md:pt-20 relative">
            <Image src={smoke} alt="smoke" className="absolute w-full top-0 left-0 z-0"/>
            <div className="_wrapper relative z-30">
                <h2 className={`${BEBAS_NEUE} _h `}>
                    OUR <span className="text-_green">MISSION</span>
                </h2>
                <div className="flex flex-col md:flex-row mt-[30px] md:mt-[50px]">
                    <div className={`${BEBAS_NEUE} w-full uppercase font-bold md:w-1/2 md:pr-[7%] text-[26px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]`}>
                        We are the Syndicate - an anonymous team of defi hunters Dedicated
                        to improve our community for extra profits and protect against scams
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col font-extrabold text-[16px] xs:text-[18px] sm:text-[20px] md:font-bold md:text-[22px]">
                        <div>
                            We throw our efforts into fighting the market and every
                            day looking for gems that give xxx with the help of our all bots and whale connections. All our proceeds will go
                            to the development of a fund for the community and charity!
                        </div>
                        <Image src={coins} alt="COINS SYNDICATE" className="mt-[30px] w-full xs:max-w-[353px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}