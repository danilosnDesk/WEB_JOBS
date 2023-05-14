
const Home = () => {
    return (
        <section className="mb-20 home px-7 bg-[url('/home-hero.png')] w-full h-[994px] bg-h- bg-no-repeat bg-cover bg-top flex justify-center items-center">
            <div className="z-10 h-full w-full">
                <div className="flex pt-48 justify-center">
                    <div className="text-center w-[70%]">
                        <h3 className="text-white text-4xl md:text-6xl capitalize  md:leading-[94px] font-semibold -tracking-tighter">Connecting to your <span className="border-b-4 border-[#FE6144] ">dream</span> <span className="border-b-4 border-[#FE6144] ">carrer</span> in Angola</h3>
                        <div className="flex flex-col-reverse pt-4">


                            <p className="font-medium text-white opacity-80 text-xl  space-y-reverse">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nesciunt culpa illo voluptatibus
                            </p>
                            <p className="font-medium text-white opacity-80 text-xl  space-y-reverse" >

                                nisi deleniti optio adipisci,
                                velit, similique, mollitia placeat

                            </p>
                        </div>
                        <div className="mt-8">
                            <a href="#" className="bg-[#FE6144] hover:bg-transparent hover:border-2 border-[#FE6144] uppercase text-white hover:text-[#FE6144] py-[12px] px-4 mx-2 rounded-[15px] leading-[12px] text-[14px] font-normal">Submint your CV</a>
                            <a href="#" className="uppercase text-white hover:text-gray-800 hover:bg-white   border-2 py-[12px] px-4 mx-2 rounded-[15px] leading-[12px] text-[14px] font-normal">contact us</a>
                        </div>
                    </div>
                </div>
                <div className="flex pt-28 justify-center items-center w-full">
                    <div className="bg-white w-full md:w-[88%]  shadow-xl  flex flex-col gap-2 items-center py-7 rounded-xl md:flex-row">
                        <div className="h-auto bg-[#F3F5F9] rounded-[24px] px-[24px] py-[10px] flex  flex-col justify-start ml-2 w-10/12 md:w-1/4">
                            <h3 className="text-[42px] text-[#1F3154] font-bold">275<span className="text-[#FE6144]">+</span></h3>
                            <p className="text-[#1F3154] text-[16px] font-semibold"> Recruitments per year in our platform </p>
                        </div>
                        <div className="h-auto bg-[#F3F5F9] rounded-[24px] px-[24px] py-[10px] flex flex-col justify-start ml-2 w-10/12 md:w-1/4">
                            <h3 className="text-[42px] text-[#1F3154] font-bold">20<span className="text-[#FE6144]">K</span></h3>
                            <p className="text-[#1F3154] text-[16px] font-semibold">New profiles each year in
                                our candidate database </p>
                        </div>
                        <div className="h-auto bg-[#F3F5F9] rounded-[24px] px-[24px] py-[10px] flex flex-col justify-start ml-2 w-10/12 md:w-1/4">
                            <h3 className="text-[42px] text-[#1F3154] font-bold">95<span className="text-[#FE6144]">%</span></h3>
                            <p className="text-[#1F3154] text-[16px] font-semibold">Of clients satisfied by our
                                recruitment firm </p>
                        </div>
                        <div className="h-auto bg-[#F3F5F9] rounded-[24px] px-[24px] py-[10px] flex flex-col justify-start ml-2 w-10/12 md:w-1/4">
                            <h3 className="text-[42px] text-[#1F3154] font-bold">20<span className="text-[#FE6144]">K</span></h3>
                            <p className="text-[#1F3154] text-[16px] font-semibold">People follow us on
                                social network </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="z-0 absolute w-full  bg-[#1f3154d0] h-[994px]">
                <img src="/Vector.png" className="z-10 w-full absolute bottom-0" />
            </div>


        </section >

    )
}

export default Home