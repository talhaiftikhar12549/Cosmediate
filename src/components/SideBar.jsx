import logOut from "../assets/SignOut.png"
import dashBoardIcon from "../assets/DashBoard.png"
import inboxIcon from "../assets/InboxIcon.png"
import scheduleIcon from "../assets/ScheduleIcon.png"
import reviewIcon from "../assets/ReviewIcon.png"
import settingsIcon from "../assets/SettingsIcon.png"
import curveRectangleUp from "../assets/CurveRectangleUp.png"
import curveRectangleDown from "../assets/CurveRectangleDown.png"
import notificationEllipse from "../assets/NotificationEllipse.png"
import reviewsEllipse from "../assets/ReviewsEllipse.png"
export default function SideBar() {
    return (
        <>
            <section className=" fixed flex flex-row justify-evenly top-0 bottom-0 -z-50">

                {/* left Space Bar */}
                <div className="bg-[#F9F9FB] w-[10px]">
                </div>
                {/* left Space Bar */}

                {/* SideBar */}
                <div className="bg-[#F9F9FB] w-[106px] h-[100%] flex flex-col items-center justify-between py-[50%]">
                    {/* Nav Items */}
                    <div className=" w-[100%] ">

                        <div className="flex flex-col items-center cursor-pointer py-3  ">
                            <img src={dashBoardIcon} alt="dashBoardIcon" className="py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">DASHBOARD</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3 relative">
                            <img src={notificationEllipse} alt="notificationEllipse" className="absolute left-[55%]" />
                            <img src={inboxIcon} alt="inboxIcon" className="py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">INBOX</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3">
                            <img src={scheduleIcon} alt="scheduleIcon" className="py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">SCHEDULE</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3 relative">
                            <img src={reviewsEllipse} alt="reviewsEllipse" className="absolute left-[55%]" />
                            <img src={reviewIcon} alt="reviewIcon" className="py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">REVIEWS</p>
                            <img src={curveRectangleUp} alt="curveRectangleDown" className="absolute bottom-0 right-0" />
                        </div>

                        <div className="flex flex-col items-center cursor-pointer bg-[#ffffff] py-3 rounded-l-2xl">
                            <img src={settingsIcon} alt="settingsIcon" className="py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">SETTINGS</p>
                        </div>

                    </div>
                    {/* Nav Items */}

                    {/* Log Out  */}
                    <div className=" w-[100%] flex flex-col justify-between ">
                        <div  className="relative">
                            <img src={curveRectangleDown} alt="curveRectangleDown" className="absolute top-0 right-0 "/>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer ">
                            <img src={logOut} alt="logOut" className=" py-2" />
                            <p className="font-montserrat text-xs font-medium text-[#8F95A9]">LOGOUT</p>
                        </div>
                    </div>
                    {/* Log Out  */}

                </div>
                {/* SideBar */}
            </section>

        </>
    )
}