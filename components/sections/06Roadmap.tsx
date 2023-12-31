import { BEBAS_NEUE } from "@/pages/_app";
import Image from "next/image";
import arrow_1 from '../../public/img/06Roadmap/arrow_1.svg'
import arrow_2 from '../../public/img/06Roadmap/arrow_2.svg'
import arrow_3 from '../../public/img/06Roadmap/arrow_3.svg'
import arrow_mobile from '../../public/img/06Roadmap/arrow_mobile.svg'
import arrow_mobile_2 from '../../public/img/06Roadmap/arrow_mobile_2.svg'
import bg_mobile from '../../public/img/06Roadmap/bg_mobile.webp'
import bg from '../../public/img/06Roadmap/bg.webp'
import eclipse from '../../public/img/06Roadmap/eclipse.webp'
import coins from '../../public/img/06Roadmap/coins.webp'

export default function Roadmap(){
    return(
        <section id="06Roadmap" className="_section relative bg-no-repeat mt-36">

            <Image src={bg_mobile} alt="bg" className="absolute h-full w-full top-14 pb-10 sm:pb-6 lg:hidden z-0"/>

            <Image src={bg} alt="bg" className="absolute h-full w-full top-20  left-0 hidden lg:block z-0 max-w-[1600px] 2xl:left-[calc(50%-800px)]"/>
            <Image src={coins} alt="bg" className="absolute h-full -top-32 w-full hidden lg:inline z-20"/>

            <Image src={eclipse} alt="bg" className="absolute h-[150%] -top-48 right-0 hidden lg:inline z-10"/>


            <div className="_wrapper relative overflow-hidden z-50">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} _h `}>
                    ROADMAP
                </h2>
                <div className="mt-[30px] md:mt-[56px] flex flex-col w-full gap-5 [&>div>div>div>ul]:list-image-[url(/img/06Roadmap/list.svg)] md:[&>div>div>div>ul>li]:pl-3.5 [&>div>div>div>ul>li]:pl-2">

                    <div className="flex flex-col lg:flex-row w-full gap-5">
                        <div className="w-full lg:w-1/2">
                            <div data-aos="fade-right" data-aos-duration="1500"  className="flex flex-col xs:flex-row bg-_black_div rounded-[20px] h-auto p-6 xs:p-10 w-full">
                                <span className={`${BEBAS_NEUE} block w-full xs:w-1/3 uppercase text-_blue text-[26px] sm:text-[30px] md:text-[34px] xl:text-[40px]`}>
                                    PHASE 1
                                </span>
                                <ul className="ml-4 w-full xs:w-2/3 block text-[16px] sm:text-[18px] md:text-[20px]">
                                    <li>Website Launch</li>
                                    <li>Presale and Uniswap Launch</li>
                                    <li>Marketing Company</li>
                                    <li>Top Influencers AMA</li>
                                    <li>3000 TG Members</li>
                                    <li>1000 Syndicate Holders</li>
                                    <li>Buyback and Burn</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pt-20 relative">
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_1} alt="arrow" className="hidden lg:inline absolute top-4 -left-28 z-50"/>
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_mobile} alt="arrow" className="absolute -top-[45%] -right-2 lg:hidden z-50"/>

                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col xs:flex-row bg-_black_div rounded-[20px] h-auto p-6 xs:p-10 w-full">
                                <span className={`${BEBAS_NEUE} block w-full xs:w-1/3 uppercase text-_blue text-[26px] sm:text-[30px] md:text-[34px] xl:text-[40px]`}>
                                    PHASE 2
                                </span>
                                <ul className="ml-4 w-full xs:w-2/3 block text-[16px] sm:text-[18px] md:text-[20px]">
                                    <li>Listing on Coinmarketcap</li>
                                    <li>Listing on Coingeko</li>
                                    <li>Trends on Dextools</li>
                                    <li>Partnerships with Private Communities</li>
                                    <li>5000 Telegram Members</li>
                                    <li>3000 Syndicate Holders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row w-full gap-5">
                        <div className="w-full lg:w-1/2 lg:-mt-14 relative">
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_2} alt="arrow" className="hidden lg:inline absolute -top-14 -right-16 z-50"/>
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_mobile_2} alt="arrow" className="absolute -top-[45%] -left-2 lg:hidden z-50"/>

                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col xs:flex-row bg-_black_div rounded-[20px] h-auto p-6 xs:p-10 w-full">
                                <span className={`${BEBAS_NEUE} block w-full xs:w-1/3 uppercase text-_blue text-[26px] sm:text-[30px] md:text-[34px] xl:text-[40px]`}>
                                    PHASE 3
                                </span>
                                <ul className="ml-4 w-full xs:w-2/3 block text-[16px] sm:text-[18px] md:text-[20px]">
                                    <li>NFT Collection Launch</li>
                                    <li>Global Marketing Campaign</li>
                                    <li>7000 Syndicate Holders</li>
                                    <li>New Partnerships</li>
                                    <li>Listing on CEX</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_3} alt="arrow" className="hidden lg:inline absolute bottom-4 -left-28 z-50"/>
                            <Image data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" src={arrow_mobile} alt="arrow" className="absolute -top-[45%] -right-2 lg:hidden z-50"/>
                            
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col xs:flex-row bg-_black_div rounded-[20px] h-auto p-6 xs:p-10 w-full">
                                <span className={`${BEBAS_NEUE} block w-full xs:w-1/3 uppercase text-_blue text-[26px] sm:text-[30px] md:text-[34px] xl:text-[40px]`}>
                                    PHASE 4
                                </span>
                                <ul className="ml-4 w-full xs:w-2/3 block text-[16px] sm:text-[18px] md:text-[20px]">
                                    <li>Tier-1 CEX Listings</li>
                                    <li>10000 Syndicate Holders</li>
                                    <li>Global Charity Campaign</li>
                                    <li>Focus on Global Finance</li>
                                    <li>Developement of AI Bots</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}