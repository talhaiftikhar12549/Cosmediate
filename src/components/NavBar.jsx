import cosmediatelogo from "../assets/CosmediateLogo.png"
import searchImg from "../assets/searchImg.png"
import BellIcon from "../assets/BellIcon.png"
import EllipseIcon from "../assets/EllipseIcon.png"
import DoctorProfileImg from "../assets/DoctorProfileImg.png"
import ArrowDown from "../assets/ArrowDown.png"
export default function NavBar() {
    return (
        <>
            <nav className="bg-[#F9F9FB] h-[76px] flex flex-row items-center justify-around">

                {/* Cosmediate Logo */}
                <div className="cursor-pointer">
                    <img src={cosmediatelogo} alt="cosmediatelogo" />
                </div>
                {/* Cosmediate Logo */}

                {/* Search Bar */}
                <div>
                    <div>

                        <div className="bg-[#F9F9FB] border-[#DADAFC] border-2 w-[460px] h-[48px] rounded-lg flex flex-row items-center px-[16px] cursor-pointer">
                            <img src={searchImg} alt="searchImg" />
                            <p className="text-[#8F95A9] text-lg font-normal font-montserrat px-[16px] ">search</p>
                        </div>
                    </div>
                </div>
                {/* Search Bar */}

                {/* Doctor Profile */}
                <div className="flex flex-row items-center">
                    <div className="relative py-0.5 px-1">
                        <img src={EllipseIcon} alt="EllipseIcon" className="absolute right-0 top-0" />
                        <img src={BellIcon} alt="BellIcon" />
                    </div>
                    <div className="px-3 flex flex-row items-center">

                        <img src={DoctorProfileImg} alt="DoctorProfileImg" className="px-2" />

                        <div>
                            <div>
                                <p className="font-montserrat text-sm font-normal text-[#444753] ">Tim Bouwman</p>
                                <p className="font-montserrat text-xs font-normal text-[#8F95A9] font-medium ">Aēstec Amsterdam </p>
                            </div>
                        </div>
                        <img src={ArrowDown} alt="DoctorProfileImg" className="px-10" />
                    </div>
                </div>
                {/* Doctor Profile */}
            </nav>
        </>
    )
}