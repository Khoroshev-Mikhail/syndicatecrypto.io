import { manrope } from "@/pages/_app";

export default function Buynow({ green } : { green?: boolean }){
    return(
        <a href="https://pancakeswap.finance/" className={`block text-center text-my_blue text-[20px] font-black uppercase rounded-2xl md:rounded-3xl w-full  py-[14px] sm:w-[235px] md:py-[22px]
            ${manrope} ${green ? 'bg-my_green hover:bg-my_blue hover:text-white' : 'bg-white hover:bg-my_green hover:text-my_blue'} duration-300
        `}>
            Buy now
        </a>
    )
}