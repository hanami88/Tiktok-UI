import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
    faCompass,
    faHouse,
    faUser,
    faCloud,
} from '@fortawesome/free-regular-svg-icons';
function Sidebar() {
    return (
        <div className="h-screen w-[12rem] ml-[1.5rem] flex flex-col justify-between ">
            <img
                src="/picture/logo.png"
                alt="logo"
                className="w-[9rem] h-[3.2rem]"
            />
            <input type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <div className="flex-center w-full">
                <FontAwesomeIcon className="size-16-margin-2" icon={faHouse} />
                <div className="text-sidebar">For you</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faCompass}
                />
                <div className="text-sidebar">Explore</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon className="size-16-margin-2" icon={faUser} />
                <div className="text-sidebar">Following</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon className="size-16-margin-2" icon={faUsers} />
                <div className="text-sidebar">Friends</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon className="size-16-margin-2" icon={faCloud} />
                <div className="text-sidebar">Upload</div>
            </div>
        </div>
    );
}

export default Sidebar;
