import { drukCyr, drukCyrBold, drukCyrItalic } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="roadmap" className="relative px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">

            <h2 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} uppercase text-[70px] leading-[80%] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px]`}>
                Roadmap
            </h2>
            
            <div data-aos="fade-right" data-aos-duration="1500"  className="relative z-0 mt-[40px] sm:grid sm:grid-cols-2 md:mt-[50px] lg:mt-[60px] xl:mt-[80px] [&>div>div>ul]:list-image-[url(/images/icon/list.svg)]">
                
                {/* background-eclipse */}
                <div  data-aos="fade-left" data-aos-duration="1500" className="absolute z-0 hidden w-full h-full left-0 ml-[-20px] sm:block md:ml-[-40px] lg:ml-[-60px] xl:ml-[-80px] 2xl:ml-[-200px] bg-[url('/images/eclipse-roadmap-desktop.svg')] bg-no-repeat bg-contain bg-left-bottom"></div>
                <div data-aos="fade-left" data-aos-duration="1500" className="absolute z-0 w-[75%] h-[65%] right-0 mr-[-20px] sm:hidden bg-[url('/images/eclipse-roadmap-right.svg')] bg-no-repeat bg-contain bg-right"></div>
                {/* background-eclipse */}
        
                <div  className="p-[1px] bg-gradient-to-l from-my_green rounded-2xl sm:col-span-1 sm:rounded-none sm:pr-[0px]">
                    <div className="bg-my_black h-full rounded-r-2xl pl-[30px] py-[30px] sm:py-[40px] sm:rounded-none sm:pl-[40px] md:pl-[50px] md:py-[50px] lg:pl-[60px] lg:py-[56px]">
                        <p className={`${drukCyr} bg-my_black relative z-30  text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%`}>
                            Phase <span className={drukCyrItalic}>1</span>
                        </p>
                        <ul className="relative z-30 font-medium text-[16px] leading-[100%] mt-[8px] [&>li]:pb-[14px]  [&>li]:ml-[14px] [&>li]:pl-[11px]">
                            <li>Create website</li>
                            <li>Presale and Launch</li>
                            <li>Marketing</li>
                            <li>Crypto influencers AMA</li>
                            <li>3000 Telegram Members</li>
                            <li>5000 holders</li>
                            <li>Buyback and burn</li>
                        </ul>
                    </div>
                </div>

                <div className="p-[1px] bg-gradient-to-r from-my_green sm:to-[#66880E] rounded-2xl sm:col-span-1 sm:rounded-none sm:pl-[0px] _border-radius-r-20">
                    <div className="bg-my_black h-full rounded-l-2xl sm:rounded-none py-[30px] sm:py-[40px] sm:ml-[-1px] _border-radius-r-20 pl-[30px] sm:pl-[40px] md:pl-[50px] md:py-[50px] lg:pl-[60px] lg:py-[56px]">
                        <p className={`${drukCyr} relative z-30  text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%`}>
                            Phase <span className={drukCyrItalic}>2</span>
                        </p>
                        <ul className="relative z-30 font-medium text-[16px] leading-[100%] mt-[8px] [&>li]:pb-[14px]  [&>li]:ml-[14px] [&>li]:pl-[11px]">
                            <li>Listing on CoinMarketCap</li>
                            <li>Listing on Coingecko</li>
                            <li>Partnership<br/> with Marketing Agencies</li>
                            <li>10 000 Telegram Members</li>
                            <li>15 000 holders</li>
                        </ul>
                    </div>
                </div>

                <div className="p-[1px] bg-gradient-to-l from-my_green sm:to-[#66880E] rounded-2xl sm:col-span-1 sm:rounded-none sm:pl-[0px] _border-radius-l-20">
                    <div className="bg-my_black h-full rounded-2xl pl-[30px] py-[30px] sm:py-[40px] sm:rounded-none sm:ml-[1px] sm:pl-[40px] md:pl-[50px] md:py-[50px] lg:pl-[60px] lg:py-[56px] _border-radius-l-20">
                        <p className={`${drukCyr} relative z-30  text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%`}>
                            Phase <span className={drukCyrItalic}>3</span>
                        </p>
                        <ul className="relative z-30 font-medium text-[16px] leading-[100%] mt-[8px] [&>li]:pb-[14px]  [&>li]:ml-[14px] [&>li]:pl-[11px]">
                            <li>Global marketing</li>
                            <li>NFT Launch</li>
                            <li>50 000 holders</li>
                            <li>New Partnerships </li>
                            <li>Exchange Listing CEX</li>
                        </ul>
                    </div>
                </div>

                <div className="p-[1px] bg-gradient-to-r from-my_green rounded-2xl sm:col-span-1 sm:rounded-none sm:pl-[0px]">
                    <div className="bg-my_black h-full rounded-2xl pl-[30px] py-[30px] sm:py-[40px] sm:rounded-none sm:ml-[-2px] sm:pl-[40px] md:pl-[50px]  md:py-[50px] lg:pl-[60px] lg:py-[56px]">
                        <p className={`${drukCyr} relative z-30  text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%`}>
                            Phase <span className={drukCyrItalic}>4</span>
                        </p>
                        <ul className="relative z-30 font-medium text-[16px] leading-[100%] mt-[8px] [&>li]:pb-[14px]  [&>li]:ml-[14px] [&>li]:pl-[11px]">
                            <li>100 000 holders</li>
                            <li>New Exchange Listing CEX</li>
                            <li>Launching our first Launchpad</li>
                            <li>Focus on Global Business Development</li>
                            <li>Assistance for wolf parks</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}