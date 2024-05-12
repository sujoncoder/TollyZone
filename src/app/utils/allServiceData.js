import { BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";

// id generator
const id = crypto.randomUUID();

// Define icon size
const iconSize = "w-16 h-16 text-slate-700";

const AllServiceData = [
  {
    id: id,
    tittle: "YTT-Download",
    icon: <FaDownload className={iconSize} />,
    link: "/thumbnaildownload",
  },
  {
    id: id,
    tittle: "Github User",
    icon: <BsGithub className={iconSize} />,
    link: "/githubuser",
  },
  {
    id: id,
    tittle: "Qr Generator",
    icon: <IoQrCodeOutline className={iconSize} />,
    link: "/qrcode",
  },
];

export default AllServiceData;
