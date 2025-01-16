import SideBar from "./SideBar"
import HeroSection from "./HeroSection"
export default function DashBoard() {
    return (
        <>
        <section className="flex flex-row h-[100%] w-[100%]">
        <SideBar />
        <HeroSection />
        </section>
           
        </>
    )
}