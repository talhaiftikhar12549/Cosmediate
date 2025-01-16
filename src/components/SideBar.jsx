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
            <section className="flex flex-row h-[100%]">

                {/*left spacer bar */}
                <div className="bg-[#F9F9FB] w-[5px]"></div>
                {/*left spacer bar */}

                {/* SideBar */}
                <div className="w-[106px] h-[100%] bg-[#F9F9FB] flex flex-col items-center">
                    {/* Nav Items */}
                    <div className="w-[100%]">
                        <div className="flex flex-col items-center cursor-pointer py-3">
                            <img src={dashBoardIcon} alt="dashBoardIcon" className="py-2" />
                            <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">DASHBOARD</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3 relative">
                            <img src={notificationEllipse} alt="notificationEllipse" className="absolute left-[55%]" />
                            <img src={inboxIcon} alt="inboxIcon" className="py-2" />
                            <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">INBOX</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3">
                            <img src={scheduleIcon} alt="scheduleIcon" className="py-2" />
                            <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">SCHEDULE</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer py-3 relative">
                            <img src={reviewsEllipse} alt="reviewsEllipse" className="absolute left-[55%]" />
                            <img src={reviewIcon} alt="reviewIcon" className="py-2" />
                            <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">REVIEWS</p>
                            <img src={curveRectangleUp} alt="curveRectangleUp" className="absolute bottom-0 right-0" />
                        </div>

                        <div className="flex flex-col items-center cursor-pointer bg-[#ffffff] py-3 rounded-l-2xl">
                            <img src={settingsIcon} alt="settingsIcon" className="py-2" />
                            <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">SETTINGS</p>
                        </div>

                        <div className="relative">
                            <img src={curveRectangleDown} alt="curveRectangleDown" className="absolute top-0 right-0" />
                        </div>
                    </div>

                    {/* Log Out */}
                    <div className="flex bg-[#F9F9FB] py-4 flex-col items-center justify-end w-[100%] flex-grow">
                        <img src={logOut} alt="logOut" className="py-2" />
                        <p className="font-montserrat text-[9px] font-medium text-[#8F95A9]">LOGOUT</p>
                    </div>
                    {/* Log Out */}
                </div>
                {/* SideBar */}
            </section>


        </>
    )
}