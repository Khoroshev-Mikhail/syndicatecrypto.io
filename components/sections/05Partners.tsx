import { BEBAS_NEUE } from "@/pages/_app";
import Image from "next/image";
import first from '../../public/img/05Partners/1.svg'
import second from '../../public/img/05Partners/2.svg'
import third from '../../public/img/05Partners/3.svg'
import fourth from '../../public/img/05Partners/4.svg'
import fifth from '../../public/img/05Partners/5.svg'

export default function Partners(){
    return(
        <section className="_section mt-[52px] md:mt-[112px]">
            <div className="_wrapper">
                <h2 className={`${BEBAS_NEUE} _h `}>
                    OUR <span className="text-_green">PARTNERS</span>
                </h2>
                <div className="grid grid-cols-6 sm:grid-cols-5 mt-10">
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image src={first} alt="" className="block"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image src={second} alt="" className="block"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image src={third} alt="" className="block"/>
                    </div>
                    <div className="col-span-3 sm:col-span-1 flex justify-center">
                        <Image src={fourth} alt="" className="block"/>
                    </div>
                    <div className="col-span-3 sm:col-span-1 flex justify-center">
                        <Image src={fifth} alt="" className="block"/>
                    </div>
                </div>
            </div>
        </section>
    )
}