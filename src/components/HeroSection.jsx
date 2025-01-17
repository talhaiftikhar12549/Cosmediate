import { useState } from "react"
import Treatements from "./TreatementComponent"
export default function HeroSection() {
    const [catogeryClick, SetCatogeryClick] = useState(null)

    return (
        <>
            <div className="h-[100%] w-[100%]">

                {/* Heading Div */}

                <div className="h-[10%] px-8 flex items-center">
                    <h1 className="text-[#444753] font-bold font-montserrat text-3xl ">
                        Settings
                    </h1>
                </div>

                {/* Heading Div */}


                {/* Items Div */}

                <div className="px-8 flex">

                    {/* catogery div */}

                    <div className="">
                        <div className="rounded-lg p-[4px] flex flex-col justify-between w-[260px] h-[206px] bg-[#F3F6FF]">
                            <div
                                onClick={() => SetCatogeryClick(0)} // Set active index for this div
                                className={`cursor-pointer rounded-lg h-[48px] py-[4px] px-[16px] flex items-center transition-colors duration-300 ${catogeryClick === 0
                                    ? "bg-white text-[#6968EC] font-semibold"
                                    : "bg-[#F3F6FF] text-[#71788E] font-medium text-[14px]"
                                    }`}
                            >
                                <p className="font-montserrat text-[14px]">General</p>
                            </div>

                            <div
                                onClick={() => SetCatogeryClick(1)} // Set active index for this div
                                className={`cursor-pointer rounded-lg h-[48px] py-[4px] px-[16px] flex items-center transition-colors duration-300 ${catogeryClick === 1
                                    ? "bg-white text-[#6968EC] font-semibold"
                                    : "bg-[#F3F6FF] text-[#71788E] font-medium text-[14px]"
                                    }`}
                            >
                                <p className="font-montserrat text-[14px]">Password</p>
                            </div>

                            <div
                                onClick={() => SetCatogeryClick(2)} // Set active index for this div
                                className={`cursor-pointer rounded-lg h-[48px] py-[4px] px-[16px] flex items-center transition-colors duration-300 ${catogeryClick === 2
                                    ? "bg-white text-[#6968EC] font-semibold"
                                    : "bg-[#F3F6FF] text-[#71788E] font-medium text-[14px]"
                                    }`}
                            >
                                <p className="font-montserrat text-[14px]">Price</p>
                            </div>

                            <div
                                onClick={() => SetCatogeryClick(3)} // Set active index for this div
                                className={`cursor-pointer rounded-lg h-[48px] py-[4px] px-[16px] flex items-center transition-colors duration-300 ${catogeryClick === 3
                                    ? "bg-white text-[#6968EC] font-semibold"
                                    : "bg-[#F3F6FF] text-[#71788E] font-medium text-[14px]"
                                    }`}
                            >
                                <p className="font-montserrat text-[14px]">Treatments</p>
                            </div>
                        </div>

                    </div>

                    {/* catogery div */}

                    {catogeryClick === 3 ? <>
                        <Treatements />
                    </> : <></>

                    }


                </div>
                {/* Items Div */}


            </div>
        </>
    )
}