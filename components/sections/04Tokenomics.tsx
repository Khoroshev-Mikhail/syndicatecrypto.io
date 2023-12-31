import Image from "next/image"
import total_supply from "../../public/img/04Tokenomics/total-supply.svg"
import total_security from "../../public/img/04Tokenomics/total-security.svg"
import smart_contract from "../../public/img/04Tokenomics/smart-contract.svg"
import sell_tax from "../../public/img/04Tokenomics/sell-tax.svg"
import buy_tax from "../../public/img/04Tokenomics/buy-tax.svg"
import copy_icon from "../../public/img/04Tokenomics/copy-icon.svg"
import Ticker from "../elements/ticker"
import { BEBAS_NEUE } from "@/pages/_app"
import { useEffect, useState } from "react"

export default function Tokenomics(){
    const [isVisible, setIsVisible] = useState(false);
    const [timeOut, setTimeOut] = useState<NodeJS.Timeout | null>(null)
    const copy = () => {
        navigator.clipboard.writeText('0x683Bac1d16Fc166baA6F7509ADf509bE66a2E514')
        if(!isVisible){
            setIsVisible(true)
            if (timeOut) {
                clearTimeout(timeOut)
            }
            setTimeOut(setTimeout(() => setIsVisible(false), 3000))
        }
    }
    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        }
      }, [timeOut])
    return(
        <section id="04Tokenomics" className="_section relative pt-[52px] md:pt-[153px] ">
            {isVisible && <div className="_animate-fade-out text-white fixed bottom-0 left-0 z-50 w-full h-auto p-4 rounded-t-2xl text-center bg-_blue _text-26-40">
                Copied!
            </div>}
            
            {/* BG ECLIPSE */}
            <div className="absolute left-0 h-[120%] -bottom-52 md:-bottom-80 w-full hidden sm:block z-0 bg-[url('/img/04Tokenomics/eclipse.webp')] bg-left bg-no-repeat"></div>
            <div className="absolute left-0 h-[80%] -bottom-20 w-full sm:hidden z-0 bg-[url('/img/04Tokenomics/eclipse_mobile.webp')] bg-left bg-no-repeat"></div>
            {/* BG ECLIPSE */}

            <div className="_wrapper flex flex-col">
            <h2 data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} _h `}>
                OUR <span className="text-_green">TOKENOMICS</span>
            </h2>

                <div  className="relative w-full z-30 grid grid-cols-1 grid-rows-1 gap-y-[5px] mt-[40px] sm:grid-cols-2 sm:grid-rows-6 sm:gap-y-[10px] sm:gap-x-[20px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">

                    <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-1 sm:row-end-3">
                        <p className={`${BEBAS_NEUE} _text-26-40 uppercase`}>
                            <Image src={total_supply} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Total Supply
                        </p>
                        <p className="mt-[15px] font-extrabold _text-12-20 leading-[16px]">
                            1000,000,000,000,000
                        </p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-3 sm:row-end-5">
                        <p className={`${BEBAS_NEUE} _text-26-40 uppercase`}>
                            <Image src={total_security} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Total Security
                        </p>
                        <p className="mt-[15px] font-extrabold _text-12-20 leading-[16px]">
                            Liquidity locked up for a 1 year
                        </p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" onClick={copy} className="relative cursor-pointer col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow sm:p-[27px] sm:col-start-1 sm:col-end-2 sm:row-span-2 sm:row-start-5 sm:row-end-7">
                        <Image src={copy_icon} alt="copy" className="absolute top-[10px] right-[10px] w-[20px]"/>
                        <p className={`${BEBAS_NEUE} _text-26-40 uppercase`}>
                            <Image src={smart_contract} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                            Smart Contract
                        </p>
                        <p className="mt-[15px] font-extrabold _text-12-20 leading-1">
                        0x683Bac1d16Fc166baA6<wbr/>F7509ADf509bE66a2E514
                        </p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="md:mt-8 col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow flex flex-col justify-center sm:p-[27px] sm:col-start-2 sm:col-end-3 sm:row-span-3 sm:row-start-1 sm:row-end-4">
                        <div >
                            <p className={`${BEBAS_NEUE} _text-26-40 uppercase`}>
                                <Image src={sell_tax} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                                Sell Tax 3%
                            </p>
                            <ul className="font-extrabold grid grid-cols-1 md:grid-cols-2 _text-12-20 leading-1 pt-[15px]">
                                <li className="block md:col-span-2">
                                    1% Distributed among all token holders
                                </li>
                                <li className="mt-[10px]">
                                    1% Returns to liquidity
                                </li>
                                <li className="mt-[10px]">
                                    1% We send to charity
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="md:mb-8 col-span-1 row-span-1 p-[30px] bg-[#191C25] rounded-2xl _shadow flex flex-col justify-center sm:p-[27px] sm:col-start-2 sm:col-end-3 sm:row-span-3 sm:row-start-4 sm:row-end-7">
                        <div >
                            <p className={`${BEBAS_NEUE} _text-26-40 uppercase`}>
                                <Image src={buy_tax} alt="icon" className="relative inline mr-[15px] top-[2px] left-[-2px]"/>
                                Buy Tax 3%
                            </p>
                            <ul className="font-extrabold grid grid-cols-1 md:grid-cols-2 _text-12-20 leading-1 pt-[15px]">
                                <li className="block md:col-span-2">
                                    1% Distributed among all token holders
                                </li>
                                <li className="mt-[10px]">
                                    1% Returns to liquidity
                                </li>
                                <li className="mt-[10px]">
                                    1% We send to charity
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <a href="https://drive.google.com/file/d/13tdciPVJ99-ADK2IvcelzJF-y1ut-b9-/view?pli=1" data-aos="zoom-in" data-aos-duration="1000" className="relative z-50 mt-[30px] md:mt-[54px] _button mx-auto order-5  bg-_blue w-full xs:w-[287px] ">
                    AUDIT CERTIFICATE
                </a>

            </div>

            <div className="w-full mt-[35px] md:mt-[48px]">
                <Ticker green />
            </div>
        </section>
    )
}