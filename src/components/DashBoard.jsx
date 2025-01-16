import SideBar from "./SideBar"
import HeroSection from "./HeroSection"
export default function DashBoard() {
    return (
        <>
            <section className="flex flex-row h-[100%] w-[100%]">
                <SideBar />
                <HeroSection />
                {/*left spacer bar */}
                <div className="bg-[#F9F9FB] w-[5px]"></div>
                {/*left spacer bar */}
            </section>

        </>
    )
}