import closeSign from "../assets/closeSign.png"
import addsign from "../assets/AddSign.png"
import ArrowDown from "../assets/ArrowDown.png"
export default function TreatementDetail ()
{
    return (
        <>
        <div className="my-12 bg-[#F9FAFF]  px-[8px] pt-[16px] pb-[8px] w-[703px] border h-[375px] rounded-lg ">
                <div className=" pb-[9px] px-[8px]">
                    <div className=" rounded-lg">
                        <h1 className="text-[#444753] font-semibold font-montserrat text-[15px] ">
                            Skin improvement (4)
                        </h1>
                        <p className="font-montserrat text-[#AEB2BF] font-medium text-[11px]">
                            Treatements
                        </p>
                    </div>

                </div>
                <div className="rounded w-px] h-[177px] border-[1px] border-[#DADAFC]">

                    <div className="w-[687px]  flex border-b-[1px] border-[#DADAFC] justify-between items-center">
                        <div className="px-[16px] w-[90%] font-montserrat text-[#585C6A] font-medium text-[12px]"><p className="">Chemical Peel</p></div>
                        <div className=" px-4  py-4 w-[7%]  border-l-[1px] border-[#DADAFC] text-[8px] cursor-pointer"><img src={closeSign} alt="closeSign" /></div>
                    </div>
                </div>

                <div className="  flex justify-between items-center mx-4 my-2 cursor-pointer">
                    <div className="px-[16px] border py-3 rounded-lg  w-[90%] font-montserrat flex items-center text-[#71788E] font-normal text-[14px]"><p className="w-[97%]">Select Treatement...</p><img src={ArrowDown} alt="DoctorProfileImg" className="px-2 cursor-pointer" /></div>
                    <div className=" px-4 border py-4 w-[7%] rounded-lg text-[8px] cursor-pointer"><img src={addsign} alt="addsign" /></div>
                </div>

                <div className="  flex justify-center items-center mx-4 my-2 cursor-pointer">
                    <div className="font-montserrat bg-[#ffffff] rounded-lg text-[#6968EC] py-[15px] w-[50%] flex justify-center items-center  mx-1 border font-bold text-[14px]">Cancle</div>
                    <div className="font-montserrat bg-[#6968EC] rounded-lg text-[#ffffff] py-[15px] w-[50%] flex justify-center items-center  mx-1 border font-bold text-[14px]">Save</div>
                </div>
            </div>
        </>
    )
}