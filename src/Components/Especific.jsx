import { TbSeo } from "react-icons/tb"
import { IoIosCloudDone } from "react-icons/io"
import { SiAlwaysdata } from "react-icons/si"


export const Especific = () => {
    return (
        <section className="bg-[#b4cbf8]">
            <div className="bg-[url('/GroupXL.png')] bg-cover px-20 py-10 pb-[1rem] h-screen">

                <h3 className="font-bold text-[36px] leading-10 text-center text-[#1F3154]">Simple, Fast, Effective Recruitment Assistance !</h3>
                <p className="mt-2 font-medium text-[18px] leading-5 text-center text-[#1F3154]">To Save You Even More Time, We Receive All The Cvs And We Launch An Extremely Fine Preselection.</p>


                <div className="flex flex-wrap justify-center mt-[76px] items">
                    <div className="w-1/2  mb-10" >
                        <span className="text-center  flex items-center flex-col justify-center">
                            <IoIosCloudDone className="text-[#FE6144] mb-7 text-center text-[45px] " />
                        </span>
                        <h4 className="font-bold text-[20px] leading-7 text-center text-[#1F3154] ">Entrust your needs to recruitment <br /> professionals</h4>
                        <p className="mt-4 last:font-medium text-[16px] leading-6 text-center text-[#1F3154]">At RecrutCom, you have peace of mind, your needs are taken care of by a professional recruitment consultant and expert in your field of activity!</p>
                    </div>
                    <div className="w-1/2 mb-10 " >
                        <span className="text-center  flex items-center flex-col justify-center">
                            <SiAlwaysdata className="text-[#FE6144] mb-7 text-center text-[45px] " />
                        </span>
                        <h4 className="font-bold text-[20px] leading-7 text-center text-[#1F3154] ">Entrust your needs to recruitment <br /> professionals</h4>
                        <p className="mt-4 last:font-medium text-[16px] leading-6 text-center text-[#1F3154]">At RecrutCom, you have peace of mind, your needs are taken care of by a professional recruitment consultant and expert in your field of activity!</p>
                    </div>
                    <div className="w-1/2  mb-10" >
                        <span className="text-center  flex items-center flex-col justify-center">
                            <TbSeo mb-10 className="text-[#FE6144] mb-7 text-center text-[45px]" />

                        </span>
                        <h4 className="font-bold text-[20px] leading-7 text-center text-[#1F3154] ">Entrust your needs to recruitment <br /> professionals</h4>
                        <p className="mt-4 last:font-medium text-[16px] leading-6 text-center text-[#1F3154]">At RecrutCom, you have peace of mind, your needs are taken care of by a professional recruitment consultant and expert in your field of activity!</p>
                    </div>
                    <div className="w-1/2 mb-10 " >
                        <span className="text-center  flex items-center flex-col justify-center">
                            <TbSeo className="text-[#FE6144] mb-7 text-center text-[45px] " />
                        </span>
                        <h4 className="font-bold text-[20px] leading-7 text-center text-[#1F3154] ">Entrust your needs to recruitment <br /> professionals</h4>
                        <p className="mt-4 last:font-medium text-[16px] leading-6 text-center text-[#1F3154]">At RecrutCom, you have peace of mind, your needs are taken care of by a professional recruitment consultant and expert in your field of activity!</p>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

        </section>
    )
}
