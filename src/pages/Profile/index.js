import {
    FontAwesomeIcon,
    faPlus,
    faCommentDots,
    faHeart,
    faBookmark,
    faShare,
} from '~/icon';
function Profile() {
    return (
        <div className="ml-[10rem] flex items-center text-[23px]">
            <iframe
                className="h-[95%] w-[24rem] rounded-[1rem]"
                src="https://www.youtube.com/embed/xXvZp8fxKuM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className="text-[#F0F0F0] mt-[67%] ml-4">
                <div className="relative mb-5 mx-auto w-[3rem] ml-1">
                    <img
                        src="/picture/ken.jpeg"
                        alt=""
                        className="w-[2.7rem] h-[2.7rem] rounded-[50%] mr-3 "
                    />
                    <div className="text-[12px] bg-[#FF3B5C] rounded-[50%] w-[1.5rem] h-[1.5rem] flex items-center justify-center absolute bottom-[-10px] left-[9px]">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <div className="bg-[#FFFFFF1F] rounded-[50%] w-[3rem] h-[3rem] flex items-center justify-center m-auto">
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </div>
                    <div className="text-[12px] text-center mb-3 mt-1">1T</div>
                </div>
                <div>
                    <div className="bg-[#FFFFFF1F] rounded-[50%] w-[3rem] h-[3rem] flex items-center justify-center m-auto">
                        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
                    </div>
                    <div className="text-[12px] text-center mb-3 mt-1">
                        120k
                    </div>
                </div>
                <div>
                    <div className="bg-[#FFFFFF1F] rounded-[50%] w-[3rem] h-[3rem] flex items-center justify-center m-auto">
                        <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                    </div>
                    <div className="text-[12px] text-center mb-3 mt-1">10k</div>
                </div>
                <div>
                    <div className="bg-[#FFFFFF1F] rounded-[50%] w-[3rem] h-[3rem] flex items-center justify-center m-auto">
                        <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                    </div>
                    <div className="text-[12px] text-center mb-3 mt-1">1k</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
