import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faCompass,
    faUserPlus,
    faUsers,
    faCloudArrowUp,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
    return (
        <h1 className="h-screen w-[15rem]">
            <img src="" alt="" />
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
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faUserPlus}
                />
                <div className="text-sidebar">Following</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon className="size-16-margin-2" icon={faUsers} />
                <div className="text-sidebar">Friends</div>
            </div>
            <div className="flex-center w-full">
                <FontAwesomeIcon
                    className="size-16-margin-2"
                    icon={faCloudArrowUp}
                />
                <div className="text-sidebar">Upload</div>
            </div>
        </h1>
    );
}

export default Sidebar;
