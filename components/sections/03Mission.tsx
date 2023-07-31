import { BEBAS_NEUE } from "@/pages/_app";
import Image from "next/image";
import coins from '../../public/img/03Mission/coins.webp'

export default function Mission(){
    return(
        <section id="03Mission" className="_section pt-[50px] xs:pt-[60px] md:pt-20 relative bg-[url('/img/03Mission/smoke_mobile.webp')] md:bg-[url('/img/03Mission/smoke.webp')] bg-no-repeat bg-bottom bg-cover">
            <div className="_wrapper relative z-30">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} _h `}>
                    OUR <span className="text-_green">MISSION</span>
                </h2>
                <div className="flex flex-col md:flex-row mt-[30px] md:mt-[50px]">
                    <div data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} w-full leading-[100%] md:leading-normal uppercase font-bold md:w-1/2 md:pr-[7%] text-[26px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]`}>
                        We are the Syndicate - an anonymous team of defi hunters Dedicated
                        to improve our community for extra profits and protect against scams
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="w-full mt-[20px] md:mt-0 md:w-1/2 flex flex-col font-extrabold text-[16px] xs:text-[18px] sm:text-[20px] md:font-bold md:text-[22px]">
                        <div>
                            We throw our efforts into fighting the market and every
                            day looking for gems that give xxx with the help of our all bots and whale connections. All our proceeds will go
                            to the development of a fund for the community and charity!
                        </div>
                        <Image src={coins} alt="COINS SYNDICATE" className="mt-[30px] w-full xs:max-w-[353px]"/>
                    </div>
                </div>
                <div>
                <a data-aos="zoom-in" data-aos-duration="1000"  href="https://wp.syndicatecrypto.io" className="relative z-50 mt-[40px] md:mt-[64px] _button mx-auto order-5  bg-_blue w-full xs:w-[287px] ">
                    WHITE PAPER
                </a>
                </div>
            </div>
        </section>
    )
}