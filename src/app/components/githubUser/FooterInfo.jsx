import { FaLink, FaXTwitter } from "react-icons/fa6";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
const FooterInfo = ({ onUserData }) => {
  return (
    <div className="flex justify-between items-center pb-2">
      {/* location  */}
      <div className="flex justify-center items-center space-x-2">
        <MdOutlineLocationOn className="w-6 h-6" />
        <span className="text-sm">{onUserData.location}</span>
      </div>
      {/* twitter  */}
      <div className="flex justify-center items-center space-x-2">
        <FaXTwitter className="w-6 h-6" />
        <span>Not Available</span>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <HiOutlineBuildingOffice className="w-6 h-6" />
        <span>Not Available</span>
      </div>
      {/* twitter  */}
      <div className="flex justify-center items-center space-x-2">
        <FaLink className="w-6 h-6" />
        <span>hello.com</span>
      </div>
    </div>
  );
};

export default FooterInfo;
