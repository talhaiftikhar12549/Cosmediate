import React, { useState } from 'react';
import TreatementDetail from './TreatementDetail';
import treatementsData from "../components/treatementsData"
import { useDispatch } from 'react-redux';
import {treatementdetailsection} from "../store/treatementSlice"
export default function treatements() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [treatementSelected, setTreatementSelected] =  useState(false)
    const dispatch = useDispatch()
    return (
        <>
            {/* Treatment div */}

            <div className=" px-12">

                <div className="w-[260px] h-[206px]  rounded-lg">

                    <h1 className="text-[#444753] font-bold font-montserrat text-xl ">
                        Treatements
                    </h1>

                    <div className=" rounded-lg my-6 flex flex-col justify-between">
                        {
                            treatementsData.map((items, index) => (
                                <div key={index} className={`cursor-pointer rounded-lg h-[48px] py-[4px] px-[16px] flex items-center transition-colors duration-300 ${selectedCategory === index ? 'bg-[#F9FAFF] text-[#6968EC] font-semibold' : 'bg-white text-[#71788E] font-medium'}`} onClick={() =>{dispatch(treatementdetailsection({id : index, title: items.title, technology: items.technologies })); setSelectedCategory(index); setTreatementSelected(true)} }>
                                    <p className={`font-montserrat text-[14px]  `}>{items.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            {/* Treatment div */}

            {/* detail div */}
            {treatementSelected && <TreatementDetail />
            }
            
            {/* detail div */}
        </>
    )
}