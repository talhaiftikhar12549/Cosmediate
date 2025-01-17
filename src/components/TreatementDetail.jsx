import closeSign from "../assets/closeSign.png"
import addsign from "../assets/AddSign.png"
import ArrowDown from "../assets/ArrowDown.png"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { selectedTreatement } from "../store/treatementSlice"
export default function TreatementDetail() {
    const trementailSlicedetails = useSelector((state) => state.treatement.tretementsItemsDetail)
    const treamentProperties = trementailSlicedetails.technology
    const cartItems = useSelector((state) => state.treatement.selectedTreatementItems)

    const cartLength = cartItems.length
    const [dropDown, setDropDown] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <div className=" my-12 bg-[#F9FAFF]  px-[8px] pt-[16px] pb-[8px] w-[703px] border h-[375px] rounded-lg ">
                <div className=" pb-[9px] px-[8px]">
                    <div className=" rounded-lg">
                        <h1 className="text-[#444753] font-semibold font-montserrat text-[15px] ">
                            {trementailSlicedetails.title} ( {cartLength} )
                        </h1>
                        <p className="font-montserrat text-[#AEB2BF] font-medium text-[11px]">
                            Treatements
                        </p>
                    </div>

                </div>
                <div className="bg-[#FFFFFF] rounded h-[177px] border-[1px] border-[#DADAFC] overflow-y-auto">
    {
        cartItems.map((itm, index) => (
            <div key={index}>
                <div className="flex justify-between items-center max-w-full">
                    <div className="px-[16px] w-[90%] font-montserrat text-[#585C6A] font-medium text-[12px]">
                        <p>{itm}</p>
                    </div>
                    <div className="px-4 py-4 w-[7%] border-l-[1px] border-[#DADAFC] text-[8px] cursor-pointer">
                        <img src={closeSign} alt="closeSign" />
                    </div>
                </div>
                <div className="border-[#DADAFC] border-[0.5px] w-full"></div>
            </div>
        ))
    }
</div>



                <div className="relative " >


                    <div className="z-50">
                        <div
                            onClick={() => setDropDown(!dropDown)}
                            className="flex justify-between items-center mx-4 my-2 cursor-pointer"
                        >
                            <div className="bg-[#FFFFFF] px-[16px] border py-3 rounded-lg w-[90%] font-montserrat flex items-center text-[#71788E] font-normal text-[14px]">
                                <p className="w-[97%]">Select Treatment...</p>
                                <img src={ArrowDown} alt="DoctorProfileImg" className="px-2 cursor-pointer"
                                />
                            </div>
                            <div className="px-4 border py-4 w-[7%] rounded-lg text-[8px] cursor-pointer">
                                <img src={addsign} alt="addsign" />
                            </div>
                        </div>

                        {dropDown && (
                            <div className="w-[86%] absolute z-50 bg-[#FFFFFF] shadow-sm my-1 px-4 mx-4 rounded-lg border text-[#71788E]">
                                {treamentProperties.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer py-2 rounded-lg hover:text-[#6968EC] hover:font-semibold"
                                        onClick={() => dispatch(selectedTreatement(tech))}
                                    >
                                        <p className="font-montserrat text-[14px]">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center mx-4 my-2 cursor-pointer">
                        <div className="font-montserrat bg-[#ffffff] rounded-lg text-[#6968EC] py-[15px] w-[50%] flex justify-center items-center mx-1 border font-bold text-[14px]">
                            Cancel
                        </div>
                        <div className="font-montserrat bg-[#6968EC] rounded-lg text-[#ffffff] py-[15px] w-[50%] flex justify-center items-center mx-1 border font-bold text-[14px]">
                            Save
                        </div>
                    </div>



                </div>



            </div>
        </>
    )
}