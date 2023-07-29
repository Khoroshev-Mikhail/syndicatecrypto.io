import { drukCyr, drukCyrItalic, manrope} from "@/pages/_app";
import Image from "next/image";
import roundWolfs from '../../public/images/round-wolfs.png'

export default function Description(){
    return(
        <section id="home" className="relative px-[20px] sm:mt-[50px] md:flex md:px-[40px] md:mt-[75px] lg:mt-[100px] lg:px-[60px] xl:px-[80px] xl:mt-[150px] 2xl:px-[200px]">
            
            {/* background-eclipse */}
            <div className="sm:hidden absolute w-full h-full right-0 z-0 top-0 bg-[url('/images/eclipse-desc-right.svg')] bg-no-repeat bg-right bg-contain"></div>
            {/* background-eclipse */}
            
            <div className="relative z-30 md:flex">
                <div data-aos="fade-right" data-aos-duration="1500"  className={`${drukCyr} md:w-[50%]`}>
                    <p className="text-[40px] leading-[95%] md:text-[50px] md:pr-[10px]">
                        <span className="text-my_green">WolfPack </span>
                        is a rapidly growing community striving to become 
                        <br className="sm:hidden"/><span className={drukCyrItalic}> one of the most </span>popular <br className="sm:hidden"/>
                        in the crypto world
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className="sm:flex md:block md:w-[50%] md:mt-[12px]">
                    <div className={`${manrope} sm:w-[50%] md:w-full`}>
                        <p className="font-semibold text-[16px] leading-[22px]  pr-[30px] mt-[30px] sm:text-[20px] sm:leading-[27px] md:mt-0">
                            We are creating a modern ecosystem that will bring people together from around the world to provide financial assistance in support of wolves around the world
                        </p>
                    </div>
                    <div className="mt-[30px] w-full xs:w-[262px] md:mt-0 md:mt-[8px]">
                        <Image src={roundWolfs} alt="wolfs"/>
                    </div>
                </div>
            </div>
        </section>
    )
}