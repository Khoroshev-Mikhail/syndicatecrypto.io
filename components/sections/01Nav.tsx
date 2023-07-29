import Image from "next/image";
import tg from '../../public/img/01Nav/tg.svg'
import twitter from '../../public/img/01Nav/twitter.svg'
import burger from '../../public/img/01Nav/burger.svg'
import burger_mobile from '../../public/img/01Nav/burger_mobile.svg'
import { BEBAS_NEUE } from "@/pages/_app";

export default function Nav(){
    return(
        <section className="_section">
            <div className="_wrapper flex justify-between my-4 md:my-8 xl:my-10">

                <div className="hidden md:flex gap-x-1 ">
                    <Image src={twitter} alt="Twitter" className="block"/>
                    <Image src={tg} alt="Telegram" className="block"/>
                </div>

                {/* Поправить вертикальное выравнивание напротив бургера текс */}
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
        </section>
    )
}