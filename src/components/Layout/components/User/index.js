import {
    faTiktok,
    FontAwesomeIcon,
    faMobileScreenButton,
    faCircleUser,
} from '~/icon';
function User() {
    return (
        <div className="w-[17rem] mr-7 h-[3rem] flex rounded-[2rem] bg-[#2C2C2CCC] mt-6">
            <div className="flex rounded-[2rem] text-[#F0F0F0] items-center ml-4 w-[5.5rem] text-[14px]">
                <FontAwesomeIcon icon={faTiktok} className="text-[16px] mr-1" />
                <div className="font-[450]">Get coins</div>
            </div>
            <div className="flex rounded-[2rem] text-[#F0F0F0] items-center ml-3 w-[5.5rem] text-[14px] ">
                <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    className="text-[16px] mr-1"
                />
                <div className="font-[450]">Get App</div>
            </div>
            <FontAwesomeIcon
                icon={faCircleUser}
                className=" text-[#F0F0F0] m-auto text-[25px] border-l-[1px] border-[#ffffff4d] pl-2"
            />
        </div>
    );
}

export default User;
