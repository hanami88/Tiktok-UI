import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers,
    faMagnifyingGlass,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCompass,
    faHouse,
    faUser,
    faCloud,
    faBell,
    faCirclePlay,
    faCircleUser,
    faComment,
} from '@fortawesome/free-regular-svg-icons';
function Sidebar() {
    return (
        <div className="h-screen w-[13rem] ml-[1.3rem] flex flex-col justify-between ">
            <img
                src="/picture/logo.png"
                alt="logo"
                className="w-[9rem] h-[3.2rem] mt-4"
            />
            <div className="relative">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFFFFF66] text-[14px]"
                />
                <input
                    type="text"
                    className="w-full h-[40px] outline-none rounded-[20px] bg-[#1F1F1F] pl-9 text-[14px] placeholder:text-[#FFFFFF66] text-white mb-2"
                    placeholder="Search"
                />
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon className="size-16-margin-2" icon={faHouse} />
                <div className="text-sidebar">For you</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faCompass}
                />
                <div className="text-sidebar">Explore</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon className="size-16-margin-2" icon={faUser} />
                <div className="text-sidebar">Following</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon className="size-16-margin-2" icon={faUsers} />
                <div className="text-sidebar">Friends</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon className="size-16-margin-2" icon={faCloud} />
                <div className="text-sidebar">Upload</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon className="size-16-margin-2" icon={faBell} />
                <div className="text-sidebar">Notifications</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faComment}
                />
                <div className="text-sidebar">Messages</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faCirclePlay}
                />
                <div className="text-sidebar">LIVE</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faCircleUser}
                />
                <div className="text-sidebar">Profile</div>
            </div>
            <div className="hover-sidebar group">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faEllipsis}
                />
                <div className="text-sidebar">More</div>
            </div>
            <div className="border-t-[0.5px] border-[#FFFFFF1F] py-1 mb-4">
                <div className="text-[#FFFFFFBF] text-[14px] py-2">
                    Following accounts
                </div>
                <div className="flex items-center">
                    <img
                        src="/picture/ken.jpeg"
                        alt=""
                        className="w-[1.7rem] h-[1.7rem] rounded-[50%] mr-3"
                    />
                    <div>
                        <div className="text-[#F6F6F6] font-[450] text-[14px]">
                            keng
                        </div>
                        <div className="text-[#F6F6F6] font-[400] text-[14px]">
                            ken.chinnhut
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
