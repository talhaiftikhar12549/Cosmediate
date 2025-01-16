import cosmediatelogo from "../assets/CosmediateLogo.png"
import searchImg from "../assets/searchImg.png"
export default function NavBar() {
    return (
        <>
            <nav className="bg-[#F9F9FB] h-[76px] flex flex-row items-center justify-around">

                <div>
                    <img src={cosmediatelogo} alt="cosmediatelogo" />
                </div>

                <div>
                    <div>
                        {/* <input className="bg-[#F9F9FB] border-[#DADAFC] border-2" type="search" name="" id="" /> */}
                        <div className="bg-[#F9F9FB] border-[#DADAFC] border-2 w-[460px] h-[48px] rounded-lg flex flex-row items-center">
                            <img src={searchImg} alt="searchImg" />
                            <p className="text-[#8F95A9] text-lg font-normal font-montserrat ">search</p>
                        </div>
                    </div>
                </div>

                <div>

                </div>

            </nav>
        </>
    )
}