import { drukCyrBold } from "@/pages/_app";
import Image from "next/image";
import total_supply from "../../public/images/icon/total-supply.svg"
import total_security from "../../public/images/icon/total-security.svg"
import smart_contract from "../../public/images/icon/smart-contract.svg"
import sell_tax from "../../public/images/icon/sell-tax.svg"
import buy_tax from "../../public/images/icon/buy-tax.svg"
import copy_icon from "../../public/images/icon/copy-icon.svg"
import Ticker from "./ui/ticker";

export default function Tokenomics(){
    const copy = () => navigator.clipboard.writeText('0x1022029eDdF7c54FC3942664CfA63A24007440E8')
    return(
        <section id="tokenomics" className="relative pt-[86px] pb-[65px]">
            
            {/* background-eclipse */}
            <div className="absolute w-full h-full right-0 z-0 top-0 sm:top-[-100px] bg-[url('/images/eclipse-tocenomics-right.svg')] bg-no-repeat bg-contain bg-right-top"></div>
            <div className="absolute w-full h-full left-0 z-0 bottom-0 sm:hidden bg-[url('/images/eclipse-tocenomics-left.svg')] bg-no-repeat bg-contain bg-left-bottom"></div>
            <div className="absolute w-full h-full right-0 z-0 top-0 sm:top-[-100px] bg-[url('/images/eclipse-tocenomics-right-desktop.svg')] bg-no-repeat bg-contain bg-right"></div>
            {/* background-eclipse */}

            <div className="relative z-30 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} uppercase text-[70px] sm:text-center sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px] leading-[80%]`}>
                    Our <br className="sm:hidden"/><span className="text-my_green">Tokenomics</span>    
                </h2>

                <div data-aos="fade-right" data-aos-duration="1500"  className="relative z-30 grid grid-cols-1 grid-rows-1 gap-y-[5px] mt-[40px] sm:grid-cols-2 sm:grid-rows-6 sm:gap-y-[10px] sm:gap-x-[20px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">

                    <div className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-1 sm:row-end-3">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={total_supply} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Total Supply
                        </p>
                        <p className="mt-[15px] font-medium text-[12px] leading-[16px]">
                            10,000,000,000,000,000,000,000,000 Wolf Pack
                        </p>
                    </div>

                    <div className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-3 sm:row-end-5">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={total_security} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Total Security
                        </p>
                        <p className="mt-[15px] font-medium text-[12px] leading-[16px]">
                            Liquidity locked up for a 5 years
                        </p>
                    </div>

                    <div onClick={copy} className="relative cursor-pointer col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-5 sm:row-end-7">
                        <Image src={copy_icon} alt="icon" className="absolute top-[10px] right-[10px] w-[20px]"/>
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={smart_contract} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Smart Contract
                        </p>
                        <p className="mt-[15px] font-medium text-[12px] leading-[16px]">
                            0x1022029eDdF7c54FC39<wbr/>42664CfA63A24007440E8
                        </p>
                    </div>

                    <div className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow flex flex-col justify-center sm:p-[27px] sm:col-start-2 sm:col-end-3 sm:row-span-3 sm:row-start-1 sm:row-end-4">
                        <div>
                            <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                                <Image src={sell_tax} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                                Sell Tax
                            </p>
                            <ul className="font-medium columns-2 md:columns-3 text-[12px] leading-[16px] pt-[15px]">
                                <li>
                                    <span className="font-extrabold">9%</span> Sell Tax
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Buyback
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">3%</span> Philanthropy
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Backflow
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Marketing
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow flex flex-col justify-center sm:p-[27px] sm:col-start-2 sm:col-end-3 sm:row-span-3 sm:row-start-4 sm:row-end-7">
                        <div>
                            <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                                <Image src={buy_tax} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                                Buy Tax
                            </p>
                            <ul className="font-medium columns-2 md:columns-3 text-[12px] leading-[16px] pt-[15px]">
                                <li>
                                    <span className="font-extrabold">9%</span> Sell Tax
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Buyback
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">3%</span> Philanthropy
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Backflow
                                </li>
                                <li className="mt-[10px]">
                                    <span className="font-extrabold">2%</span> Marketing
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="relative z-30 mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
                    <Ticker /> 
                </div>
            </div>
        </section>
    )
}