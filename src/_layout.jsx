import { FiMenu, FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdPhoneCallback } from "react-icons/md";
import { FiMail } from "react-icons/fi";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div className="">
            <header className="z-20 font-Header py-[10px] flex justify-between h-[70px] items-center font-normal bg-white fixed w-full px-20">
                <a href="#" className="text-[#FE6144] text-[28px] font-semibold">RecruitCom</a>
                <nav className="hidden md:block">
                    <ul className="flex gap-7 text-[#1f3154be] ">
                        <li><a href="#" className="text-[15px] border-b-2 border-[#FE6144] text-[#FE6144] py-1">Welcome</a></li>
                        <li><a href="#" className="text-[15px] hover:text-[#FE6144]">Who we are</a></li>
                        <li><a href="#" className="text-[15px] hover:text-[#FE6144]">Candidate</a></li>
                        <li><a href="#" className="text-[15px] hover:text-[#FE6144]">Contact us</a></li>
                        <li><a href="#" className="text-[15px] hover:text-[#FE6144]">home</a></li>
                    </ul>
                </nav>
                <div className="flex gap-2 items-center">

                    <form className="bg-[#F3F5F9] flex flex-row items-center justify-center p-1 rounded-2xl">
                        <span className="mx-1 ">
                            <FiSearch className="text-[#999898]" />
                        </span>
                        <input type="search" placeholder="Search" name="search" id="search" className="bg-transparent outline-none  w-[150px]" />
                    </form>
                    <a href="" className="bg-[#F3F5F9] p-2 rounded-full text-[#999898]"><FiMenu /></a>
                </div>
            </header>
            <main className="">
                {children}
            </main>

            <footer className="mt-20  bg-[#1F3154] flex flex-row flex-wrap justify-between items-center px-20 py-10">
                <div className="">
                    <div>
                        <a href="#" className="text-[#FE6144] text-[28px] font-semibold ">RecruitCom</a>
                        <p className="text-white text-[16px] w-[396px] mt-[20px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the </p>

                    </div>
                    <ul className="mt-4">
                        <li className="flex items-center gap-2 text-white hover:text-gray-400 text-[16px]"> <GoLocation className="" />131 boulevard Pereire, 75017 Paris, Francer</li>
                        <li className="flex items-center gap-2 text-white hover:text-gray-400 text-[16px]"> <MdPhoneCallback className="" />+33 1 88 61 89 20</li>
                        <li className="flex items-center gap-2 text-white hover:text-gray-400 text-[16px]"> <FiMail className="" />contact@recrutcom.fr</li>
                    </ul>
                </div >

                <div className="">
                    <ul>
                        <li className="text-white text-[16px] mb-[7px] hover:text-gray-400"><a href="#">Welcome</a></li>
                        <li className="text-white text-[16px] mb-[7px] hover:text-gray-400"><a href="#">Who we are</a></li>
                        <li className="text-white text-[16px] mb-[7px] hover:text-gray-400"><a href="#">Company</a></li>
                        <li className="text-white text-[16px] mb-[7px] hover:text-gray-400"><a href="#">Carrer</a></li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="text-[18px] text-white font-medium leanding-[20px] mb-4">Subscribe to our newsletter</h5>
                    <form className="bg-[#F3F5F9] flex flex-row items-center justify-center p-2 rounded-2xl">

                        <input type="email" placeholder="Your Email" name="email" id="email" className="bg-transparent outline-none  w-[200px] text-gray-500 " />
                        <a href="#" className="text-white px-7 py-1 bg-[#FE6144] rounded-[16px] ">Send</a>
                    </form>
                </div>
            </footer>
        </div>

    );
}
export default Layout;