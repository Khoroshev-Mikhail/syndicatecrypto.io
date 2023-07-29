import Image from "next/image";
import wolf from '../../public/images/feedback-wolf.png'
import { drukCyrBold, drukCyrBoldItalic } from "@/pages/_app";
import Social from "./ui/social";
import Ticker from "./ui/ticker";
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";

const SERVICE_ID = 'wolfkingbnb' //https://dashboard.emailjs.com/admin
const TEMPLATE_ID = 'template_4kmnxor' //https://dashboard.emailjs.com/admin/templates
const PUBLIC_KEY = 'ryPFWuhN_O_S1_ra7' //https://dashboard.emailjs.com/admin/account

export default function Feedback(){
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'default'>('default')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function sendForm(e:any){
        e.preventDefault()
        setStatus('loading')
    
        emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email})
            .then(() => {
                setName('')
                setEmail('')
                setStatus('success')
            }, (err) => {
                console.log(err)
                setStatus('error')
            });
    }
    useEffect(()=>{
        emailjs.init(PUBLIC_KEY)
    }, [])

    return(
        <section id="contacts" className="relative mt-[85px] mb-[40px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">

            {/* background-eclipse */}
            <div className="z-0 sm:hidden w-full h-full top-[-100px] left-0 absolute bg-[url('/images/eclipse-feedback-left.svg')] bg-no-repeat bg-contain g-left-top"></div>
            <div className="z-0 hidden sm:block w-full h-full right-0  absolute bg-[url('/images/eclipse-feedback-right.svg')] bg-no-repeat bg-contain bg-right"></div>
            {/* background-eclipse */}

            <h2 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} relative z-30 uppercase leading-[80%] text-[70px] sm:text-[80px] sm:w-[90%] md:text-[100px] md:w-[70%] lg:text-[120px] lg:w-[70%] xl:text-[156px]`}>
                <span className="text-my_green">Ready</span> to be 
                <span className={drukCyrBoldItalic}> part</span> of the pack?
            </h2>

                <div data-aos="fade-right" data-aos-duration="1500" className="relative z-30 overflow-hidden mt-[40px] bg-my_blue sm:flex sm:justify-between md:mt-[50px] lg:mt-[60px] xl:mt-[80px] rounded-2xl bg-[url('/images/grid-form-mobile.png')] sm:bg-[url('/images/grid-form.png')] bg-no-repeat bg-contain sm:bg-cover">
                    
                    <div className="p-[20px] sm:w-[60%] sm:pt-[20px] sm:pl-[20px] sm:pb-[80px] md:w-[52%] md:pt-[30px] md:pl-[30px] md:pb-[100px] lg:w-[48%] lg:pt-[30px] lg:pl-[40px] lg:pb-[100px] xl:pt-[50px] xl:pl-[50px] xl:pb-[140px]">
                        <div className="flex justify-between px-[10px] sm:px-[0px]">
                            <p className="inline-flex text-[20px] leading-[150%] sm:text-[28px]">
                                Contact us
                            </p>
                            <div className="sm:absolute sm:bottom-[20px] md:bottom-[30px] lg:bottom-[30px] xl:bottom-[50px]">
                                <Social green />
                            </div>
                        </div>
                        <div className="mt-[30px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] xl:mt-[40px]">
                            <form onSubmit={sendForm}>
                                <input value={name} onChange={(e)=>setName(e.target.value)} required className="outline-0 w-full bg-transparent border-white border-2 py-[18px] px-[20px] text-white placeholder-white text-[16px] leading-[180%] rounded-2xl font-medium sm:text-[20px] md:py-[22px]" name="name" type="text" placeholder="Name"/>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} required className="outline-0 mt-[8px] w-full bg-transparent border-white border-2 py-[18px] px-[20px] text-white placeholder-white text-[16px] leading-[180%] rounded-2xl font-medium sm:text-[20px] md:py-[22px] md:mt-[10px]" name="email" type="email" placeholder="Email"/>
                                <button disabled={status === 'success' || status === 'loading'} type="submit" className={`mt-[8px] p-[16px] w-full text-my_blue text-[16px] leading-[180%] bg-white ${status !== 'success' ? 'hover:bg-my_green hover:text-my_blue duration-300' : ''} rounded-2xl font-bold uppercase sm:text-[20px] sm:p-[22px] md:mt-[10px]`}>
                                    {status === 'default' && 'Send '}
                                    {status === 'success' && 'Success'}
                                    {status === 'error' && 'Sorry, unknown error'}
                                    {status === 'loading' && 'loading'}
                                </button>
                                <p className="mt-[8px] text-center font-normal text-[#ffffffb3] text-[7px] sm:text-left sm:text-[10px] md:text-[10px] lg:text-[12px]">By submitting your data to this form, you agree to the privacy Policy</p>
                            </form>
                        </div>
                    </div>

                    <div className="object-contain sm:absolute right-0 sm:right-[-190px] md:right-[-160px] lg:right-[-40px] xl:right-[-2px]">
                        <Image src={wolf} width={360} alt="wolf" className="relative w-full top-[5px] object-contain sm:top-[-1px] sm:w-[443px] md:w-[505px] lg:w-[519px] xl:w-[593px]"/>
                    </div>
                </div>

            <div className="mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
                <Ticker green />
            </div>
        
        </section>
    )
}